import React from "react";
import {Body, Heading, HeadingL} from "@password/core/components/typography/typography.styled";
import { Colors } from "@password/core/theme/types/colors";

type variant = 'heading' | 'headingL' | 'body'

interface TypographyProps {
  variant: variant,
  children: React.ReactNode
  uppercase?: boolean;
  color: Colors
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  uppercase = false ,
  color
}) => {

  switch (variant) {
    case "headingL":
      return <HeadingL uppercase={uppercase} color={color}>{ children }</HeadingL>

    case "heading":
      return <Heading uppercase={uppercase} color={color}>{ children }</Heading>

    case "body":
      return <Body uppercase={uppercase} color={color}> { children } </Body>

    default:
      return <Body uppercase={uppercase} color={color}> { children } </Body>
  }
}