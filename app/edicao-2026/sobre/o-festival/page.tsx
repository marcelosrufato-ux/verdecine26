"use client";
import "../../globalv2-26.css"; // Sobe 2 níveis
import "../../style-26.css"; // Sobe 2 níveis
import Footer25 from "../../components/Footer26";
import { Stack, Title, Container, Text } from "@mantine/core";
import { HeaderSimple } from "../../components/Menu/Menu";
import FichaTecnica from "../../components/FichaTecnica";
export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc26-blue py-5">
        <Container size="xl">
          <h2 className="text-white">Sobre o festival</h2>
        </Container>
      </div>
      <Container size="lg" className="my-12">
        <Stack gap="md">
          <Title order={2}>Sobre o VERdeCINE</Title>
          <Text>
            O VERdeCINE é um festival socioambiental de filmes que nasce em
            Lavras, Minas Gerais, em 2022. Nossa proposta é ser um fórum que
            utiliza o audiovisual como ferramenta para estimular diálogos sobre
            temas ligados ao ser humano na sua interação com o meio ambiente.
          </Text>
          <Text>
            O VERdeCINE desenvolve ao longo do ano uma programação com ações
            abertas a toda comunidade lavrense e do entorno, e convida pessoas
            conhecedoras dos temas tratados nos filmes a somar reflexões e
            saberes.
          </Text>
          <Text>
            Em 2026, o VERdeCINE coloca o foco na troca de conhecimentos, exibindo 
            filmes que nos contam histórias de pessoas reais ou imaginadas, que nos 
            fazem pensar a relação entre a educação, a sociedade e a natureza.
          </Text>
          <Text>
            Ao longo de três semanas recebemos 297 filmes de todas as partes do Brasil. 
            Um número menor do que em 2025. Arriscamos pensar que a produção de filmes 
            que fala sobre a relação da educação e temas socioambientais ainda é pouco 
            priorizada. 
          </Text>
          <Text>
            A curadoria do VERdeCINE tem como objetivo apresentar filmes de todos os 
            gêneros cinematográficos: documentário, ficção, animação, videoclipe, 
            videodança, videoarte e formatos híbridos que representem a diversidade 
            territorial do Brasil em suas formas de viver e de contar histórias. 
            Trazemos filmes que abordam outras formas narrativas, instigando o 
            público a pensar para além do que já tem visto e ouvido sobre histórias, 
            territórios e pessoas.
          </Text>
          <Text>
            Após cada sessão dialogamos sobre o que foi apresentado em uma troca de 
            saberes e sentires horizontal, para que todos e todas possam expressar 
            suas opiniões celebrando o cinema.
          </Text>
          <Text>Te esperamos!</Text>
          <Text>Dias 29, 30 e 31 de maio de 2026</Text>
          <Text>Lavras - MG</Text>
        </Stack>
      </Container>
      <section className="py-16 !text-vc26-blue" id="ficha-tecnica">
        <Container>
          <div className="py-16 ">
            <h2 className="text-vc26-blue">Ficha Técnica -VERdeCINE 2026</h2>
          </div>

          <FichaTecnica />
          <div className="py-4 ">
            <h6 className="text-vc26-blue">Agradecemos de todo o coração as todas as pessoas que colaboram direta ou indiretamente para que o VERdeCINE aconteça.</h6>
          </div>
        </Container>
      </section>
      <Footer25 />
    </>
  );
}
