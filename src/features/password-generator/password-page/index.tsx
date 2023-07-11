import {
  OptionContainer,
  Page,
  PasswordPageContainer
} from "@password/features/password-generator/password-page/styles/passwordPage.styled";
import { PasswordButton } from "../password-button";
import { StrengthBar } from "@password/features/password-generator/strength-bar";
import { usePassword } from "@password/features/password-generator/hooks/usePassword";
import {PasswordTextControl} from "@password/features/password-generator/password-text";
import {PasswordOptions} from "@password/features/password-generator/password-options";
import {usePasswordContext} from "@password/features/password-generator/hooks/usePasswordContext";

export const PasswordPage = () => {
  const { state } = usePasswordContext();
  const { generatePassword } = usePassword()

  return (
    <Page>
      <PasswordPageContainer>
        <PasswordTextControl value={state.password} placeholder={'P4$5W0rD!'} />
        <OptionContainer>
          <PasswordOptions />

          <StrengthBar />
          <PasswordButton onClick={generatePassword}>
            Generate
          </PasswordButton>
        </OptionContainer>
      </PasswordPageContainer>
    </Page>
  );
}