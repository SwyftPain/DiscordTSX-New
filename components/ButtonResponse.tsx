import React, { useEffect } from "react";
import client from "../context/client";
import { ButtonStyle } from "discord.js";

interface IButtonResponse {
  children: React.ReactNode;
}

/**
 * Button response component
 * @param props Takes a string child as a response to the button
 */
const ButtonResponse = (props: IButtonResponse): JSX.Element => {
  const { children } = props;

  return children as unknown as JSX.Element;
};

export default ButtonResponse;
