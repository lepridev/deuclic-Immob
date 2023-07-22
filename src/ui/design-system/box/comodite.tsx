import React from "react";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";
import { IconType } from "react-icons";

interface Props {
  label?: number;
  icon?: { icon: IconType };
}

export const Comodite = ({ label, icon }: Props) => (
  <div className="flex flex-row items-center justify-start gap-1">
    <Button variant="ico" icon={icon} icoTheme="secondary" />
    <Typograpy variant="caption4">{label}</Typograpy>
  </div>
);

//m²
