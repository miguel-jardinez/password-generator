import React from "react";
import {StrengthBarContainer} from "@password/features/password-generator/strength-bar/styles/StrengthBar.styled";
import {StrengthContent} from "@password/features/password-generator/strength-bar/components/StrengthContent";
import {Typography} from "@password/core/components/typography/Typography";
import {Colors} from "@password/core/theme/types/colors";

export const StrengthBar: React.FC = () => {
  return (
    <StrengthBarContainer>
      <Typography variant={'body'} color={Colors.GREY}>
        STRENGTH
      </Typography>
      <StrengthContent />
    </StrengthBarContainer>
  );
}