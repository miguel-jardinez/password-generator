import {
  Checkbox,
  CheckboxContainer, CheckboxItemContainer, CheckboxItemLabel
} from "@password/features/miguel-jardinez/password-generator/password-options/components/passwor-checkbox/passwordCheckbox.styled";
import {
  ConfigurationPassword
} from "@password/features/miguel-jardinez/password-generator/password-context/reducer/passwordReducer";
import {usePasswordContext} from "@password/features/miguel-jardinez/hooks/usePasswordContext";
import {
  CHANGE_CONFIGURATION_PASSWORD
} from "@password/features/miguel-jardinez/password-generator/password-context/reducer/PasswordTypes";

export const PasswordCheckboxList = () => {
  const { state, dispatch } = usePasswordContext()

  const onHandleCheck = (type: keyof ConfigurationPassword) => {
    switch (type) {
      case "lowerCase":
        dispatch({ type: CHANGE_CONFIGURATION_PASSWORD, payload: { ...state.configuration, lowerCase: !state.configuration.lowerCase } })
        break;
      case "upperCase":
        dispatch({ type: CHANGE_CONFIGURATION_PASSWORD, payload: { ...state.configuration, upperCase: !state.configuration.upperCase } })
        break;
      case "numbers":
        dispatch({ type: CHANGE_CONFIGURATION_PASSWORD, payload: { ...state.configuration, numbers: !state.configuration.numbers } })
        break;
      case "symbols":
        dispatch({ type: CHANGE_CONFIGURATION_PASSWORD, payload: { ...state.configuration, symbols: !state.configuration.symbols } })
        break;
    }
  }

  return (
    <CheckboxContainer>
      <CheckboxItemContainer>
        <Checkbox id="checkbox-upper" onClick={() => onHandleCheck('upperCase')} checked={state.configuration.upperCase} type={"checkbox"} />
        <CheckboxItemLabel htmlFor="checkbox-upper"  >Include Uppercase Letters</CheckboxItemLabel>
      </CheckboxItemContainer>

      <CheckboxItemContainer>
        <Checkbox id="checkbox-lower" onClick={() => onHandleCheck('lowerCase')} checked={state.configuration.lowerCase} type={"checkbox"} />
        <CheckboxItemLabel htmlFor="checkbox-lower" >Include Lowercase Letters</CheckboxItemLabel>
      </CheckboxItemContainer>


      <CheckboxItemContainer>
        <Checkbox id="checkbox-number" onClick={() => onHandleCheck('numbers')} checked={state.configuration.numbers} type={"checkbox"} />
        <CheckboxItemLabel htmlFor="checkbox-number" >Include Numbers</CheckboxItemLabel>
      </CheckboxItemContainer>

      <CheckboxItemContainer>
        <Checkbox id="checkbox-symbols" onClick={() => onHandleCheck('symbols')} checked={state.configuration.symbols} type={"checkbox"} />
        <CheckboxItemLabel htmlFor="checkbox-symbols">Include Symbols</CheckboxItemLabel>
      </CheckboxItemContainer>
    </CheckboxContainer>
  )
}