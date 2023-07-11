import {useEffect, useState} from "react";
import {usePasswordContext} from "@password/features/password-generator/hooks/usePasswordContext";
import {
  CHANGE_PASSWORD_STRONG,
  GENERATE_PASSWORD
} from "@password/features/password-generator/password-context/reducer/PasswordTypes";
import {
  ConfigurationPassword
} from "@password/features/password-generator/password-context/reducer/passwordReducer";
import { getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols } from "@password/utils/password-symbols";

export const usePassword = () => {
  const { dispatch, state } = usePasswordContext();
  const [configuration, setConfiguration] = useState<string[]>([]);

  const getRandomType = (): keyof ConfigurationPassword => {

    const type = Math.floor(Math.random() * (configuration.length) + 1);

    return configuration[type - 1] as keyof ConfigurationPassword
  }


  useEffect(() => {
    const newConfiguration = [];
    for (const [ key, value ] of Object.entries(state.configuration)) {
      if (value) {
        newConfiguration.push(key)
        setConfiguration(newConfiguration)
      }
    }
  }, [state.configuration])


  const checkPassword = (password: string) => {
    const tooWeak = configuration.length === 1;
    const weak = configuration.length === 2;
    const medium = configuration.length === 3 && password.length > 6;
    const strong = configuration.length === 4 && password.length > 8 ;

    if (tooWeak) {
      dispatch({ type: CHANGE_PASSWORD_STRONG, payload: 'TOO WEAK!' })
    }

    if (weak) {
      dispatch({ type: CHANGE_PASSWORD_STRONG, payload: 'WEAK' })
    }

    if (medium) {
      dispatch({ type: CHANGE_PASSWORD_STRONG, payload: 'MEDIUM' })
    }

    if (strong) {
      dispatch({ type: CHANGE_PASSWORD_STRONG, payload: 'STRONG' })
    }
  }

  const getCharacter = (type: keyof ConfigurationPassword): string => {
    switch (type) {
      case "lowerCase":
        return getLetterLowerCase()
      case "upperCase":
        return getLetterUpperCase()
      case "numbers":
        return getNumbers()
      case "symbols":
        return getSymbols()
    }
  }


  const generatePassword = () => {
    let password = '';

    for (let i = 0; i < state.sliderLength; i++) {
      const config = getRandomType();
      const char = getCharacter(config)
      password += char
    }

    checkPassword(password)
    dispatch({ type: GENERATE_PASSWORD, payload: { password } })
  }

  return {
    generatePassword,
  }
}
