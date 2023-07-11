import {
  PasswordInputStyled,
  PasswordTextStyled,
  TitleContainer
} from "@password/features/password-generator/password-text/styles/passwordtext.styled";
import {Colors} from "@password/core/theme/types/colors";
import {CopyIcon} from "@password/core/icons/Copy/Copy";
import React from "react";
import {Typography} from "@password/core/components/typography/Typography";
import {usePasswordContext} from "@password/features/password-generator/hooks/usePasswordContext";

interface PasswordTextControlProps {
  value: string;
  placeholder: string;
}

export const PasswordTextControl: React.FC<PasswordTextControlProps> = ({ placeholder }) => {
  const { state } = usePasswordContext()
  return (
    <>
      <TitleContainer>
        <Typography variant={'heading'} color={Colors.GREY}>Password Generator</Typography>
      </TitleContainer>
      <PasswordTextStyled>
        <PasswordInputStyled
          type={'text'}
          readOnly={true}
          value={state.password}
          placeholder={placeholder}
          maxLength={20}
        />
        <CopyIcon color={Colors.NEONGREEN} />
      </PasswordTextStyled>
    </>
  )
}