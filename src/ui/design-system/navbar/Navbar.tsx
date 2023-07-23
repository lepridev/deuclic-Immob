import Image from "next/image";
import React from "react";
import { Button } from "../buttons/Button";
import { Typograpy } from "../typography/Typography";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 bg-white border-b border-gray-300 shadow-md">
      <div>
        <Image
          src={"/assets/images/logo_deuclic.png"}
          alt="logo deuclic"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Typograpy
          variant="body-base"
          weight="bold"
          theme="primary"
          className=""
        >
          A louer
        </Typograpy>
        <Typograpy
          variant="body-base"
          weight="bold"
          theme="primary"
          className=""
        >
          A Vendre
        </Typograpy>
        <Typograpy
          variant="body-base"
          weight="bold"
          theme="primary"
          className=""
        >
          Résidence Meublé
        </Typograpy>
      </div>
      <div className="flex flex-row gap-2">
        <Button>Connexion</Button>
        <Button variant="secondary">Inscription</Button>
      </div>
    </div>
  );
};

export default Navbar;
