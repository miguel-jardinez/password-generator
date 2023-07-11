import {
  SliderContainer,
  SliderLengthStyled,
  SliderRange,
  SliderTextContainer,
  SliderRangeBackground
} from "@password/features/password-generator/password-options/components/slider-lenght/sliderLenght.styled";
import {useEffect, useState} from "react";
import {Typography} from "@password/core/components/typography/Typography";
import {Colors} from "@password/core/theme/types/colors";
import {usePasswordContext} from "@password/features/password-generator/hooks/usePasswordContext";
import {
  SLIDER_CHANGE
} from "@password/features/password-generator/password-context/reducer/PasswordTypes";

export const SliderLength = () => {
  const { state, dispatch } = usePasswordContext()
  const [width, setWidth] = useState('0%');

  const getWidth = () => {
    const currentWidth = (state.sliderLength / 20) * 100
    setWidth(`${currentWidth-5}%`)
  }

  const onChangeValue = (value: string) => {
    const length = Number(value)
    dispatch({ type: SLIDER_CHANGE, payload: { sliderLength: length }  })
  }

  useEffect(() => {
    getWidth()
  }, [state.sliderLength]);

  return (
    <>
      <SliderTextContainer>
        <Typography variant={'body'} color={Colors.ALMOSTWHITE}>Character Length</Typography>
        <Typography variant={'headingL'} color={Colors.NEONGREEN}>{ state.sliderLength }</Typography>
      </SliderTextContainer>
      <SliderContainer>
        <SliderRangeBackground />
        <SliderRange width={width} />
        <SliderLengthStyled
          onChange={(e) => onChangeValue(e.target.value)}
          min={1}
          max={20}
          value={state.sliderLength}
          type={"range"}
        />
      </SliderContainer>
    </>
  )
}