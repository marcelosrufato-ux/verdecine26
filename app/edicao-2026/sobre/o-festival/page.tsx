"use client";
import "../../globalv2-26.css";
import "../../globalv3-26.css";
import Footer25 from "../../components/Footer26";
import { Stack, Title, Container, Text } from "@mantine/core";
import { HeaderSimple } from "../../components/Menu/Menu";
import FichaTecnica from "../../components/FichaTecnica";
export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc25-green py-5">
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
            Para a edição de 2025, o VERdeCINE vai olhar as cidades, buscando
            dialogar sobre sua sustentabilidade, segurança, inclusão e
            resiliência.
          </Text>
          <Text>
            Recebemos 472 filmes de todas as partes do Brasil e celebramos,
            entendendo que esse resultado é fruto de políticas públicas voltadas
            para o audiovisual brasileiro. Foram 275 filmes produzidos entre os
            anos de 2024 e 2025 — 65 longas-metragens e 165 filmes dirigidos por
            mulheres.
          </Text>
          <Text>
            A curadoria do VERdeCINE tem como objetivo apresentar filmes de
            todos os gêneros cinematográficos: documentário, ficção, animação,
            videoclipe, videodança, videoarte e formatos híbridos que
            representem a diversidade territorial do Brasil em suas formas de
            viver e de contar histórias.
          </Text>
          <Text>
            Trazemos filmes que abordam outras formas narrativas, instigando o
            público a pensar além do que já se viu e ouviu sobre histórias,
            territórios e pessoas. Após cada sessão, promovemos um diálogo
            horizontal sobre o que foi apresentado, valorizando a troca de
            saberes e sentires.
          </Text>
          <Text>Te esperamos!</Text>
        </Stack>
      </Container>
      <section className="bg-vc-purple py-16" id="ficha-tecnica">
        <Container>
          <div className="py-16 ">
            <h2 className="text-vc-light">Ficha Técnica -VERdeCINE 2025</h2>
          </div>

          <FichaTecnica />
        </Container>
      </section>
      <Footer25 />
    </>
  );
}
