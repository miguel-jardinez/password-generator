import styled from "styled-components";

export const CopyStyled = styled.svg`
  cursor: pointer;
  margin-left: 2rem;
  
  path {
    transition: all 150ms ease-in-out;
  }
  
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.almost_white };
    }
    
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;