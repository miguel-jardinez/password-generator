import {PasswordContext} from "@password/features/miguel-jardinez/password-generator/password-context/context/PasswordContext";
import React from "react";
import {usePasswordReducer} from "@password/features/miguel-jardinez/password-generator/password-context/reducer/passwordReducer";

interface PasswordContextProviderProps {
  children: React.ReactNode
}

export const PasswordContextProvider: React.FC<PasswordContextProviderProps> = ({ children }) => {
  const { state, dispatch } = usePasswordReducer()

  return (
    <PasswordContext.Provider value={{ state, dispatch }}>
      { children }
    </PasswordContext.Provider>
  )
}