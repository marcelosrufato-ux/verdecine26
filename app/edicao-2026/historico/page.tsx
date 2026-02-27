"use client";
import "../globalv2.css";
import "../globalv3.css";
import Footer25 from "../components/Footer26";
import {
  Stack,
  Title,
  Container,
  Text,
  Image,
  Center,
  Grid,
  Timeline,
  Button,
} from "@mantine/core";
import { HeaderSimple } from "../components/Menu/Menu";

export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc25-green py-5">
        <Container size="xl">
          <h2 className="text-white">Histórico</h2>
        </Container>
      </div>
      <Container size="lg" className="my-12 ">
        <Timeline lineWidth={3} bulletSize={25}>
          <Timeline.Item
            title={
              <Title className="m-0 p-0 leading-none" order={4}>
                2024
              </Title>
            }
          >
            <Grid justify="end">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text>
                  Em seu terceiro ano, o VERdeCINE assumiu o formato de festival
                  na Praça Dr. Augusto Silva, nos dias 06 a 09 de junho, se
                  consolidando como o primeiro festival de filmes de Lavras. Com
                  foco no Objetivo 2 da Agenda 2030 — Fome zero e agricultura
                  sustentável —, promoveu uma programação gratuita e inclusiva:
                </Text>
                <Text>
                  - 23 filmes exibidos ao ar livre
                  <br />
                  - 2 sessões de cinema para 400 alunos da rede pública
                  <br />
                  - Oficina de documentário
                  <br />
                  - Apresentações artísticas com talentos locais
                  <br />
                  - Feira de produtos sustentáveis
                  <br />
                  - Lançamento de livro de autor lavrense
                  <br />- Aula show de gastronomia com produtos locais
                </Text>
                <Text>
                  Além disso, em 7 de setembro, promoveu a segunda edição da
                  Virada Cultura Amazônia de Pé, em parceria com o Castelo São
                  Jorge Nagô e o Quilombo Urbano São Benedito. O tema foi
                  “Celebrar as culturas e preservar os territórios”, com
                  apresentações culturais, cortejo e exibição de quatro filmes
                  do acervo VERdeCINE. A ação arrecadou mais de 700 assinaturas
                  para o projeto de lei Amazônia de Pé.
                </Text>
                <Button component="a" href="/edicao-2024" className="mt-5">
                  Confira o site da edição 2024
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image
                  className="float-end"
                  src="/cartaz-com-logo.png"
                  w={400}
                  radius="md"
                  alt="Poster Edição 2024"
                />
              </Grid.Col>
            </Grid>
          </Timeline.Item>

          <Timeline.Item
            title={
              <Title className="m-0 p-0 leading-none" order={4}>
                2023
              </Title>
            }
          >
            <Text>
              O ano começou com a participação no Banquetaço Nacional, em 27 de
              fevereiro, oferecendo comida saudável gratuita e exibindo o
              documentário local “Maria Fátima, produzir alimentos é amar o
              próximo”, em parceria com o coletivo SANS Lavras e outras
              entidades.
            </Text>
            <Text>
              Em 16 de abril, foi realizada uma projeção ao ar livre do filme
              “Torre das Donzelas”, em parceria com o projeto “Leia Mulheres”,
              promovendo diálogo sobre resistência à ditadura e o papel das
              mulheres na democracia.
            </Text>
            <Text>
              O encerramento do ano ocorreu em 03 de setembro com a exibição de
              “Um filme para Ehuana”, no Centro de Cultura da UFLA. A sessão
              contou com a presença remota da diretora Louise Botkay e integrou
              nova ação de coleta de assinaturas para o projeto Amazônia de Pé.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={
              <Title className="m-0 p-0 leading-none" order={4}>
                2022
              </Title>
            }
          >
            <Text>
              O VERdeCINE iniciou sua trajetória com três encontros na Casa da
              Cultura de Lavras, entre abril e maio, abordando temas como hortas
              comunitárias, permacultura e desmatamento da Amazônia. A primeira
              edição contou com a participação de professores, alunos,
              paisagistas e representantes da educação pública, promovendo
              trocas de saberes entre a população urbana e rural do município.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  );
}
