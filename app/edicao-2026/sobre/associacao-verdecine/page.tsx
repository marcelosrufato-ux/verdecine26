"use client";
import "../../globalv2.css";
import "../../globalv3.css";
import Footer25 from "../../components/Footer26";
import { Stack, Title, Container, Text, Image, Center } from "@mantine/core";
import { HeaderSimple } from "../../components/Menu/Menu";
export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc25-green py-5">
        <Container size="xl">
          <h2 className="text-white">Associação VERdeCINE</h2>
        </Container>
      </div>

      <Container size="lg" className="py-16">
        <Text>
          <span className="font-bold">A ASSOCIAÇÃO VERdeCINE</span> é uma
          organização da sociedade civil, sem fins lucrativos. Tem por objetivo
          criar, desenvolver, executar, promover, colaborar e estimular a
          produção e disseminação de filmes e outros produtos culturais e
          educacionais,relacionados aos temas sociais e ambientais.
        </Text>
      </Container>

      <section className=" py-16" id="curadoria">
        <Container size="lg">
          <Center className="py-10">
            <h2 className="">Quem faz a associação</h2>
          </Center>
          <div className="grid sm:grid-cols-4 mb-8">
            <div className="flex justify-center">
              <Image
                className="object-contain"
                src="/cristiane-pederiva.png"
                width="284"
                height="284"
                alt="Cris Pederiva"
              />
            </div>
            <div className="col-span-3 sm:p-8 flex flex-col justify-center">
              <h2 className="leading-tight ">Cristiane Pederiva </h2>
              <span className="block mb-5">
                <span className="text-2xl opacity-75">Presidente</span>
              </span>

              <p>
                Roteirista audiovisual graduada pela EICTV (Escola Internacional
                de Cinema e TV de San Antonio de Los Baños, em Cuba). Na TV,
                trabalhou como roteirista da série “Cocoricó” na TV Cultura.
              </p>
              <p>
                Documentarista de diversos filmes e curadora de mostras de
                filmes no Brasil e em Londres, ministrou e coordenou oficinas de
                audiovisual para crianças, adolescentes e adultos em diversas
                ONGs, Associações e Escolas.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-4   ">
            <div className="col-span-3 order-2 sm:order-1 sm:p-8 flex flex-col justify-center">
              <h2 className="leading-tight">Pedro Michelli </h2>
              <span className="block mb-5">
                <span className="text-2xl opacity-75">Vice Presidente</span>
              </span>
              <p>
                Roteirista e editor com experiência internacional em Londres,
                Roma, São Paulo e Caracas. Trabalhou na HBO/Cinemax Brasil, MTV
                Brasil, Vice News UK, Aljazeera English UK, Fundación Cinemateca
                Nacional CCS, entre outros.
              </p>
              <p>
                Graduado em Direção na Escola Internacional de Cine e TV, EICTV,
                Cuba e em Comunicação Social na UCV, Caracas, é co- diretor do
                Circular Festival de cinema infanto-juvenil brasileiro em
                Londres.
              </p>
            </div>
            <div className="flex justify-center sm:order-2">
              <Image
                className="object-contain"
                src="/pedro-michelli.png"
                width="284"
                height="284"
                alt="Cris Pederiva"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-4 mb-8">
            <div className="flex justify-center">
              <Image
                className="object-contain"
                src="/Marina Luz.jpeg"
                width="284"
                height="284"
                alt="Cris Pederiva"
                style={{
                  aspectRatio: "1/1",
                  objectPosition: "top",
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
                }}
              />
            </div>
            <div className="col-span-3 sm:p-8 flex flex-col justify-center">
              <h2 className="leading-tight">Marina Luz</h2>
              <span className="block mb-5">
                <span className="text-2xl opacity-75">Tesoureira</span>
              </span>
              <p>
                Administradora Pública graduada pela UFLA, atua em conselhos
                municipais de cultura em Lavras e como Agente Territorial de
                Cultura no Programa Nacional dos Comitês de Cultura. Tem
                experiência em Administração Pública e gestão de organizações do
                terceiro setor.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-4   ">
            <div className="col-span-3 order-2 sm:order-1 sm:p-8 flex flex-col justify-center">
              <h2 className="leading-tight">Juliana Regina C. Cabral</h2>
              <span className="block mb-5">
                <span className="text-2xl opacity-75">Secretária</span>
              </span>
              <p>
                Gestora Ambiental com mais de 10 anos de experiência na área
                ambiental, com forte atuação em sustentabilidade, educação
                ambiental e gestão socioambiental participativa.
              </p>
            </div>
            <div className="flex justify-center sm:order-2">
              <Image
                className="object-contain"
                src="/FOTO Juliana.jpeg"
                width="284"
                height="284"
                alt="Cris Pederiva"
                style={{
                  aspectRatio: "1/1",
                  objectPosition: "top",
                  clipPath:
                    "polygon(0 0, 70% 0%, 100% 0, 100% 70%, 70% 100%, 0 100%, 0% 70%, 0% 30%)",
                }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-4 mb-8">
            <div className="flex justify-center">
              <Image
                className="object-contain"
                src="/FOTO Mara Guarieiro Ramos.jpg"
                width="284"
                height="284"
                alt="Mara Guarieiro"
                style={{
                  aspectRatio: "1/1",
                  objectPosition: "top",
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
                }}
              />
            </div>
            <div className="col-span-3 sm:p-8 flex flex-col justify-center">
              <h2 className="leading-tight">Mara Guarieiro Ramos</h2>
              <span className="block mb-5">
                <span className="text-2xl opacity-75">Conselho Fiscal</span>
              </span>
              <p>
                Contadora e sócia proprietária da Conceito Grupo Contábil,
                escritório de contabilidade com ampla atuação nos setores
                empresarial e do terceiro setor em Lavras. Sua experiência
                profissional inclui o cargo de analista de políticas públicas na
                prefeitura de Belo Horizonte, após sua formação inicial em
                Serviço Social. Atualmente, cursa Direito na Unilavras
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer25 />
    </>
  );
}
