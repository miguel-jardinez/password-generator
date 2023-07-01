import styled from "styled-components";
import {Colors} from "@password/core/theme/types/colors";

interface StrengthBarItemProps {
  color?: Colors
}

export const StrengthBarContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StrengthBarContainer = styled.div`
  height: 7.2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3.2rem;
  margin: ${({ theme }) => theme.spacing.regular} 0;

  @media only screen and (max-width: 390px) {
    padding: 1.6rem;
  }
`;

export const StrengthBar = styled.div`
  display: flex;
  margin-left: 0.8rem;

`;

export const StrengthBarItem = styled.div<StrengthBarItemProps>`
  width: 1rem;
  height: 2.8rem;
  margin-right: 0.8rem;
  background-color: ${(props) => props.color ?? Colors.DARKGREY};
  border: 0.2rem solid ${(props) => props.color ?? Colors.ALMOSTWHITE};
`;