import {
  StrengthBar,
  StrengthBarContentContainer,
} from "@password/features/password-generator/strength-bar/styles/StrengthBar.styled";
import {Typography} from "@password/core/components/typography/Typography";
import {Colors} from "@password/core/theme/types/colors";
import {usePasswordContext} from "@password/features/password-generator/hooks/usePasswordContext";
import {
  StrengthBarItems
} from "@password/features/password-generator/strength-bar/components/StrengthBarItems";

export function StrengthContent() {
  const { state } = usePasswordContext();

  return (
    <StrengthBarContentContainer>
      <Typography variant={'heading'} color={Colors.ALMOSTWHITE}>
        { state.strength }
      </Typography>
      <StrengthBar>
        <StrengthBarItems />
      </StrengthBar>
    </StrengthBarContentContainer>
  );
}