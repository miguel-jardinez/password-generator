import React from "react";
import {Body, Heading, HeadingL} from "@password/core/components/typography/typography.styled";
import { Colors } from "@password/core/theme/types/colors";

type variant = 'heading' | 'headingL' | 'body'

interface TypographyProps {
  variant: variant,
  children: React.ReactNode
  color: Colors
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  color
}) => {

  switch (variant) {
    case "headingL":
      return <HeadingL color={color}>{ children }</HeadingL>

    case "heading":
      return <Heading color={color}>{ children }</Heading>

    case "body":
      return <Body color={color}> { children } </Body>

    default:
      return <Body color={color}> { children } </Body>
  }
}