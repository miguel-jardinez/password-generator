import {createContext, Dispatch} from "react";
import {
  ActionTypes,
  initialState,
  PasswordInitialState
} from "@password/features/password-generator/password-context/reducer/passwordReducer";

interface PasswordContext {
  state: PasswordInitialState,
  dispatch: Dispatch<ActionTypes>
}

export const PasswordContext = createContext<PasswordContext>({
  state: initialState,
  dispatch: () => null
});
