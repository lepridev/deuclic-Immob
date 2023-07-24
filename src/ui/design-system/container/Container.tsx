import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("py-10 max-w-5xl mx-auto ", className)}>
      {children}
    </div>
  );
};

export default Container;
