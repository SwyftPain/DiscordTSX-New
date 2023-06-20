import React, { useEffect } from "react";
import client from "../context/client";
import { ButtonStyle } from "discord.js";

interface IButton {
  /**
   * Unique button id
   */
  customId: string;
  /**
   * Button label
   */
  label: string;
  /**
   * Button style
   */
  style: keyof typeof ButtonStyle;
  children: React.ReactNode;
}

/**
 * Button component
 * @param props Button props
 * @param props.customId Unique button id
 * @param props.label Button label
 * @param props.style Button style
 */
const Button = (props: IButton): JSX.Element => {
  const { customId, label, style, children } = props;

  return (
    customId as unknown as JSX.Element,
    label as unknown as JSX.Element,
    style as unknown as JSX.Element,
    children as unknown as JSX.Element
  );
};

export default Button;
