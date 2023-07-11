import { SliderLength } from "@password/features/password-generator/password-options/components/slider-lenght/sliderLength";
import {
  PasswordCheckboxList
} from "@password/features/password-generator/password-options/components/passwor-checkbox/passwordCheckboxList";

export const PasswordOptions = () => {
  return (
    <>
      <SliderLength />
      <PasswordCheckboxList />
    </>
  )
}