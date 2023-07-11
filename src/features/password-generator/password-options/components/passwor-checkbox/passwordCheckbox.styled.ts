import styled from "styled-components";

export const CheckboxContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large }
`;

export const CheckboxItemContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  font-size: ${({ theme }) => theme.fonts_size.body_normal};
  margin-bottom: ${({ theme }) => theme.spacing.regular };
  
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  height: 2rem;
  width: 2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.almost_white};
  transition: all 150ms ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::before {
    content: url("/images/icon-check.svg");
    font-size: 1.6rem;
    display: none;
  }
  
  &:checked {
    border: 0.2rem solid ${({ theme }) => theme.colors.neon_green};
    background-color: ${({ theme }) => theme.colors.neon_green};
    
    &::before {
      display: block;
    }
  }
`;


export const CheckboxItemLabel = styled.label`
  color: ${({ theme }) => theme.colors.almost_white };
  font-family: JetBrainsMonoBold;
  margin-left: ${({ theme }) => theme.spacing.xlarge };
`