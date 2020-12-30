
from datetime import datetime
import calendar
import pandas
import matplotlib.pyplot as plt

import fitbit

STEP_ACTIVITY = "activities/steps"

def parse_datetime(date_string, fmt="%Y-%m-%d"):
    return datetime.strptime(date_string, fmt)

def parse_fitbit_data(fitbit_data):
    """
    Converts number of steps to int and parses string datetime.
    Adds day and month names.
    """
    new_fitbit_data = []
    for day in fitbit_data:
        d = {}
        d["datetime"] = parse_datetime(day["dateTime"])
        d["steps"] = int(day["value"])
        d["day"] = calendar.day_name[d["datetime"].weekday()]
        d["dayofweek"] = d["datetime"].weekday()
        d["month"] = calendar.month_name[d["datetime"].month]
        new_fitbit_data.append(d)
    return new_fitbit_data

refresh_token = "446db300152a6fcfd337c4f63c75934997c8135d2979f8eaf6a82f6265275c0d"
access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJYOVoiLCJzdWIiOiI2R0NaSksiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjA5MzY4ODQyLCJpYXQiOjE2MDkzNDAwNDJ9.T4135BiORZihniD2yCZvurR-_ikMK0WxPPW1silqPdc"

client_id = "22BX9Z"
client_secret = "a83df4d52431d08d61c4f4cac20eb6a9"


f = fitbit.Fitbit(client_id, client_secret, access_token=access_token, refresh_token=refresh_token)

march2019 = "2019-03-25"
november2019 = "2019-11-30"
march2020 = "2020-03-25"
november2020 = "2020-11-30"

fdata2019 = f.time_series(STEP_ACTIVITY, base_date=march2019, end_date=november2019)["activities-steps"]
fdata2020 = f.time_series(STEP_ACTIVITY, base_date=march2020, end_date=november2020)["activities-steps"]


data2019 = parse_fitbit_data(fdata2019)
data2020 = parse_fitbit_data(fdata2020)

df2019 = pandas.DataFrame(data2019).set_index('datetime')
df2020 = pandas.DataFrame(data2020).set_index('datetime')

df = pandas.concat([df2019, df2020])

mean_steps_df = df.groupby([df.index.map(lambda x: x.year), 'dayofweek']).mean()
mean_steps_df['steps'] = mean_steps_df['steps'].astype(int)

mean_steps_df.index = pandas.MultiIndex(levels=[mean_steps_df.index.levels[0], calendar.day_name],
                                        codes=mean_steps_df.index.codes,
                                        names=mean_steps_df.index.names)


mean_steps_month_df = df.groupby([df.index.map(lambda x: x.year), 'month']).mean()
mean_steps_month_df['steps'] = mean_steps_month_df['steps'].astype(int)
mean_steps_month_df = mean_steps_month_df['steps']

ax = mean_steps_df.unstack(0).plot(kind='bar', grid=True, rot=20)
ax.set_xlabel('Day')
ax.set_ylabel('Steps')
ax.set_title('Average Number of Steps Per Day')
ax.legend(['2019','2020'])
ax.grid(alpha=0.33)

plt.grid(b=True, which='major', color='#666666', linestyle='-')

# Show the minor grid lines with very faint and almost transparent grey lines
plt.minorticks_on()
plt.grid(b=True, which='minor', color='#999999', linestyle='-', alpha=0.2)

plt.tight_layout()
plt.savefig('steps_2019vs2020_patrickmcmichael.png')

months = [month for month in month_name if month in mean_steps_month_df.unstack(0).index.values]
ax2 = mean_steps_month_df.unstack(0).reindex(months).plot(kind='bar', grid=True, rot=20)
ax2.set_xlabel('Month')
ax2.set_ylabel('Steps')
ax2.set_title('Average Number of Steps Per Month')
ax2.legend(['2019','2020'])
ax2.grid(alpha=0.33)

plt.grid(b=True, which='major', color='#666666', linestyle='-')

plt.minorticks_on()
plt.grid(b=True, which='minor', color='#999999', linestyle='-', alpha=0.2)

plt.tight_layout()
plt.savefig('steps2019vs2020months.png')