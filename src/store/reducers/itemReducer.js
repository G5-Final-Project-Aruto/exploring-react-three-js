const initialState = {
  data: {
    current: null,
    items: {},
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "item/fetch":
      return {
        ...state,
        data: {
          ...state.data,
          items: payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
