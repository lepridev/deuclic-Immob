import { Comodite } from "./comodite";
import Image from "next/image";
import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";

interface Props {
  label?: string;
  typeLabel?: string;
  adress?: string;
  rates?: number;
  bed?: number;
  bath?: number;
  area?: number;
  city?: string;
  buttonLabel?: string;
}

const OffertBoxHorizontal = ({
  label,
  typeLabel,
  adress,
  rates,
  bed,
  bath,
  area,
  city,
  buttonLabel,
}: Props) => {
  return (
    <div className=" w-[356px] h-[480px]">
      <div className=" flex flex-row items-start justify-start w-full h-2/5 relative">
        <Image
          src={"/assets/images/maison1.jpg"}
          alt="maison a louer"
          fill
          className="object-cover absolute  rounded-t-md"
        />
      </div>
      <div className="w-full h-3/5 p-4">
        <div className="">
          <div className="flex flex-row items-center justify-between">
            <div className="py-1 px-2 rounded-2xl text-black bg-gray-400">
              <Typograpy variant="caption4" component="span" theme="success">
                A Louer
              </Typograpy>
            </div>
            <div className="">
              <Typograpy
                variant="lead"
                component="h3"
                theme="secondary"
                weight="medium"
              >
                180.000 FCFA / Mois
              </Typograpy>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <Typograpy variant="body-lg">Avenue Rue Marie Guiro</Typograpy>
            <div className="font-bold">Rating</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-3">
            <Comodite label={3} icon={{ icon: FaBed }} />
            <Comodite label={2} icon={{ icon: FaBath }} />
            <Comodite label={100} icon={{ icon: BiArea }} />
          </div>
        </div>

        <div>Ville et button</div>
      </div>
    </div>
  );
};

export default OffertBoxHorizontal;
