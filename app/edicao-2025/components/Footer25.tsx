import { Container, Grid, Image } from "@mantine/core";
import Realizacao from "./Realizacao";
import {
  IconMailbox,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer25() {
  return (
    <>
      <footer id="contato" className="border border-t py-10 bg-gray-100">
        <Container size="xl">
          <Grid gutter={50} justify="center">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <h4 className="vc_title text-gray-500">Contato</h4>
              <div className="pt-5">
                <Image src="/logo.svg" w={100} alt="Logo VerdeCINE" />
                <ul className="pt-5">
                  <li>
                    {<IconMailbox className="inline mr-2" />}
                    <a
                      className="underline "
                      href="mailto:producaoverdecine@gmail.com"
                    >
                      producaoverdecine@gmail.com
                    </a>
                  </li>
                  <li>
                    {<IconBrandInstagram className="inline mr-2" />}
                    <a
                      className="underline "
                      href="https://www.instagram.com/verdecine/"
                    >
                      @verdecine
                    </a>
                  </li>
                  <li>
                    {<IconBrandYoutube className="inline mr-2" />}
                    <a
                      className="underline "
                      href="https://www.youtube.com/@verdecinefestival"
                    >
                      @verdecine
                    </a>
                  </li>
                </ul>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <h4 className="vc_title text-gray-500">Links Úteis</h4>
              <ul>
                <li>
                  <a href="/programacao" className="underline">
                    Progamação
                  </a>
                </li>
                <li>
                  <a href="/filmes" className="underline">
                    Filmes Selecionados
                  </a>
                </li>

                <li>
                  <a
                    href="/sobre/o-festival#ficha-tecnica"
                    className="underline"
                  >
                    Ficha Técnica da edição 2025
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    Sobre o Festival
                  </a>
                </li>
                <li>
                  <a href="/sobre/associacao-verdecine" className="underline">
                    Sobre a Associação VERdeCINE
                  </a>
                </li>
                <li>
                  <a href="historico" className="underline">
                    Histórico
                  </a>
                </li>
              </ul>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Realizacao />
            </Grid.Col>
          </Grid>
        </Container>
      </footer>
    </>
  );
}
