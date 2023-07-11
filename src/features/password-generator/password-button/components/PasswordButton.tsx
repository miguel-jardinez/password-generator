import React from "react";
import {ButtonContainer} from "@password/features/password-generator/password-button/styles/button.styled";
import {ArrowRight} from "@password/core/icons/ArrowRight";
import {Colors} from "@password/core/theme/types/colors";

interface PasswordButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const PasswordButton: React.FC<PasswordButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonContainer onClick={ onClick }>
      <p>
        { children }
      </p>
      <ArrowRight color={Colors.DARKGREY} />
    </ButtonContainer>
  )
}