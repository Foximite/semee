import {Image} from "@nextui-org/react";
import Container from "./container";
import heroImg from "@/public/EDM_Background2.jpg";
import { motion } from "framer-motion"
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Seja bem-vindo ao SEMEE
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              SEMEE - Sistema De Estimativa e Monitoria de Energia Electrica é
              uma plataforma que visa monitorar e dar uma estimativa do consumo
              de energia elétrica de uma residência.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/dashboard"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-500 rounded-md "
              >
                Começar
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
        <motion.div
        whileHover={{ scale: 1.1 }} // Define the zoom-in animation on hover
        transition={{ duration: 0.3 }} // Define the animation duration
      >
            <Image
              radius="md"
              width="466"
              height="467"
              src="/EDM_Background2.jpg"
              className={"object-cover"}
            />
         </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
