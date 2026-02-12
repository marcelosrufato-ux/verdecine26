import {
  Button,
  Center,
  Group,
  Image,
  List,
  Stack,
  Tabs,
  Title,
} from "@mantine/core";
import {
  IconMap,
  IconClock,
  IconMovie,
  IconDownload,
} from "@tabler/icons-react";

function DiaTab({
  value,
  titulo,
  data,
}: {
  value: string;
  titulo: string;
  data: string;
}) {
  return (
    <Tabs.Tab
      value={value}
      styles={{
        tab: { border: "1px solid #dddddd" },
      }}
    >
      <Stack gap={0}>
        <Title order={3}>{titulo}</Title>
        <Title order={5}>{data}</Title>
      </Stack>
    </Tabs.Tab>
  );
}

function LocalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-2xl bg-[rgba(161,202,115,0.125)] rounded-md p-5">
      <Group gap={10}>
        <IconMap />
        {children}
      </Group>
    </div>
  );
}

function EventoBox({
  horario,
  titulo,
  apoio,
  children,
}: {
  horario?: string;
  titulo: string;
  apoio?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="border rounded-md p-5 mt-5">
      <Group gap={10}>
        {horario && (
          <>
            <IconClock />
            <span className="text-xl font-bold">{horario}</span>
          </>
        )}
        {titulo}

        {apoio}
      </Group>
      {children}
    </div>
  );
}

function EventDetail({
  classificacao,
  libras,
  children,
}: {
  classificacao?: "livre" | "12";
  libras?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="border rounded-md p-5 mt-5">
        {(classificacao || libras) && (
          <>
            <Group>
              {classificacao == "12" && (
                <Image src="/12.svg" w={22} alt="Classificação Livre" />
              )}
              {classificacao == "livre" && (
                <Image src="/livre.svg" w={22} alt="Classificação Livre" />
              )}

              {libras && (
                <Image src="/libras.svg" w={22} alt="Acessível em Libras" />
              )}
            </Group>
          </>
        )}

        {children}
      </div>
    </>
  );
}

function FilmeCard({
  titulo,
  detalhes,
  classificacao,
  libras,
  extras,
}: {
  titulo: string;
  detalhes?: string;
  classificacao?: "livre" | "12";
  libras?: boolean;
  extras?: React.ReactNode;
}) {
  return (
    <div className="">
      <Group gap={10}>
        <IconMovie size={20} />
        <span className="text-lg font-bold">{titulo}</span>
        <Group className="p-1">
          {classificacao == "12" && (
            <Image src="/12.svg" w={22} alt="Classificação Livre" />
          )}
          {classificacao == "livre" && (
            <Image src="/livre.svg" w={22} alt="Classificação Livre" />
          )}

          {libras && (
            <Image src="/libras.svg" w={22} alt="Acessível em Libras" />
          )}
        </Group>
      </Group>
      {detalhes && <span className=" font-bold block">{detalhes}</span>}

      {extras}
    </div>
  );
}

export default function Programacao25() {
  return (
    <>
      <Center className="py-5">
        <Stack align="center">
          <h4 className="vc_title">
            Programação - Festival Socioambiental de Filmes Verdecine 2025
          </h4>
          <Button
            component="a"
            download
            href="/Programação - VERdeCINE - 2025.pdf"
            size="lg"
            variant="light"
            className="w-fit"
            leftSection={<IconDownload />}
          >
            Baixar PDF da Programação
          </Button>
        </Stack>
      </Center>
      <div className="p-5 border rounded-md">
        <Tabs color="#386634" variant="pills" defaultValue="quinta">
          <Tabs.List grow>
            <DiaTab value="quinta" titulo="Quinta-feira" data="05/06" />
            <DiaTab value="sexta" titulo="Sexta-feira" data="06/06" />
            <DiaTab value="sabado" titulo="Sábado" data="07/06" />
            <DiaTab value="domingo" titulo="Domingo" data="08/06" />
          </Tabs.List>

          <Tabs.Panel value="quinta">
            <div className="py-5">
              <LocalBox>Unilavras</LocalBox>
              <EventoBox horario="16:00-18:00" titulo="Abertura Verdecine">
                <EventDetail>
                  <FilmeCard
                    titulo="MULHERES NA BIOCONSTRUÇÃO (presença da diretora)"
                    libras
                    classificacao="livre"
                    detalhes="Direção: Lais Yumi / Documentário / 13 minutos / 2023 / CARRANCAS(MG)"
                  />
                </EventDetail>
              </EventoBox>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="sexta">
            <div className="py-5">
              <LocalBox>
                CEU - Centro de Artes e Esporte Unificados - Lavrinhas
              </LocalBox>

              <EventoBox titulo="SESSÃO PARA ESCOLARES - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA">
                <EventDetail libras classificacao="livre">
                  <FilmeCard titulo="QUINTAL / animação / 15 minutos / BA" />
                  <FilmeCard
                    titulo="AURORA - A RUA QUE QUERIA SER UM RIO / animação / 10
                      minutos / SP"
                  />
                  <FilmeCard titulo="FILMES PRODUZIDOS PELOS ESCOLARES DA ESCOLA OSCAR BOTELHO, 3 minutos" />
                  <FilmeCard titulo="FILMES PRODUZIDOS PELOS ESCOLARES DA ESCOLA DORA MATARAZZO, 5 minutos" />
                </EventDetail>
              </EventoBox>

              <EventoBox
                horario="16h00 às 20h00"
                titulo="OFICINA"
                apoio={
                  <Image src="/logo-unilavras.png" alt="Unilavras" w={45} />
                }
              >
                <div className="py-3 border rounded-md p-5 mt-5">
                  <p>
                    Oferecido pelo curso de arquitetura da Unilavras CIDADE DOS
                    SONHOS, construção de uma cidade a partir de materiais
                    reciclados.
                    <br /> E SE A NOSSA CIDADE FOSSE MAIS SUSTENTÁVEL? Mural
                    colaborativo.
                  </p>
                </div>
              </EventoBox>

              <EventoBox
                horario="18h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="CRESCER ONDE NASCE O SOL /  documentário / 12 minutos / PE" />
                  <FilmeCard titulo="SANGUE E SUOR / documentário / 25 minutos / SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="19h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="DOMINGO EM RIGEL KENT / Ficção /  20 minutos / MG" />
                  {/* <FilmeCard titulo="SANGUE E SUOR / documentário / 25 minutos / SP" />  */}
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="19h30"
                titulo="SESSÃO PARA ESCOLARES EJA (Aberta ao Público) - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA "
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="MARCOS, O ERRANTE / documentário / 13 minutos / BA" />
                  <FilmeCard titulo="JUSSARA / animação / 9 minutos / BA" />
                </EventDetail>
              </EventoBox>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="sabado">
            <div className="py-5">
              <LocalBox>
                CEU - Centro de Artes e Esporte Unificados - Lavrinhas
              </LocalBox>
              <EventoBox
                horario="09h00"
                titulo="APRESENTAÇÃO ARTÍSTICO CULTURAL"
              ></EventoBox>
              <EventoBox
                horario="10h00"
                titulo="SESSÃO DE FILMES OFICINA NAS ESCOLAS - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="ÁGUA VIVA / 3 minutos - Filme realizado pelos alunos e alunas da Escola Oscar Botelho" />
                  <FilmeCard titulo="FILMES REALIZADO PELOS ESCOLARES DA ESCOLA DORA MATARAZZO / 5 minutos" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="10h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="QUINTAL / animação / 15 minutos / BA" />
                  <FilmeCard titulo="AURORA - A RUA QUE QUERIA SER UM RIO / animação / 10 minutos / SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="11h30"
                titulo="APRESENTAÇÃO ARTÍSTICO CULTURAL"
              ></EventoBox>
              <EventoBox
                horario="14h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="NUNCA É NOITE NO MAPA / documentário / 6 minutos / PE " />
                  <FilmeCard titulo="ENSAIOS SOBRE UMA CIDADE / documentário / 25 minutos / RS" />
                  <FilmeCard titulo="MINHA CÂMERA É MINHA FLECHA / Documentário/ 19 minutos / SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="16h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="MAR CONCRETO / documentário / 15 minutos / RJ" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="16h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail libras classificacao="livre">
                  <FilmeCard titulo="MULHERES NA BIOCONSTRUÇÃO / documentário / 13 minutos / MG" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="17h"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail libras classificacao="12">
                  <FilmeCard titulo="FANTASMA NEON / ficção /  20 minutos / RJ " />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="17h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="12">
                  <FilmeCard titulo="O SILÊNCIO DAS OSTRAS / documentário / 127 minutos / MG (presença do diretor)" />
                </EventDetail>
              </EventoBox>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="domingo">
            <div className="py-5">
              <LocalBox>Praça Dr. Augusto Silva - Centro - Lavras</LocalBox>
              <EventoBox
                horario="09h00"
                titulo="CONTAÇÃO DE HISTÓRIA"
              ></EventoBox>
              <EventoBox
                horario="09:30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="JUSSARA / animação / 9 minutos / BA" />
                  <FilmeCard titulo="QUINTAL / animação / 15 minutos / BA" />
                  <FilmeCard titulo="AURORA - A RUA QUE QUERIA SER UM RIO / animação / 10 minutos /SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="10:30"
                titulo="SESSÃO DE FILMES OFICINA NAS ESCOLAS - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="FILME REALIZADO PELOS ESCOLARES DA ESCOLA OSCAR BOTELHO, 3 minutos" />
                  <FilmeCard titulo="FILME REALIZADO PELOS ESCOLARES DA ESCOLA DORA MATARAZZO, 5 minuto" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="11:00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="PET / documentário / 50 minutos / SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="13:00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="DOMINGO EM RIGEL KENT / Ficção /  20 minutos / MG (presença do diretor) " />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="14:00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="MINHA CÂMERA É MINHA FLECHA/ Documentário/ 19 minutos / SP" />
                  <hr className="my-5" />
                  <h4 className="text-lg font-bold">
                    Apresentação do Livro “Cabeça na terra: Suleares para as
                    práticas pedagógicas sobre a cultura dos povos originários
                    do Brasil” com a presença dos autores Kauany Damião e Luan
                    Mendonça.
                  </h4>
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="15:00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="ENSAIOS SOBRE UMA CIDADE / documentário / 25 minutos / RS" />
                  <FilmeCard titulo="SANGUE E SUOR / documentário / 25 minutos" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="16:30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail libras classificacao="12">
                  <FilmeCard titulo="MARCOS, O ERRANTE / documentário / 13 minutos / BA" />
                  <FilmeCard titulo="FANTASMA NEON / ficção / 20 minutos / RJ  " />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="17:30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="NUNCA É NOITE NO MAPA/ documentario / 6 minutos / PE" />
                  <FilmeCard titulo="MAR CONCRETO / documentário / 15 minutos / RJ" />
                  <FilmeCard
                    libras
                    titulo="CINEMA SEM TETO / documentário /12 minutos / SP (símbolo mãos libras)"
                  />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="18:30"
                titulo="SHOW DE ENCERRAMENTO DO FESTIVAL: BINHO SEBÁ e GUSTAVO GU"
              ></EventoBox>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}
