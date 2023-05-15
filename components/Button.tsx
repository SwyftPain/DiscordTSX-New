import React, { useEffect } from "react";
import client from "../context/client";
import { ButtonStyle } from "discord.js";

interface IButton {
  customId: string;
  label: string;
  style: keyof typeof ButtonStyle
  children: React.ReactNode
}

const Button = (props: IButton): JSX.Element => {
  const { customId, label, style, children } = props;

  return ( customId as unknown as JSX.Element, label as unknown as JSX.Element, style as unknown as JSX.Element, children as unknown as JSX.Element )
};

export default Button;
