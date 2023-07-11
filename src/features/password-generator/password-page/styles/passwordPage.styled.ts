import styled from "styled-components";

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PasswordPageContainer = styled.div`
  width: 54rem;
  
  @media only screen and (max-width: 530px) {
    padding: 1.6rem;
  }
`;

export const OptionContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.dark_grey};
`;