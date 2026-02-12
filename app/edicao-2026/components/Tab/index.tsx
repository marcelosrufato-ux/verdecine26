import { Tabs, Container, Tooltip } from "@mantine/core";
import { IconBadgeCc, IconMapPin2 } from "@tabler/icons-react";
import Image from "next/image";
import "./Tab.module.css";
import Link from "next/link";

export const Tab = () => {
  return (
    <Container className="py-10">
      <Tabs defaultValue="dia01">
        <Tabs.List grow>
          <Tabs.Tab value="dia01">
            <h6 className="text-vc-light text-[.9em] sm:text-[1.4em]">
              6 de Junho <br />
              <small className="opacity-80">(Quinta-feira)</small>
            </h6>
          </Tabs.Tab>
          <Tabs.Tab value="dia02">
            <h6 className="text-vc-light text-[.9em] sm:text-[1.4em]">
              7 de Junho <br />
              <small className="opacity-80">(Sexta-feira)</small>
            </h6>
          </Tabs.Tab>
          <Tabs.Tab value="dia03">
            <h6 className="text-vc-light text-[.9em] sm:text-[1.4em]">
              8 de Junho <br />
              <small className="opacity-80">(Sábado)</small>
            </h6>
          </Tabs.Tab>
          <Tabs.Tab value="dia04">
            <h6 className="text-vc-light text-[.9em] sm:text-[1.4em]">
              9 de Junho <br />
              <small className="opacity-80">(Domingo)</small>
            </h6>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="dia01">
          <div className="py-5">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Pra%C3%A7a+Dr.+Augusto+Silva,+Lavras+-+MG,+37200-000/data=!4m2!3m1!1s0x9ffd87f91f5715:0xb2a821d86d6f195?sa=X&ved=1t:242&ictx=111"
              rel="noopener noreferrer"
            >
              <p className="text-2xl mb-8 underline">
                <IconMapPin2 className="inline mr-2 opacity-75" />
                Local: Praça Dr. Augusto Silva
              </p>
            </a>
            <ul>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:00 - Abertura do Festival
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:20 - Exibições de filmes seguido de bate papo
                <small className="block opacity-75">
                  DOIS RIACHÖES – CACAU E LIBERDADE / 11 minutos / BA{" "}
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                17:15 - Exibições de filmes seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-8">
                    DENTE / 20 minutos / PE{" "}
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                18:20 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-9">
                    GRÃO / 15 minutos / MT{" "}
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                18:50 - Exibições de filmes seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-15">
                    TERRA QUE ALIMENTA / 15 minutos / SP
                  </Link>
                  <br />
                  <Link className="underline" href="/filmes#filme-16">
                    MESTRES DE SABERES DA TERRA / 18 minutos / MG
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light my-2 py-1">
                21:20 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-4">
                    CABEÇA DE FOGO / 10 minutos / GO{" "}
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
            </ul>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="dia02">
          <div className="py-5">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Pra%C3%A7a+Dr.+Augusto+Silva,+Lavras+-+MG,+37200-000/data=!4m2!3m1!1s0x9ffd87f91f5715:0xb2a821d86d6f195?sa=X&ved=1t:242&ictx=111"
              rel="noopener noreferrer"
            >
              <p className="text-2xl mb-8 underline">
                <IconMapPin2 className="inline mr-2 opacity-75" />
                Local: Praça Dr. Augusto Silva
              </p>
            </a>
            <ul>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:10 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-10">
                    O ECO EM MIM / 72 minutos / SP{" "}
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                17:50 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-1">
                    A CHUVA DO CAJU / 20 minutos / GO{" "}
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                18:20 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-7">
                    CORDÃO VERDE / 30 minutos/ RS
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                19:10 - Exibições de filmes seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-14">
                    SEU ADAUTO / 12 minutos / PE
                  </Link>
                </small>
              </li>

              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                19:50 - Exibições de filmes seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-13">
                    PENSAO ALIMENTICIA / 16 minutos / GO <br />
                  </Link>
                  <Link className="underline" href="/filmes#filme-19">
                    MARÉ BRABA / 7 minutos / BA{" "}
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light my-2 py-1">
                20:50 - Show
                <small className="block opacity-75">
                  
                  O Luzeiro - Forró Pé de Serra
                </small>
              </li>
            </ul>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="dia03">
          <div className="py-5">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Pra%C3%A7a+Dr.+Augusto+Silva,+Lavras+-+MG,+37200-000/data=!4m2!3m1!1s0x9ffd87f91f5715:0xb2a821d86d6f195?sa=X&ved=1t:242&ictx=111"
              rel="noopener noreferrer"
            >
              <p className="text-2xl mb-8 underline">
                <IconMapPin2 className="inline mr-2 opacity-75" />
                Local: Praça Dr. Augusto Silva
              </p>
            </a>
            <ul>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:10 - Exibições de filmes com acessibilidade seguido de bate
                papo
                <Tooltip
                  arrowOffset={10}
                  arrowSize={4}
                  label="Acessível em libras"
                  withArrow
                  position="top"
                >
                  <Image
                    src="/libras-logo.svg"
                    className="inline ml-2"
                    width={25}
                    height={25}
                    alt="Libras"
                  />
                </Tooltip>
                <small className="block opacity-75">
                  ILHA DO LIXO / 9 minutos / MG
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:50 - Cortejo de instrumentos recicláveis
                <small className="block opacity-75">
                  Circo Lumiar - Projeto Faísca
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Acessível em libras"
                    withArrow
                    position="top"
                  >
                    <Image
                      src="/libras-logo.svg"
                      className="inline ml-2"
                      width={25}
                      height={25}
                      alt="Libras"
                    />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                17:50 - Exibição do filme seguido de bate papo
                <Tooltip
                  arrowOffset={10}
                  arrowSize={4}
                  label="Acessível em libras"
                  withArrow
                  position="top"
                >
                  <Image
                    src="/libras-logo.svg"
                    className="inline ml-2"
                    width={25}
                    height={25}
                    alt="Libras"
                  />
                </Tooltip>
                <small className="block opacity-75">
                  AS QUATRO ESTAÇÕES / 20 minutos / SC
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                18:30 - Aula show | Gastronomia Unilavras
                <Tooltip
                  arrowOffset={10}
                  arrowSize={4}
                  label="Acessível em libras"
                  withArrow
                  position="top"
                >
                  <Image
                    src="/libras-logo.svg"
                    className="inline ml-2"
                    width={25}
                    height={25}
                    alt="Libras"
                  />
                </Tooltip>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                19:00 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-3">

                  ANTES DO PRATO / 53 minutos / SP
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                20:00 - Pré-lançamento do livro O CATADOR, de Evaldo Garcia
                <small className="block opacity-75">
                  Com a presença do autor
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                20:15 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  ILHA DO LIXO / 9 minutos / MG
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                  <br />
                  ÁGUAS TURVAS / 7 minutos / RJ
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                20:50 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-6">
                    
                  COMIDA DE QUINTAL / 17 minutos / MG
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light  py-4 ">
                20:50 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-5">

                  CADIM / 6 minutos / SP
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Audiodescrição"
                    withArrow
                    position="top"
                  >
                    <Image
                      src="/audiodescricao.svg"
                      className="inline ml-2"
                      width={22}
                      height={22}
                      alt="Libras"
                    />
                  </Tooltip>
                </small>
              </li>
            </ul>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="dia04">
          <div className="py-5">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Pra%C3%A7a+Dr.+Augusto+Silva,+Lavras+-+MG,+37200-000/data=!4m2!3m1!1s0x9ffd87f91f5715:0xb2a821d86d6f195?sa=X&ved=1t:242&ictx=111"
              rel="noopener noreferrer"
            >
              <p className="text-2xl mb-8 underline">
                <IconMapPin2 className="inline mr-2 opacity-75" />
                Local: Praça Dr. Augusto Silva
              </p>
            </a>
            <ul>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:10 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-12">
                    
                  O T-REX E A PEDRA LASCADA / 17 minutos / ES
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                16:50 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  
                  MEMÓRIAS DA INFÂNCIA / 3 minutos / MG
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                17:30 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-10">

                  O ECO EM MIM / 72 minutos / SP
                  </Link>
                  <Tooltip
                    arrowOffset={10}
                    arrowSize={4}
                    label="Legendagem descritiva"
                    withArrow
                    position="right"
                  >
                    <IconBadgeCc className="inline ml-2" />
                  </Tooltip>
                </small>
              </li>

              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                19:00 - Ação VERdeCINE
                <small className="block opacity-75">
                  Entrega de alimentos arrecadados
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                20:00 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-17">

                  ÁGUAS QUE ME TOCAM / 17 minutos / RO
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light border-b-2 py-4 border-[#ffffff23]">
                20:30 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-11">

                  O RIO NAO VAI MAIS CORRER QUANDO VOCE FOR EMBORA / 17 minutos
                  / MT
                  </Link>
                </small>
              </li>
              <li className="text-xl text-vc-light  py-4">
                21:10 - Exibição do filme seguido de bate papo
                <small className="block opacity-75">
                  <Link className="underline" href="/filmes#filme-18">

                  ANTES DE CHEGAR NA SUA MESA, PASSA PELAS NOSSAS MÃOS / 14
                  minutos / MG
                  </Link>
                </small>
              </li>
            </ul>
          </div>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
