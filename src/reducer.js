export const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TAGS":
      const {
        payload: { name, filterProp },
      } = action;

      return {
        ...state,
        ...state.passingTags,
        [filterProp]: {
          ...state.passingTags[filterProp],
          [name]: !state.passingTags[filterProp][name],
        },
      };

    default:
      throw new Error("Dispatch not configured");
  }
};
