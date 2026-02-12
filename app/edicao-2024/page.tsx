"use client";
import "../edicao-2025/globals.css";
import Image from "next/image";
import { Footer, Header, Tab } from "../edicao-2025/components";
import { Modal } from "@mantine/core";
//import { MantineProvider } from '@mantine/core';

// const ReactPlayer = dynamic(() => import("react-player"), {
//   ssr: false,
// });

import { useDisclosure } from "@mantine/hooks";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header />
      <Modal
        size={"xl"}
        closeButtonProps={{ size: "xl" }}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        className="h-fit w-fit z-50"
        opened={opened}
        onClose={close}
      >
        <video controls autoPlay className="" src="/vinheta.mp4"></video>
      </Modal>
      <main className="">
        <section className="relative h-screen  min-h-[1000px] sm:min-h-fit">
          <div className="absolute flex sm:px-16 px-8 py-8  sm:items-center z-0 bottom-0 w-[100%] h-[80%] sm:w-[1020px] sm:h-[600px] bg-vc-green clip-t-r ">
            <div className="text-[#FCEDCE]">
              <h6 className="text-[#BD6C25]">SOBRE O FESTIVAL</h6>
              <h1 className="mb-4">VERdeCINE</h1>
              <p>
                O VERdeCINE - Festival Socioambiental de Filmes acontece na
                semana do meio ambiente,{" "}
                <span className="underline">
                  nos dias 06, 07, 08 e 09 de junho na cidade de Lavras em Minas
                  Gerais das 16h até as 22h na praça central Dr. Augusto Silva.
                </span>
              </p>
              <p>
                Nestes quatro dias de evento, vamos sentar juntos ao ar livre,
                emoldurados pelas arvores que resistem na nossa cidade e
                celebrar o cinema como agente transformador da realidade.
              </p>
              <p>
                Serão exibidos 18 filmes selecionados vindos de todas as partes
                do Brasil e 05 filmes convidados indicados pelos três festivais
                parceiros do VERdeCINE.
              </p>
              <p>
                Nos intervalos dos filmes vamos ter apresentações artísticas
                locais, pré-lançamento de livro com a presença do autor e aula
                show de gastronomia. E ainda feira de produtos sustentáveis para
                inspirar transformações.
              </p>
              <p>
                Nossa proposta é ser um fórum que utiliza o audiovisual como
                ferramenta para estimular diálogos sobre temas ligados ao ser
                humano na sua interação com o planeta.
              </p>
              <p>
                O VERdeCINE desenvolve ao longo do ano uma programação com ações
                abertas a toda comunidade Lavrense e do entorno e convida
                pessoas conhecedoras dos temas tratados nos filmes a somar
                reflexões e saberes.
              </p>
              <br />
            </div>
          </div>

          <Image
            width={500}
            height={500}
            className="absolute top-[100px] left-0 w-20 sm:w-auto pointer-events-none select-none"
            src="/leaf-1.png"
            alt=""
          />
          <Image
            width={500}
            height={500}
            className="hidden sm:block absolute bottom-0 left-20 w-20 sm:w-auto pointer-events-none select-none"
            src="/leaf-2.png"
            alt=""
          />
          <Image
            width={500}
            height={500}
            className="absolute top-14 right-0 w-20 sm:w-auto pointer-events-none select-none"
            src="/leaf-3.png"
            alt=""
          />
          <Image
            width={500}
            height={500}
            className="hidden sm:block absolute bottom-0 right-[35%] w-20 sm:w-auto pointer-events-none select-none"
            src="/leaf-4.png"
            alt=""
          />

          {/* <Image
            width={500}
            height={500}
            className="absolute bottom-0 right-0 w-60 sm:w-auto pointer-events-none select-none"
            src="/hero-01.png"
            alt=""
          /> */}
          <Image
            width={100}
            height={100}
            className="absolute top-[18%] sm:top-[25%] left-[65%] sm:left-[42%]  sm:w-auto pointer-events-none select-none"
            src="/bee.png"
            alt="Abelha"
          />
        </section>

        <div
          onClick={open}
          className="relative sm:absolute sm:bottom-[100px] sm:right-[170px] rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="w-full h-full bg-[#00000029] absolute top-0 left-0 cursor-pointer">
            <Image
              src={"/icons8-play.gif"}
              width={60}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invert mix-blend-screen"
              height={60}
              alt="Cartaz VerdeCine"
            />
          </div>
          <Image
            src={"/cartaz-com-logo.png"}
            width={400}
            height={400}
            alt="Cartaz VerdeCine"
          />

          {/* <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            light={<img className="w-full h-full object-cover" src="./hqdefault.jpg" alt="Thumbnail" />}
            url="/vinheta.mp4"
          /> */}
        </div>
        <section
          id="inscricoes"
          className="relative min-h-screen bg-vc-purple overflow-hidden "
        >
          <h1 className="text-vc-light mb-8 text-center my-20">Programação</h1>
          <Tab />
        </section>

        <Footer />
      </main>
    </>
  );
}
