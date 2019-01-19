import Typography from 'typography';
import Judah from 'typography-theme-judah';

Judah.bodyFontFamily = ['Georgia', 'serif'];

const typography = new Typography(Judah);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
