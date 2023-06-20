import React, { useEffect } from "react";
import client from "../context/client";

interface IEmbedField {
  /**
   * Embed field name
   */
  name: string;
  /**
   * Embed field value
   */
  value: string;
  /**
   * Embed field inline
   */
  inline?: boolean;
}

/**
 * Embed field component
 * @param props Embed field props
 * @param props.name Embed field name
 * @param props.value Embed field value
 * @param props.inline Embed field inline
 */
const EmbedField = (props: IEmbedField): JSX.Element => {
  const { name, value, inline } = props;

  return ( name as unknown as JSX.Element, value as unknown as JSX.Element, inline as unknown as JSX.Element )
};

export default EmbedField;
