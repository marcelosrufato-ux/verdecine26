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
  classificacao?: "livre" | "12" | "10";
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
              {classificacao == "10" && (
                <Image src="/10.svg" w={22} alt="Classificação Livre" />
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
  classificacao?: "livre" | "12" | "10";
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
          {classificacao == "10" && (
            <Image src="/10.svg" w={22} alt="Classificação Livre" />
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
            Festival Socioambiental de Filmes Verdecine 2026
          </h4>
          <Button
            component="a"
            download
            href="/Programação - VERdeCINE - 2026.pdf"
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
        <Tabs color="#6faed8" variant="pills" defaultValue="quinta">
          <Tabs.List grow>
            <DiaTab value="quinta" titulo="Quinta-feira" data="19/05" />
            <DiaTab value="sexta" titulo="Sexta-feira" data="29/05" />
            <DiaTab value="sabado" titulo="Sábado" data="30/05" />
            <DiaTab value="domingo" titulo="Domingo" data="31/05" />
          </Tabs.List>

          <Tabs.Panel value="quinta">
            <div className="py-5">
              <LocalBox>Unilavras</LocalBox>
              <EventoBox horario="18h30 ÀS 20h00" titulo="PRÉ-ABERTURA">             
                <EventDetail classificacao="livre">
                  <FilmeCard
                    
                    titulo="INFÂNCIA, O FUTURO EM ALERTA / documentário / 55 minutos / São Paulo-SP" />
                                        
                  <div className="py-3 border rounded-md p-5 mt-5">
                  <p>
                    A obra investiga como o colapso ambiental afeta a saúde física e mental de 18 milhões de crianças 
                    de até seis anos no Brasil. Revela que quem nasceu em 2020 enfrentará quase sete vezes mais ondas 
                    de calor do que a geração de 1960, impactando severamente o desenvolvimento cognitivo e emocional 
                    de milhões de crianças, especialmente as 8 milhões em situação de pobreza. Com mais de um milhão 
                    de crianças vivendo em áreas de risco de enchentes e periferias enfrentando temperaturas até 5 °C 
                    mais altas devido à falta de áreas verdes, o documentário questiona quais são as medidas necessárias 
                    para proteger essa geração de traumas e danos irreversíveis causados pela crise climática.                    
                  </p>
                </div>               

                </EventDetail>
              </EventoBox>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="sexta">
            <div className="py-5">
              <LocalBox>
                CEU - Centro de Artes e Esporte Unificados - Lavrinhas
              </LocalBox>

              <EventoBox 
                horario="08h00 / 13h00 / 15h30"
                titulo="SESSÃO PARA ESCOLARES - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="O JARDIM MÁGICO / Animação / 6 minutos / Curitiba-PR" />
                  <FilmeCard titulo="HABITAR / Híbrido / 15 minutos / Marília e Vera Cruz-SP"
                  />
                  <FilmeCard titulo="FILMES PRODUZIDOS POR ESCOLARES E.M. OSCAR BOTELHO, 5 minutos" />
                  <FilmeCard titulo="FILMES PRODUZIDOS POR ESCOLARES E.M. P. LOURENÇO MENICUCCI, 5 minutos" />
                </EventDetail>
              </EventoBox>

              <EventoBox 
                horario="09h00"
                titulo="ABERTURA OFICIAL">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="EXIBIÇÃO DE FILMES E BATE PAPO SOBRE A TRAJETÓRIA DO VERDECINE" />
                </EventDetail>
              </EventoBox>

              {/*<EventoBox
                horario="09h00"
                titulo="ABERTURA OFICIAL"
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
              </EventoBox>*/}

              <EventoBox
                horario="16h00 às 21h30"
                titulo="FEIRA DA ECONOMIA SOLIDÁRIA">            
              </EventoBox>
              <EventoBox
                horario="20h00"
                titulo="SESSÃO ESCOLARES EJAI ABERTA AO PÚBLICO - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA - APRESENTAÇÃO MUSICAL E CALDO VERDECINE">
                {/*<p>EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA, APRESENTAÇÃO MUSICAL E CALDO VERDECINE</p>*/}              
                <EventDetail classificacao="livre">            
                  <FilmeCard titulo="ÀS COMPRAS / Ficção / 14 minutos / Rio de Janeiro-RJ" />
                  <FilmeCard titulo="PRESÉPIO / Ficção / 18 minutos / Rio de Janeiro-RJ" />
                </EventDetail>
              </EventoBox>

              <EventoBox
                horario="18h00"
                titulo="SESSÃO INFANTIL ABERTA AO PÚBLICO - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA ">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="PAPAYA / Animação / 78 minutos / São Paulo-SP" />
                  <hr className="my-5" />
                  <p>Apaixonada pela ideia de voar, uma pequena semente de mamão precisa continuar se 
                    movendo para evitar enraizar-se. Perseverante, ela descobre o poder de suas raízes, 
                    que conectam a vida por caminhos profundos e misteriosos, e desencadeia uma grande 
                    revolução, transformando seu ambiente e realizando seu sonho da forma mais inusitada. </p>
                  
                </EventDetail>
              </EventoBox>

              <EventoBox
                horario="20h00"
                titulo="SESSÃO ESCOLARES EJAI ABERTA AO PÚBLICO - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA - APRESENTAÇÃO MUSICAL E CALDO VERDECINE">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="ÀS COMPRAS / Ficção / 14 minutos / Rio de Janeiro-RJ" />
                  <FilmeCard titulo="PRESÉPIO / Ficção / 18 minutos / Rio de Janeiro-RJ" />
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
                horario="09h00 às 12h00"
                titulo="SEMANA DO BRINCAR / CONSTRUÇÃO DO PLANO DA PRIMEIRA INFÂNCIA EXIBIÇÃO DE FILME SEGUIDO DE CONVERSA">                
                <p>Aberto ao público, sujeito a lotação </p>
                <EventDetail classificacao="livre" >
                  <FilmeCard titulo="DO COLO DA TERRA/ Documentário / 75 minutos / São Paulo-SP" />
                  <p><strong> Presença da diretora do filme Renata Meirelles</strong></p>
                  <p>O documentário revela o modo de vivenciar a infância entre os povos Guarani Kaiowá, Guarani Nhandeva, Baniwa e Khisetje, abordando temas como espiritualidade, respeito ao meio ambiente e sentimento de pertencimento coletivo.</p>
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="10h00 às 19h00"
                titulo="FEIRA DA ECONOMIA SOLIDÁRIA">
              </EventoBox>
              
              <EventoBox
                horario="12h00 às 13h00 "
                titulo="APRESENTAÇÃO MUSICAL"
              ></EventoBox>

              <EventoBox
                horario="13h00 "
                titulo="OFICINA - A ESCOLA QUE EU QUERO - UNILAVRAS"
              ></EventoBox>

              <EventoBox
                horario="14h00"
                titulo="EXIBIÇÃO DE FILME SEGUIDO DE CONVERSA">
                <EventDetail classificacao="10">
                  <FilmeCard titulo="CARTAS PELA PAZ / Documentário / 25 minutos/ Rio de Janeiro-RJ " />
                  <FilmeCard titulo="PRESÉPIO / Ficção / 18 minutos / Rio de Janeiro-RJ" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="15h00"
                titulo="CONTAÇÃO DE HISTÓRIAS E BRINCADEIRAS - ENTRE LETRAS E BRINCARES - UFLA - EXIBIÇÃO DE FILME SEGUIDO DE CONVERSA">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="DOIS PASSOS / Ficção / 12 minutos / Goiânia-GO" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="15h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="PONTO DE PARTIDA / Documentário / 14 minutos / Campinas-SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="16h"
                titulo="SESSÃO INFANTIL EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA - EXIBIÇÃO DE FILME SEGUIDO DE CONVERSA" >                
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="O JARDIM MÁGICO / Animação / 6 minutos / Curitiba-PR"/>
                  <FilmeCard titulo="UMASSUMA- LASCAS DE MEMÓRIAS / Animação / 7 minutos / Belém-PA"/>
                </EventDetail>
                <p>SESSÃO ÁGUA - SESSÃO FILMES FEITOS POR CRIANÇAS EM AMBIENTE ESCOLAR </p>
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="GUARDIÕES DAS ÁGUAS / Híbrido / 22 minutos / Jaboatão dos Guararapes-PE" />
                </EventDetail>
                <p>OFICINAS CINEMA NA ESCOLA </p>
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="Filmes produzidos por escolares Oscar Botelho e Paulo Lourenço Menicucci" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="17h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="QUANTO VALE? / Híbrido / 17 minutos / Belo Horizonte-MG" />
                  <FilmeCard titulo="ÀS COMPRAS / Ficção / 14 minutos / Rio de Janeiro-RJ" />
                </EventDetail>
              </EventoBox>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="domingo">
            <div className="py-5">
              <LocalBox>Praça Dr. Augusto Silva - Centro - Lavras</LocalBox>
              <EventoBox                 
                horario="09h00"
                titulo="">               
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="APRESENTAÇÃO MUSICAL" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="09h30 ÀS 11h00"
                titulo="SESSÃO HOMENAGEM À RENATA MEIRELLES">
                <p>ENCERRAMENTO DA SEMANA DO BRINCAR </p>
                <p>CONSTRUÇÃO DO PLANO DA PRIMEIRA INFÂNCIA </p>
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="SÉRIE DE DOCUMENTÁRIOS: TERRITÓRIO DO BRINCAR" />
                  <p>🌳Com a presença da diretora do filme Renata Meirelles</p>
                </EventDetail>
              </EventoBox>

              <EventoBox
                horario="10h00 ÀS 12H00"
                titulo="">                                 
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="OFICINA - A ESCOLA QUE EU QUERO - UNILAVRAS" />
                </EventDetail>
              </EventoBox>

              <EventoBox
                horario="11:00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA">
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="FILMES PRODUZIDOS NAS OFICINAS DE CINEMA NA ESCOLA" />
                  <p>Escolas Municipais: Oscar Botelho e Paulo Lourenço Menicucci</p>
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="11h30"
                titulo="SESSÃO INFANTIL - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="O JARDIM MÁGICO/ Animação / 6 minutos / Curitiba - PR" />
                  <FilmeCard titulo="UMASSUMA- LASCAS DE MEMÓRIAS / Animação / 7 minutos /Belém - PA" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="12h00"
                titulo="SESSÃO INFANTIL - EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA" >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="PAPAYA / Animação/ 78 minutos / SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="14h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="HABITAR / Híbrido / 15 minutos / Marília e Vera Cruz-SP" />
                  <FilmeCard titulo="DA ALDEIA À UNIVERSIDADE / Documentário / 16 minutos / Palmas-TO" />
                  <FilmeCard titulo="MEMÓRIA DAS ESCOLAS DA FLORESTA EM RONDÔNIA / Documentário / 16 minutos / Cacaulândia-RO" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="15h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="ÀS COMPRAS / Ficção / 14 minutos / Rio de Janeiro-RJ" />
                  <FilmeCard titulo="QUANTO VALE? / Híbrido / 17 minutos / Belo Horizonte-MG" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="16h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="10">
                  <FilmeCard titulo="CARTAS PELA PAZ / Documentário / 25 minutos/ Rio de Janeiro-RJ" />
                  <FilmeCard titulo="PRESÉPIO / Ficção / 18 minutos / Rio de Janeiro-RJ" />
                  
                  {/*<hr className="my-5" />
                  <h4 className="text-lg font-bold">
                    Apresentação do Livro “Cabeça na terra: Suleares para as
                    práticas pedagógicas sobre a cultura dos povos originários
                    do Brasil” com a presença dos autores Kauany Damião e Luan
                    Mendonça.
                  </h4>*/}
                </EventDetail>
              </EventoBox>
               <EventoBox
                horario="17h00"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="DOIS PASSOS / Ficção / 12 minutos / Goiânia-GO" />
                </EventDetail>
              </EventoBox>
               <EventoBox
                horario="17h30"
                titulo="EXIBIÇÃO DE FILMES SEGUIDO DE CONVERSA"
              >
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="UM FILME DE FICÇÃO/ Híbrido/ 24 minutos / Santo Antônio do Jardim-SP" />
                </EventDetail>
              </EventoBox>
              <EventoBox
                horario="18h00"
                titulo="">                                 
                <EventDetail classificacao="livre">
                  <FilmeCard titulo="APRESENTAÇÃO MUSICAL" />
                </EventDetail>                
              </EventoBox>
              
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}
