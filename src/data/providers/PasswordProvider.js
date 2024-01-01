import { createContext, useReducer } from "react";

export const PasswordStateContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "confirm_password": {
      return {
        ...state,
        confirmPassword: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "show_password": {
      return {
        ...state,
        showPassword: action.payload,
      };
    }
    case "validation_message": {
      return {
        ...state,
        validationMessage: action.payload,
      };
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

const baseState = {
  confirmPassword: "",
  password: "",
  showPassword: false,
  validationMessage: "",
};

function PasswordProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, baseState);

  const hasLowercase = /[a-z]/.test(state.password);
  const hasMinLength = state.password.length >= 6;
  const hasNumber = /\d/.test(state.password);
  const hasSpecialChar = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(state.password);
  const hasUppercase = /[A-Z]/.test(state.password);
  const passwordsMatch = state.password === state.confirmPassword;

  const setConfirmPassword = (val) => {
    dispatch({ type: "confirm_password", payload: val });
  };
  const setPassword = (val) => {
    dispatch({ type: "password", payload: val });
  };
  const setShowPassword = (val) => {
    dispatch({ type: "show_password", payload: val });
  };
  const setValidationMessage = () => {
    dispatch({
      type: "validation_message",
      payload:
        hasLowercase &&
        hasMinLength &&
        hasNumber &&
        hasUppercase &&
        hasSpecialChar &&
        passwordsMatch
          ? "Password successfully validated!"
          : "Password validation failed. Please check the requirements.",
    });
  };

  const confirmPassword = state.confirmPassword;
  const password = state.password;
  const showPassword = state.showPassword;
  const validationMessage = state.validationMessage;

  return (
    <PasswordStateContext.Provider
      value={{
        confirmPassword,
        hasLowercase,
        hasMinLength,
        hasNumber,
        hasSpecialChar,
        hasUppercase,
        password,
        passwordsMatch,
        showPassword,
        validationMessage,
        setConfirmPassword,
        setPassword,
        setShowPassword,
        setValidationMessage,
      }}
    >
      {children}
    </PasswordStateContext.Provider>
  );
}

export default PasswordProvider;
