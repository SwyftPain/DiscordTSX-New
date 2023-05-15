import React, { useEffect } from "react";
import client from "../context/client";
import { ColorResolvable } from "discord.js";

interface IEmbed {
  title: string;
  thumbnail: React.ReactNode;
  color: ColorResolvable
  children: React.ReactNode;
}

const Embed = (props: IEmbed): JSX.Element => {
  const { children, title, thumbnail, color } = props;

  return ( title as unknown as JSX.Element, thumbnail as unknown as JSX.Element, color as unknown as JSX.Element, children as unknown as JSX.Element )
};

export default Embed;
