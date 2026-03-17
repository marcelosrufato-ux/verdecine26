"use client";
import "../globalv2-26.css"; // Sobe 1 nível
import "../style-26.css"; // Sobe 1 nível
import Footer26 from "../components/Footer26";
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
  Anchor
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
                2025
              </Title>
            }
          >
            <Grid justify="end">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text>
                  Em 2025 o VERdeCINE expande o diálogo da ODS 11 para repensar as cidades e os 
                  assentamentos humanos vendo a inclusão, segurança, resiliência e sustentabilidade.
                </Text>
                <Text>
                  - Foram 472 filmes inscritos, vindos de todas as partes do Brasil. 275 filmes produzidos 
                  entre os anos de 2024 e 2025 resultado de políticas públicas voltadas para o audiovisual. 
                  Destes filmes, 165 foram realizados por diretoras reafirmando a presença das mulheres no cinema.
                  <br />
                  - Foram exibidos 20 filmes entre os selecionados, os produzidos pelo VERdeCINE e os convidados.
                  <br />
                  - Tivemos a presença no festival de vários realizadores e  realizadoras.
                  <br />
                  - Foram realizadas três oficinas com o apoio do departamento de Arquitetura da Unilavras: 
                  ARQUITETURA E CINEMA pelo professor Renato Ferreira, DO CROQUI A REALIDADE pela professora 
                  Marisa Pereira e para o público infantil a oficina CIDADE DOS SONHOS: UMA CIDADE SUSTENTÁVEL.                 
                  <br />
                  - Sessões de filmes, seguidas de bate-papo, especialmente curadas para mais de 200 
                  escolares da rede municipal de educação
                  <br />
                  - Apresentação do livro SULEARES PARA PRÁCTICAS PEDAGÓGICAS SOBRE A CULTURA DOS POVOS ORIGINÁRIOS DO BRASIL
                   com a presença dos autores Kauany Damião e Luan Mendonça.
                  <br />
                  - Em parceria com a ECOS da Universidade Federal de São João del Rei - UFSJ estreamos com muita 
                  alegria, as OFICINAS DE CINEMA NA ESCOLA produzindo o filme ÁGUA VIVA com as crianças da Escola 
                  Municipal Oscar Botelho de Lavras, MG.
                </Text>
                <Anchor 
                  href="https://sites.google.com/view/arquivokino/semin%C3%A1rio-contrapartida-2025/corpo-%C3%A1gua?pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  display="block"
                  mb="xl"
                  >
                        Conheça o percurso pedagógico clicando aqui.
                </Anchor>                
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image
                  className="float-end"
                  src="/poster-verdecine-site.webp"
                  w={400}
                  radius="md"
                  alt="Poster Edição 2025"
                />
              </Grid.Col>
            </Grid>
            <Text>
                  - Foi realizada a 1° OFICINA DE CURADORIA DE FILMES NA FORMAÇÃO DOCENTE no museu de 
                  história Natural da UFLA, em parceria com o  PIBID e o cineclube Cinema Com Vida. O 
                  resultado desta oficina proporcionou uma sessão totalmente curada por estudantes 
                  universitários, exibida para estudantes da EJAI - educação de jovens, adultos e idosos
                  <br />
                  - Pré-estreia nacional do filme LISPECTORANTE dirigido por Renata Pinheiro, iniciando 
                  assim a parceria com a distribuidora minera Embaúba Filmes.
                  <br />
                  - Seguindo a parceria com a Embaúba filmes e em comemoração aos 117 anos da Universidade 
                  Federal de Lavras - UFLA foi apresentado o filme Yõg Ãtak: MEU PAI, Kaiowá dirigido 
                  por Sueli Maxakali, Isael Maxakali, Roberto Romero, Luisa Lanna no Centro de Cultura da 
                  Universidade.
                  <br />
                  - Pela segunda vez,  a Virada Cultural Amazônia de pé aconteceu no quilombo urbano São 
                  Benedito em Lavras/MG e na cidade de Luminárias/MG com exibição de filmes do acervo 
                  VERdeCINE, graffiti, roda de capoeira, maculelê, contação de histórias e show musical.
                  <br />
                  - Publicamos o livro de pesquisa O CONSUMO DO AUDIOVISUAL EM LAVRAS - 2024-2025
                  <br />
                  - Em comemoração ao aniversário da APAE de Lavras, foram exibidos filmes do acervo 
                  VERdeCINE seguido de um excelente bate-papo com o público presente
                  <br />
                  - Integramos a equipe do SEMEAR - UM ENCONTRO ENTRE A LUTA SOCIAL E A AGRICULTURA 
                  CAMPONESA que aconteceu no Centro de Cultura da UFLA, reunindo várias instituições 
                  ligadas a agroecologia.
                  <br />
                  - Colaboramos pelo segundo ano consecutivo, com a MOSTRA VOZ DAS MINAS trazendo uma 
                  curadoria de filmes realizados por diretoras sobre a cultura hip-hop.
                  <br />
                  - Em comemoração ao mês da consciência negra, foi realizado pelo VERdeCINE em parceria 
                  com o conselho de cultura de Lavras a curadoria e exibição de dois documentários de 
                  duas cineastas da cidade.
                  <br />
                  - Coletamos durante todo o ano de 2025, assinaturas para o projeto de lei da Amazônia de pé.
                  <br />
                  - Participamos da PRIMAVERA DOS MUSEUS com a apresentação dos filmes realizados no 
                  VERdeCINE pelas crianças e adolescentes das escolas de Lavras, com a  participação das 
                  mesmas levando seus corpos e suas falas para dentro da Universidade Federal.
                  <br />
                  - Em homenagem ao grande diretor  Silvio Tendler, em parceria com o pibid ufla e o cineclube 
                  Cinema com Vida, foi exibido e discutido no Museu de Ciência Natural da Ufla, o filme 
                  O FIO DA MEADA documentário de 2019 sobre a resistência de povos tradicionais brasileiros 
                  diante de um processo de urbanização cada vez mais agressivo
                  <br />
                  - Com grande alegria através da vereadora Rose Oliveira, oficializamos, na câmara dos 
                  vereadores e vereadoras de Lavras, a SEMANA VERDECINE garantindo  que o festival entre 
                  para o calendário oficial da cidade.
                </Text>

                <Button component="a" href="/edicao-2025" className="mt-5">
                  Confira o site da edição 2025
                </Button>
          </Timeline.Item>


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
