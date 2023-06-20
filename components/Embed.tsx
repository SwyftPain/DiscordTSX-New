import React, { useEffect } from "react";
import client from "../context/client";
import { ColorResolvable } from "discord.js";
import { AuthorAvatar } from "../shortcuts";

interface IEmbed {
  /**
   * Embed title
   */
  title: string;
  /**
   * Embed thumbnail
   */
  thumbnail: string | typeof AuthorAvatar;
  /**
   * Embed color
   */
  color: ColorResolvable;
  /**
   * Embed image
   */
  image?: string | typeof AuthorAvatar;
  /**
   * Embed url
   */
  url?: string;
  /**
   * Embed timestamp
   */
  timestamp?: number | Date | null;
  children: React.ReactNode;
}

/**
 * Embed component
 * @param props Embed props
 * @param props.title Embed title
 * @param props.thumbnail Embed thumbnail
 * @param props.color Embed color
 * @param props.image Embed image
 * @param props.url Embed url
 * @param props.timestamp Embed timestamp
 */
const Embed = (props: IEmbed): JSX.Element => {
  const {
    children,
    title,
    thumbnail,
    color,
    image,
    url,
    timestamp = null,
  } = props;

  return (
    title as unknown as JSX.Element,
    thumbnail as unknown as JSX.Element,
    color as unknown as JSX.Element,
    children as unknown as JSX.Element,
    image as unknown as JSX.Element,
    url as unknown as JSX.Element,
    timestamp as unknown as JSX.Element
  );
};

export default Embed;
