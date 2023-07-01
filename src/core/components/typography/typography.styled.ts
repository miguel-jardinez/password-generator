import styled from "styled-components";
import {Colors} from "@password/core/theme/types/colors";

interface TypographyProps {
  uppercase: boolean,
  color: Colors
}

export const Heading = styled.h1<TypographyProps>`
  font-weight: bold;
  font-size: 2.4rem;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial' };
  color: ${({ color }) => color };
  
  @media only screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export const HeadingL = styled.p<TypographyProps>`
  font-size: 3.2rem;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial' };
  color: ${({ color }) => color };


  @media only screen and (max-width: 450px) {
    font-size: 2.4rem;
  }
`;

export const Body = styled.p<TypographyProps>`
  font-size: 1.8rem;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial' };
  color: ${({ color }) => color };

  @media only screen and (max-width: 450px) {
    font-size: 1.6rem;
  }
`;