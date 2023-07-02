import {
  StrengthBar,
  StrengthBarContentContainer,
} from "@password/features/miguel-jardinez/password-generator/strength-bar/styles/StrengthBar.styled";
import {Typography} from "@password/core/components/typography/Typography";
import {Colors} from "@password/core/theme/types/colors";
import {usePasswordContext} from "@password/features/miguel-jardinez/hooks/usePasswordContext";
import {
  StrengthBarItems
} from "@password/features/miguel-jardinez/password-generator/strength-bar/components/StrengthBarItems";

export function StrengthContent() {
  const { state } = usePasswordContext();

  return (
    <StrengthBarContentContainer>
      <Typography variant={'heading'} uppercase={true} color={Colors.ALMOSTWHITE}>
        { state.strength }
      </Typography>
      <StrengthBar>
        <StrengthBarItems />
      </StrengthBar>
    </StrengthBarContentContainer>
  );
}