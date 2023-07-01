import {createContext, Dispatch} from "react";
import {
  ActionTypes,
  GeneratePassword,
  initialState,
  PasswordInitialState, reducer
} from "@password/features/miguel-jardinez/password-generator/password-context/reducer/passwordReducer";

interface PasswordContext {
  state: PasswordInitialState,
  dispatch: Dispatch<ActionTypes>
}

export const PasswordContext = createContext<PasswordContext>({
  state: initialState,
  dispatch: () => null
});
