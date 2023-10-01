import React, { use } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ImageCard() {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="gap-4 grid grid-cols-12 grid-rows-2 px-8">
        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/sala')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/sala.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2 ">Sala</p>
            </motion.div>
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
     
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/quarto')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/quarto.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Quarto</p>
            </motion.div>
         
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
       
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/dependencia')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/dependencia.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Dependencia</p>
            </motion.div>
         
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
       
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/garagem')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/garagem.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Garagem</p>
            </motion.div>
       
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
         
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/escritorio')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/escritorio.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Escritorio</p>
            </motion.div>
       
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
       
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/cozinha')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/cozinha.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Cozinha</p>
            </motion.div>
         
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
         
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/casaDeBanho')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/casaDeBanho.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Casa de banho</p>
            </motion.div>
          
        </div>

        <div className="col-span-12 sm:col-span-3 h-[300px] relative group">
         
            <motion.div
              initial={{ filter: "blur(5px)" }}
              whileHover={{ filter: "none", scale: 1.05 }}
              className="h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="h-full border-none"
                isPressable
                onPress={() => router.push('/comodos/areaExterna')}
              >
                <Image
                  as={motion.img} // Use Framer Motion's motion.img component
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/areaExterna.png"
                  whileHover={{ scale: 1.1, transition: { duration: 0.8 } }} // Animate scale on hover
                />
              </Card>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none group-hover:opacity-0">
              <p className="text-4xl text-white font-bold p-2">Área externa</p>
            </motion.div>
       
        </div>
      </div>
    </div>
  );
}
