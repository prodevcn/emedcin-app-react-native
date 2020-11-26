import common from './common';
export default (state = {}, action) => {
  return {
    common: common(state.common, action),
  };
};
