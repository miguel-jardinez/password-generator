import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
`;

export const PasswordTextStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.dark_grey};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`
export const PasswordInputStyled = styled.input`
  font-size: ${({ theme }) => theme.fonts_size.heading_large};
  font-family: JetBrainsMonoBold;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.almost_white};
  outline: none;
  width: 100%;
  
  &::placeholder {
    opacity: 25%;
    color: ${({ theme }) => theme.colors.almost_white};
  }
`