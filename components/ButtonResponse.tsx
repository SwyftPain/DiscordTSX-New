import React, { useEffect } from "react";
import client from "../context/client";
import { ButtonStyle } from "discord.js";

interface IButtonResponse {
  children: React.ReactNode
}

const ButtonResponse = (props: IButtonResponse): JSX.Element => {
  const { children } = props;

  return ( children as unknown as JSX.Element )
};

export default ButtonResponse;
