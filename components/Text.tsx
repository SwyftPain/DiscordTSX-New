import React from "react";

interface IText {
  children: React.ReactNode;
}

/**
 * Text component (Use within a command to respond with just a basic text)
 */
const Text = (props: IText): JSX.Element => {
  const { children } = props;

  return children as unknown as JSX.Element;
};

export default Text;
