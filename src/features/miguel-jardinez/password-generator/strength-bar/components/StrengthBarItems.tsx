import {
  StrengthBarItem
} from "@password/features/miguel-jardinez/password-generator/strength-bar/styles/StrengthBar.styled";
import {Colors} from "@password/core/theme/types/colors";
import {usePasswordContext} from "@password/features/miguel-jardinez/hooks/usePasswordContext";

export const StrengthBarItems = () => {
  const {state} = usePasswordContext()

  switch (state.strength) {
    case "TOO WEAK!":
      return (
        <>
          <StrengthBarItem color={Colors.RED} />
          <StrengthBarItem />
          <StrengthBarItem />
          <StrengthBarItem />
        </>
      )
    case "WEAK":
      return (
        <>
          <StrengthBarItem color={Colors.ORANGE} />
          <StrengthBarItem color={Colors.ORANGE} />
          <StrengthBarItem />
          <StrengthBarItem />
        </>
      )
    case "MEDIUM":
      return (
        <>
          <StrengthBarItem color={Colors.YELLOW} />
          <StrengthBarItem color={Colors.YELLOW} />
          <StrengthBarItem color={Colors.YELLOW} />
          <StrengthBarItem />
        </>
      )
    case "STRONG":
      return (
        <>
          <StrengthBarItem color={Colors.NEONGREEN} />
          <StrengthBarItem color={Colors.NEONGREEN} />
          <StrengthBarItem color={Colors.NEONGREEN} />
          <StrengthBarItem color={Colors.NEONGREEN} />
        </>
      )

  }
}