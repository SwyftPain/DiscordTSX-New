import React, { useEffect } from "react";
import client from "../context/client";
import { AuthorAvatar } from "../shortcuts";

interface IEmbedFooter {
  /**
   * Embed footer text
   */
  text: string;
  /**
   * Embed footer icon url
   */
  iconURL?: string | typeof AuthorAvatar;
}

/**
 * Embed footer component
 * @param props Embed footer props
 * @param props.name Embed footer name
 * @param props.iconURL Embed footer icon url
 */
const EmbedFooter = (props: IEmbedFooter): JSX.Element => {
  const { text, iconURL } = props;

  return text as unknown as JSX.Element, iconURL as unknown as JSX.Element;
};

export default EmbedFooter;
