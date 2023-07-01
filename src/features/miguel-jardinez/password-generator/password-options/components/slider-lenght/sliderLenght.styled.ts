import styled from "styled-components";

interface SliderRange {
  width: string;
}

export const SliderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
`;

export const SliderRange = styled.span<SliderRange>`
  position: absolute;
  width: ${({ width }) => width};
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.neon_green};
  top: calc(0.8rem - 0.7rem);
`;

export const SliderRangeBackground = styled.span`
  position: absolute;
  width: 100%;
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.dark};
  top: calc(0.8rem - 0.7rem);
`;



export const SliderLengthStyled = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  background: transparent;
  height: 0.8rem;
  position: relative;
  z-index: 3;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    appearance: none;
    cursor: pointer;
    border-radius: 50%;
    transition: all 100ms ease-in-out;
    background-color: ${({ theme }) => theme.colors.almost_white};
    border: 0.1rem solid ${({ theme }) => theme.colors.almost_white};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
      border: 0.1rem solid ${({ theme }) => theme.colors.neon_green};
    }
  }
`;