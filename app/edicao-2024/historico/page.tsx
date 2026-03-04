"use client";
import { Center, Grid, GridCol } from "@mantine/core";
import Footer25 from "../../edicao-2025/components/Footer25";
import {Header} from "../../edicao-2025/components/Header";

import {Gallery} from "../../edicao-2025/components";
import Image from "next/image";

const Historico = () => {
  return (
    <>
      <Header className="border border-[#0000002b]" title="Histórico" />

      <section className="bg-vc-orange py-20 relative" id="historico">
        {/* <Image
          src="/camera.png"
          width={400}
          height={400}
          className="absolute right-0 -top-28 sm:-top-80 w-56 sm:w-auto pointer-events-none select-none "
          alt=""
        />
        <Image
          src="/film-reel.png"
          width={380}
          height={380}
          className="absolute left-10 -top-[2%] sm:-top-8 w-72 sm:w-auto pointer-events-none select-none"
          alt=""
        /> */}

        <Grid gutter={{ base: 55 }} align="center" className="mx-8 sm:mx-16">
          <GridCol span={{ base: 12, sm: 6 }}>
            <p>
              Desde o seu surgimento, em 2022, o VERdeCINE - Festival
              Socioambiental de filmes vem construindo parcerias sólidas e
              desenvolvendo ações pela cidade de Lavras/MG.
            </p>
            <p>
              Com exibições de filmes seguido de debates o VERdeCINE difundiu
              conhecimentos e dialogou com escolas, projetos sociais e
              comunidades locais além de colaborar com o movimento Amazônia de
              pé em suas ações.{" "}
            </p>
            <p>
              Este ano em junho, na semana do meio ambiente será a primeira
              edição do VERdeCINE como um festival socioambiental de filmes.
            </p>
            <p>Venha fazer parte desta história!</p>
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Gallery />
          </GridCol>
        </Grid>
      </section>
      <Footer />
    </>
  );
};

export default Historico;
