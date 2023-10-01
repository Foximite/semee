"use client";
import React, { useState } from "react";
import { title } from "@/components/primitives";
import { Button, Card, Image, Link } from "@nextui-org/react";
import ImageMapper, { CustomArea } from "react-img-mapper";
import TableComodos from "@/components/table/tableComodos";
import ModalComodos from "@/components/modal/modalComodos";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import {salaData, quartoData, dependenciaData, garagemData, escritorioData, cozinhaData, casaDeBanhoData, areaExternaData} from "./mapData";

export default function Page({ params }: { params: { comodo: string } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickedAppliance, setClickedAppliance] = useState<string>("");
  const router = useRouter();

  const compartmentImages = {
    sala: "/sala.png",
    quarto: "/quarto.png",
    dependencia: "/dependencia.png",
    areaExterna: "/areaExterna.png",
    cozinha: "/cozinha.png",
    casaDeBanho: "/casaDeBanho.png",
    garagem: "/garagem.png",
    escritorio: "/escritorio.png",
  };

  const compartmentImageMaps  = {
    sala: salaData,
    quarto: quartoData,
    dependencia: dependenciaData,
    areaExterna: areaExternaData,
    cozinha: cozinhaData,
    casaDeBanho: casaDeBanhoData,
    garagem: garagemData,
    escritorio: escritorioData,
  };

  const compartment = params.comodo;
  const imageSrc =
    compartmentImages[compartment as keyof typeof compartmentImages];

  const imageMapData = compartmentImageMaps[compartment as keyof typeof compartmentImageMaps];

  const handleClick = (area: CustomArea) => {
    const clickedArea = area.id;

    if (clickedArea) {
      setModalIsOpen(true);
      setClickedAppliance(clickedArea);
    }
  };

  return (
    <section>
      <div className="text-center mb-4">
        <h1 className={title({ color: "yellow" })}>
          {params.comodo
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </h1>
      </div>
      <div className="flex gap-8 mb-2">
        <Button
          color="warning"
          variant="bordered"
          size="lg"
          startContent={<BsArrowReturnLeft />}
          onPress={() => {
            router.push("/estimador");
          }}
        >
          Voltar
        </Button>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="max-w-[90rem] w-full">
          <Card radius="lg" className="max-w-[90rem] w-full">
            <ImageMapper
              src={imageSrc}
              map={imageMapData}
              width={1300}
              onClick={handleClick}
            />
          </Card>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <TableComodos compartment={compartment} />
      </div>
      <ModalComodos
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        clickedAppliance={clickedAppliance}
        compartment={compartment}
      />
    </section>
  );
}
