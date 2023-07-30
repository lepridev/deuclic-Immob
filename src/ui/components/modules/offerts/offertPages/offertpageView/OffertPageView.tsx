import AgentBox from "@/ui/design-system/offert-ui-design/AgentBox";
import DescriptionBox from "@/ui/design-system/offert-ui-design/DescriptionBox";
import DetailBox from "@/ui/design-system/offert-ui-design/DetailBox";
import GalerieBox from "@/ui/design-system/offert-ui-design/GalerieBox";
import InfrastructureBox from "@/ui/design-system/offert-ui-design/InfrastructureBox";
import TitleBox from "@/ui/design-system/offert-ui-design/TitleBox";
import Image from "next/image";
import React from "react";

type Props = {};

const OffertPageView = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full">
      <div className="h-[20%] flex flex-row w-full overflow-hidden ">
        <Image
          src={"/assets/images/p-1.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
        <Image
          src={"/assets/images/p-3.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />{" "}
        <Image
          src={"/assets/images/p-2.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
      </div>
      <div className="flex flex-row items-start justify-center">
        <div className="w-[50%] ">
          <TitleBox />
          <DetailBox />
          <DescriptionBox />
          <InfrastructureBox />
          <GalerieBox />
        </div>
        <div className="w-[40%] ">
          <AgentBox />
        </div>
      </div>
    </div>
  );
};

export default OffertPageView;
