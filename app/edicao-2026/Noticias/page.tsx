"use client";
import "../globalv2-26.css";
import "../style-26.css";
import Footer25 from "../components/Footer26";
import { HeaderSimple } from "../components/Menu/Menu";
import { 
  Stack, 
  Title, 
  Container, 
  Text, 
  Image, 
  Center, 
  Button, 
  Modal, 
  UnstyledButton 
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks"; // Hook para controlar o modal

export default function Page() {
  // Controle do estado do Modal
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Modal que será exibido ao clicar na imagem */}
      <Modal 
        opened={opened} 
        onClose={close} 
        size="70%" // Tamanho grande para facilitar a leitura
        centered 
        title="Jornal Estado de Minas - Matéria Completa"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Image 
          src="/JornalEstadoMinas.jpeg" 
          alt="Matéria ampliada" 
          w="100%" 
          h="auto" 
        />
      </Modal>

      <HeaderSimple />
      
      <div className="bg-vc26-blue py-5">
        <Container size="xl">
          <h2 className="text-white">Notícias VERdeCINE</h2>
        </Container>
      </div>

      <Container size="lg" className="py-1">
        <Text></Text>
      </Container>

      <section className=" py-16" id="mapa14-03-26">
        <Container size="lg">
          
          {/* SEÇÃO MAPA (Sem alteração) */}
          <div className="grid sm:grid-cols-3 mb-8">
            <div className="flex justify-center">
              <Image
                className="object-contain"
                src="/mapa2026.jpeg"
                width="284"
                height="284"
                alt="Mapa Brasileiro de Educação Midiática"
              />
            </div>
            <div className="col-span-2 sm:p-8 flex flex-col justify-center">
              <h4 className="leading-tight ">Mapa Brasileiro de Educação Midiática </h4>
              <span className="block mb-5">
                <p>O Mapa Brasileiro da Educação Midiática foi 
                  produzido a partir de um amplo mapeamento realizado em 2024 com o apoio da Unesco,
                  e elaborado a partir da parceria entre a Secom PR e a Agência Porvir, com o apoio 
                  da Embaixada do Reino Unido. Nele estão reunidas iniciativas de todo o país que 
                  promovem o desenvolvimento de competências midiáticas e informacionais.</p>
              </span>
              <Button
                 size="lg"
                className="mt-5"
                variant="white"
                component="a"
                href="https://www.gov.br/secom/pt-br/assuntos/educacao-midiatica/mapa/todas-as-fichas/verdecine-festival-socioambiental-de-filmes"
              >
                Clique aqui para ver a publicação completa
              </Button>
            </div>
          </div>

          {/* SEÇÃO JORNAL (Com efeito de ampliação) */}
          <div className="grid sm:grid-cols-3">
            <div className="col-span-2 order-2 sm:order-1 sm:p-8 flex flex-col justify-center">
              <h4 className="leading-tight">Jornal Estado de Minas </h4>
              <span className="block mb-5">
                <span className="text-1xl opacity-75">Pagina da cultura</span>
              </span>
              <p>
                O Festival Verdecine foi notícia no Jornal Estado de Minas no dia 05/03/2026
              </p>
            </div>
            
            <div className="flex justify-center sm:order-2">
              {/* Envolvemos a imagem com um botão invisível para disparar o Modal */}
              <UnstyledButton onClick={open} style={{ cursor: 'zoom-in' }}>
                <Stack align="center" gap={5}>
                  <Image
                    className="object-contain"
                    src="/JornalEstadoMinas.jpeg"
                    width="284"
                    height="284"
                    alt="Jornal Estado de Minas"
                  />
                  <Text className="font-bold p-0 m-0" size="xs" c="dimmed">Clique para ler a matéria</Text>
                </Stack>
              </UnstyledButton>
            </div>                      
          </div>
          
        </Container>
      </section>

      <Footer25 />
    </>
  );
}
