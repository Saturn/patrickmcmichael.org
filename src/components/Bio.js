import React from 'react';

import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(1),
        }}
      >
        <p>
          By <strong>Patrick McMichael</strong>. Find me on <a href={`https://github.com/Saturn`} target="_blank">Github</a>.
        </p>
      </div>
    );
  }
}

export default Bio;
