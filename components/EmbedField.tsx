import React, { useEffect } from "react";
import client from "../context/client";

interface IEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

const EmbedField = (props: IEmbedField): JSX.Element => {
  const { name, value, inline } = props;

  return ( name as unknown as JSX.Element, value as unknown as JSX.Element, inline as unknown as JSX.Element )
};

export default EmbedField;
