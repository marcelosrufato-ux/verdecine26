"use client";
import { Center, Container } from "@mantine/core";
import {Footer} from "../../edicao-2025/components/Footer25";
import {Header} from "../../edicao-2025/components/Header";
import Image from "next/image";

const QuemSomos = () => {
  return (
    <>
      <Header className="border border-[#0000002b]" title="Quem Somos" />
      <section className="bg-vc-green py-16" id="curadoria">
        {/* <Center className="py-16">
          <h2 className="text-center">
            Coordenação Geral
            <br /> e Curadoria
          </h2>
        </Center> */}
        <Container size="lg">
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
              <h2>Cristiane Pederiva </h2>
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
              <h2>Pedro Michelli </h2>
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
        </Container>
      </section>

      <section className="bg-vc-purple py-16" id="curadoria">
        <Container>
          <div className="py-16 ">
            <h2 className="text-vc-light">Ficha Técnica -VERdeCINE 2024</h2>
          </div>
          <ul>
            <li className="text-vc-light">
              <small className="opacity-70">Coordenação Geral e Curadoria:</small> Cristiane Pederiva e
              Pedro Michelli
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Produção Executiva e produção geral:</small> Duna Dias
            </li>

            <li className="text-vc-light">
              <small className="opacity-70">Assistentes de Produção:</small> Leonardo Augusto, Maria
              Clara Oliveira e Renatta Rabello
            </li>
            <li className="text-vc-light">
              <small className="opacity-70"> Monitores: </small>Lutrícia Monti, Mariana da Cruz Pinto,
              Marcela Miranda, Mirella Rosa Silveira, Nayane Kethelyn de
              Oliveira Mateus
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Mídias Sociais:</small> Rizoma Comunicação e Arte
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Design Gráfico:</small> Yasmine Evaristo
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Vinheta:</small> Pedro Michelli
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Coordenação de Acessibilidade:</small> Vias acessíveis
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Tradução em Libras:</small> Rodrigo Marques Marinho.
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Assessoria de Imprensa:</small> Luz Comunicação
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Site:</small> Lucas Coutinho
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Gestão de Resíduos:</small> Evaldo Garcia / E-Sustentável{" "}
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Contabilidade:</small> Mara Guarieiro Ramos / Conceito
              Grupo Contábil{" "}
            </li>
            <li className="text-vc-light">
              <small className="opacity-70">Assessoria Jurídica:</small> Candy Pagnozzi
            </li>
          </ul>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default QuemSomos;
