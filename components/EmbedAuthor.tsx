import React, { useEffect } from "react";
import client from "../context/client";
import { AuthorAvatar } from "../shortcuts";

interface IEmbedAuthor {
  /**
   * Embed author name
   */
  name: string;
  /**
   * Embed author url
   */
  url?: string;
  /**
   * Embed author icon url
   */
  iconURL?: string | typeof AuthorAvatar;
}

/**
 * Embed author component
 * @param props Embed author props
 * @param props.name Embed author name
 * @param props.url Embed author url
 * @param props.iconURL Embed author icon url
 */
const EmbedAuthor = (props: IEmbedAuthor): JSX.Element => {
  const { name, url, iconURL } = props;

  return (
    name as unknown as JSX.Element,
    url as unknown as JSX.Element,
    iconURL as unknown as JSX.Element
  );
};

export default EmbedAuthor;
