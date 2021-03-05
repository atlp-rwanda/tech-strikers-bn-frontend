const initialState = {
  token: "",
};
export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_PASSWORD":
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
