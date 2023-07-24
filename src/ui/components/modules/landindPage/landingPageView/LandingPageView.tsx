import CityOffertList from "@/ui/design-system/box/CityOffertList";
import { Titleline } from "./titleline";
import OffertBoxHorizontal from "@/ui/design-system/box/OffertBoxHorizontal";
import { Button } from "@/ui/design-system/buttons/Button";
import Container from "@/ui/design-system/container/Container";
import { Typograpy } from "@/ui/design-system/typography/Typography";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import WorkingStep from "@/ui/design-system/steps/WorkingStep";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { GiBuyCard } from "react-icons/gi";
import Avatar from "@/ui/design-system/avatar/Avatar";
import AgentBox from "@/ui/design-system/box/AgentBox";
import PriceBox from "@/ui/design-system/box/PriceBox";
import Image from "next/image";
import ArticleBox from "@/ui/design-system/box/ArticleBox";

type Props = {};

const LandingPageView = (props: Props) => {
  const recentOffres = [
    {
      id: 1,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 2,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 3,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 4,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 5,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 6,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
  ];

  const offertByCity = [
    {
      id: 1,
      imgSrc: "/assets/images/cocody.jpg",
      city: "Cocody",
      offertNumber: 10,
    },
    {
      id: 2,
      imgSrc: "/assets/images/yopougon.jpg",
      city: "Yopougon",
      offertNumber: 15,
    },
    {
      id: 3,
      imgSrc: "/assets/images/marcory.jpg",
      city: "Marcory",
      offertNumber: 26,
    },
    {
      id: 4,
      imgSrc: "/assets/images/bingerville.jpg",
      city: "Bingerville",
      offertNumber: 40,
    },

    {
      id: 5,
      imgSrc: "/assets/images/bingerville.jpg",
      city: "Bingerville",
      offertNumber: 40,
    },
  ];

  return (
    <div>
      <Container>
        <div>
          <Titleline
            title="Explorez les offres dans de meilleurs"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 space-y-2">
            {recentOffres.map((recentOffre) => (
              <OffertBoxHorizontal
                key={recentOffre.id}
                imgSrc={recentOffre.imgSrc}
                typeLabel={recentOffre.typeLabel}
                price={recentOffre.price}
                adress={recentOffre.adress}
                rates={recentOffre.rates}
                bed={recentOffre.bed}
                bath={recentOffre.bath}
                area={recentOffre.area}
                city={recentOffre.city}
                buttonLabel={recentOffre.buttonLabel}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button
              variant="secondary"
              size="large"
              icoPosition="right"
              icon={{ icon: MdKeyboardArrowRight }}
            >
              Voir plus doffres...
            </Button>
          </div>
        </div>
      </Container>

      <div className="bg-gray-100">
        <Container>
          <Titleline
            title="Explorez par Commune ou par Ville"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            {offertByCity.map((byCity) => (
              <CityOffertList
                key={byCity.id}
                imgSrc={byCity.imgSrc}
                city={byCity.city}
                offertNumber={byCity.offertNumber}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button
              variant="primary"
              size="large"
              icoPosition="right"
              icon={{ icon: MdKeyboardArrowRight }}
            >
              Voir plus lieux...
            </Button>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <Titleline
            title="Comment ça marche"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row items-center justify-center space-x-4">
            <WorkingStep
              label="Evaluer une proprieté"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
              icon={{ icon: PiNewspaperClippingDuotone }}
              color="#29cf8d"
              borderColor="#29cf8d"
              bgColor="#35d09231"
              className="border-2 border-[#29cf8d] bg-[#29cf8d51]"
            />
            <WorkingStep
              label="Rencontrer l'agent immobilier"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
              icon={{ icon: HiUsers }}
              color="#ff8f00"
              borderColor="#d09535"
              bgColor="#d0953531"
              className="border-2 border-[#ff8f00] bg-[#ff910048]"
            />
            <WorkingStep
              label="Finaliser et recuperer les clées"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available."
              icon={{ icon: GiBuyCard }}
              color="#1d96ff"
              borderColor="#d09535"
              bgColor="#d0953531"
              className="border-2 border-[#1d96ff] bg-[#1d96ff4f]"
            />
          </div>
        </Container>
      </div>

      <div className="bg-red-50">
        <Container>
          <Titleline
            title="Les Meilleurs Agents"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row items-center justify-center gap-4">
            <AgentBox
              name="Howel Constant"
              description="Un agent immobilier tres courtoir, il donne plusieur option afin de simplifer les choses"
            />
            <AgentBox
              name="Armand Lepri"
              description="Agent correct qui a des offres ciblées"
            />
            <AgentBox
              name="Mme Yapo epse Howel"
              description="Dormez tranquilement elle s'en charge et vous trouve de belles propositions"
            />
          </div>
        </Container>
      </div>

      <div className="bg-gray-100">
        <Container>
          <Titleline
            title="Decouvrez nos Abonnements"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row items-center justify-center gap-4">
            <PriceBox />
            <PriceBox price={5000} />
            <PriceBox price={10000} />
          </div>
        </Container>
      </div>

      <div className="w-[100%] h-[350px] relative">
        <Image
          src={"/assets/images/banner.jpg"}
          alt="pub sur deuclic immo"
          fill
          className="object-cover absolute"
        />
      </div>

      <div>
        <Container>
          <Titleline
            title="Nouveautés su Deuclic Immobilier"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
          />
          <div className="flex flex-row items-center justify-center gap-3">
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LandingPageView;
