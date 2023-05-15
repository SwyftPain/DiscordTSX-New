import React from "react";

interface IText {
  children: React.ReactNode;
}

const Text = (props: IText): JSX.Element => {
  const { children } = props;

  return (children as unknown as JSX.Element);
};

export default Text;
