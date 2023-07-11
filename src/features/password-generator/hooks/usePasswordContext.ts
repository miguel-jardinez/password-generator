import {useContext} from "react";
import {PasswordContext} from "@password/features/password-generator/password-context/context/PasswordContext";

export const usePasswordContext = () => {
  const { state, dispatch } = useContext(PasswordContext);

  return {
    state,
    dispatch
  }
}