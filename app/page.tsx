"use client";
import "./globals.css";
import "./edicao-2026/style-26.css";

import UnderConstruction from "./edicao-2026/components/UnderConstruction";
import { Header } from "./edicao-2026/components";
import {
  Container,
  Grid,
  Menu,
  Image,
  Flex,
  Center,
  Stack,
  Group,
  Title,
  Button,
  Text,
  Overlay,
  Modal,
} from "@mantine/core";
import { HeroContentLeft } from "./edicao-2026/components/Hero/Hero";
import { HeaderSimple } from "./edicao-2026/components/Menu/Menu";
// import Image from "next/image";
import Programacao25 from "./edicao-2026/components/Programacao/Programacao";
import Realizacao from "./edicao-2026/components/Realizacao";
import Footer26 from "./edicao-2026/components/Footer26";
import bg from "@/public/BG_SITE.png";
import {
  IconArrowRight,
  IconArrowRightTail,
  IconCalendar,
  IconClock,
  IconMap,
  IconMovie,
  IconPlayerPlayFilled,
  IconPlus,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <HeaderSimple />
      <div style={{ backgroundImage: `url(${bg.src})` }}>
        <Container size="xl">
          <div className="py-12">
            <Grid justify="center" align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <div>
                  <span className="bg-vc25-green vc_title p-2 text-lg leading-tight text-white  ">
                    29, 30 e 31 de Maio - Lavras/MG
                  </span>
                  <h4 className="vc25-green vc_title leading-tight mt-5">
                    OLHAR AS CIDADES E COMUNIDADES SUSTENTÁVEIS
                  </h4>
                  <h2 className="text-vc25-green-dark text-6xl vc_title leading-tight">
                    VER
                    <span className="text-5xl">DE</span>CINE FESTIVAL
                    SOCIOAMBIENTAL DE FILMES
                  </h2>
                  <span className="text-4xl m-0 p-0 vc_title leading-tight text-vc25-green-light">
                    {" "}
                    (Edição 2026)
                  </span>

                  <Text mt="md">
                    VERdeCINE é um festival socioambiental de filmes com sede em
                    Lavras (MG), que encontra o audiovisual como ferramenta para
                    dialogar sobre o ser humano e sua interação com o meio
                    social e ambiental. Com ações ao longo de todo o ano e uma
                    cuidadosa curadoria, o festival celebra o cinema e promove
                    encontros e reflexões sobre os temas da agenda de 2030.
                    <span className="font-bold">
                      Em 2025 o VERdeCINE expande o diálogo da ODS 11 para
                      repensar as cidades e os assentamentos humanos vendo a
                      inclusão, segurança, resiliência e sustentabilidade.
                    </span>
                  </Text>
                  <Button
                    component="a"
                    href="/edicao-2026/programacao"
                    rightSection={<IconArrowRight />}
                    variant="transparent"
                    p={0}
                    size="xl"
                    className="underline font-bold p-0 m-0"
                  >
                    Confira a programação
                  </Button>
                  <Group className="mb-5">
                    <Button
                      size="lg"
                      component="a"
                      href="/edicao-2026/sobre/o-festival"
                      leftSection={<IconPlus />}
                    >
                      Saiba Mais sobre o Festival
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      component="a"
                      href="/edicao-2026/filmes"
                      leftSection={<IconMovie />}
                    >
                      Confira os filmes selecionados
                    </Button>
                  </Group>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Flex
                  justify="center"
                  align="center"
                  pos={"relative"}
                  onClick={() => open()}
                  className="cursor-pointer hover:scale-[1.02] transition-all duration-300"
                >
                  <Image
                    src="/Poster-VERdeCINE-Site2.webp"
                    alt="poster"
                    radius="lg"
                    className="shadow-2xl shadow-[#00000025] relative opacity-85"
                    w={400}
                  />

                  <Flex
                    justify="center"
                    align="center"
                    className="w-[70px] absolute bg-[#ffffff70] heartbeatSlow outline aspect-square rounded-full "
                  >
                    <IconPlayerPlayFilled size="30" />
                  </Flex>
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
          {/* <Programacao25></Programacao25> */}
        </Container>
      </div>

      <section className="py-12 bg-vc25-green ">
        <Center>
          <h2 className="vc_title text-white">Agenda</h2>
        </Center>
        <Container size="xl" className="py-5">
          <div className="border border-[#ffffff45] p-5 rounded-md bg-[#ffffff25]">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack className="text-white">
                  <Group>
                    <IconCalendar />
                    <Title order={4}>
                      SEXTA-FEIRA
                      <span className="text-xl font-light">
                        {" "}
                        06 de junho de 2025
                      </span>
                    </Title>
                  </Group>
                  <Group>
                    <IconClock />
                    <Title order={4}>08:00 até 22:00</Title>
                  </Group>
                  <Group wrap="nowrap">
                    <IconMap />
                    <Title order={4}>
                      CEU - Lavrinhas (Centro de Artes e Esportes Unificado
                      Paulo Alfredo Unes Pereira)
                    </Title>
                  </Group>
                </Stack>
                <Button
                  className="mt-5"
                  variant="white"
                  component="a"
                  href="/programacao"
                  rightSection={<IconArrowRight />}
                >
                  Clique aqui para ver a programação completa
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2009919845427!2d-44.99209112385216!3d-21.223876979902766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd4ed2be0d15%3A0x7af43f07b075d0dc!2sCEU%20-%20Centro%20De%20Artes%20E%20Eeportes%20Unificado%20Paulo%20Alfredo%20Unes%20Pereira!5e0!3m2!1spt-BR!2sbr!4v1747931498953!5m2!1spt-BR!2sbr"
                  height="300"
                  style={{ border: "0", width: "100%" }}
                  className="rounded-md"
                  loading="lazy"
                ></iframe>
              </Grid.Col>
            </Grid>
          </div>
          <div className="border border-[#ffffff45] p-5 rounded-md bg-[#ffffff25] mt-5">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack className="text-white">
                  <Group>
                    <IconCalendar />
                    <Title order={4}>
                      SÁBADO
                      <span className="text-xl font-light">
                        {" "}
                        07 de junho de 2025
                      </span>
                    </Title>
                  </Group>
                  <Group>
                    <IconClock />
                    <Title order={4}>10:00 até 22:00</Title>
                  </Group>
                  <Group wrap="nowrap">
                    <IconMap />
                    <Title order={4}>
                      CEU - Lavrinhas (Centro de Artes e Esportes Unificado
                      Paulo Alfredo Unes Pereira)
                    </Title>
                  </Group>
                </Stack>
                <Button
                  className="mt-5"
                  variant="white"
                  component="a"
                  href="/programacao"
                  rightSection={<IconArrowRight />}
                >
                  Clique aqui para ver a programação completa
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2009919845427!2d-44.99209112385216!3d-21.223876979902766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd4ed2be0d15%3A0x7af43f07b075d0dc!2sCEU%20-%20Centro%20De%20Artes%20E%20Eeportes%20Unificado%20Paulo%20Alfredo%20Unes%20Pereira!5e0!3m2!1spt-BR!2sbr!4v1747931498953!5m2!1spt-BR!2sbr"
                  // width="800"
                  height="300"
                  style={{ border: "0", width: "100%" }}
                  className="rounded-md"
                  loading="lazy"
                ></iframe>
              </Grid.Col>
            </Grid>
          </div>
          <div className="border border-[#ffffff45] p-5 rounded-md bg-[#ffffff25] mt-5">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack className="text-white">
                  <Group>
                    <IconCalendar />
                    <Title order={4}>
                      DOMINGO
                      <span className="text-xl font-light">
                        {" "}
                        08 de junho de 2025
                      </span>
                    </Title>
                  </Group>
                  <Group>
                    <IconClock />
                    <Title order={4}>09:00 até 18:00</Title>
                  </Group>
                  <Group wrap="nowrap">
                    <IconMap />
                    <Title order={4}>Praça Dr. Augusto Silva - Lavras</Title>
                  </Group>
                </Stack>
                <Button
                  className="mt-5"
                  variant="white"
                  component="a"
                  href="/programacao"
                  rightSection={<IconArrowRight />}
                >
                  Clique aqui para ver a programação completa
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7561525595015!2d-45.001091823851716!3d-21.24151608048772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd87f91f5715%3A0xb2a821d86d6f195!2sPra%C3%A7a%20Dr.%20Augusto%20Silva%2C%20Lavras%20-%20MG%2C%2037200-000!5e0!3m2!1spt-BR!2sbr!4v1747932380861!5m2!1spt-BR!2sbr"
                  // width="800"
                  height="300"
                  style={{ border: "0", width: "100%" }}
                  className="rounded-md"
                  loading="lazy"
                ></iframe>
              </Grid.Col>
            </Grid>
          </div>
        </Container>
      </section>

      <Footer26 />
      {/* <HeroContentLeft /> */}

      <Modal opened={opened} onClose={close} size={"xl"}>
        <iframe
          // width="560"
          // height="315"
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/qGnSKL0EOSo?si=AJzaghyNrWp_DXt7&autoplay=1&mute=0&controls=0&loop=1&playlist=qGnSKL0EOSo"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}
