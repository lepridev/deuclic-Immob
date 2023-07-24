import React from "react";
import { Typograpy } from "@/ui/design-system/typography/Typography";

interface Props {
  title: string;
  description: string;
}

export const Titleline = ({ title, description }: Props) => (
  <div className="w-full flex flex-col items-center my-10">
    <Typograpy variant="h1" weight="semibold">
      {title}
    </Typograpy>
    <Typograpy>{description}</Typograpy>
  </div>
);
