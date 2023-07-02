import {useReducer} from "react";
import {
  CHANGE_CONFIGURATION_PASSWORD, CHANGE_PASSWORD_STRONG,
  GENERATE_PASSWORD,
  SLIDER_CHANGE
} from "@password/features/miguel-jardinez/password-generator/password-context/reducer/PasswordTypes";

export interface ConfigurationPassword {
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export type PasswordStrength = 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG' | ''

export interface PasswordInitialState {
  password: string;
  strength: PasswordStrength,
  sliderLength: number,
  configuration: ConfigurationPassword
}

export type GeneratePassword = { type: typeof GENERATE_PASSWORD, payload: { password: string } }
export type SliderChange = { type: typeof SLIDER_CHANGE, payload: { sliderLength: number } }
export type ChangePasswordStrong = { type: typeof CHANGE_PASSWORD_STRONG, payload: PasswordStrength }
export type ChangeConfiguration = {
  type: typeof CHANGE_CONFIGURATION_PASSWORD,
  payload: ConfigurationPassword
}


export type ActionTypes = GeneratePassword | SliderChange | ChangeConfiguration | ChangePasswordStrong;

export const initialState: PasswordInitialState = {
  password: '',
  sliderLength: 0,
  strength: '',
  configuration: {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    symbols: false
  }
};

export function reducer(state: PasswordInitialState, action: ActionTypes): PasswordInitialState {
  switch (action.type) {
    case GENERATE_PASSWORD: {
      return { ...state, password: action.payload.password}
    }
    case SLIDER_CHANGE: {
      return { ...state, sliderLength: action.payload.sliderLength }
    }
    case CHANGE_CONFIGURATION_PASSWORD: {
      return { ...state, configuration: action.payload }
    }
    case CHANGE_PASSWORD_STRONG: {
      return { ...state, strength: action.payload }
    }
  }
}

export const usePasswordReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch }
}

