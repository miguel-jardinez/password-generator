import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.dark_grey};
  background: ${({ theme }) => theme.colors.neon_green};
  border: 0.2rem solid ${({ theme }) => theme.colors.neon_green};
  height: 6.3rem;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    margin-right: ${({ theme }) => theme.spacing.xsmall};
    font-size: ${({ theme }) => theme.fonts_size.body_normal};;
  }

  svg {
    path {
      transition: all 300ms ease-in-out;
      fill: ${({ theme }) => theme.colors.dark_grey};
    }
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.neon_green};
    background: ${({ theme }) => theme.colors.dark_grey};
    
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neon_green};
      }
    }
  }
`;