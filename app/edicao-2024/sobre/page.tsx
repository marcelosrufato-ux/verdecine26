"use client";

import Image from "next/image";

import {
  Anchor,
  Container,
  NavLink,
  Slider,
  Text,
  UnstyledButton,
  Button,
  Box,
  Center,
  Grid,
  GridCol,
  Tabs,
} from "@mantine/core";

import { Footer, Header } from "../../components";

const Sobre = () => {
  return (
    <>
      <Header className="border border-[#0000002b]" title="Sobre" />

      <main>
        <section className="pb-8 border-b border-b-[#00000044]">
          <Container size={"xl"}>
            <h4 className="">História</h4>
            <p className="text-vc-green">
              Desde o seu surgimento, em 2022, o VERdeCINE - Festival
              Socioambiental de filmes vem construindo parcerias sólidas visando
              desenvolver ações pela cidade de Lavras/MG. Com exibições de
              filmes seguido de bate papo o VERdeCINE expande conhecimentos e
              dialoga com escolas, projetos sociais e comunidades locais além de
              colaborar com o movimento Amazônia de pé em suas ações.
            </p>
            <h4>2024</h4>
            <p className="text-vc-green">
              Em junho de 2024, na semana do meio ambiente, será a primeira
              edição do VERdeCINE como um festival socioambiental de filmes, na
              praça central da cidade. Como parte integrante do festival, a
              oficina de documentário “da ideia a realização”, proporciona aos
              seus participantes, ferramentas audiovisuais para o
              desenvolvimento de uma visão particular no debate socioambiental.
              As escolas da rede municipal também tem lugar especial no
              VERdeCINE com dois dias de sessão exclusiva no cinema local. Serão
              exibidos 04 filmes cuidadosamente pensados e selecionados, que
              trazem em seus conteúdos representatividade e estimulam a pensar
              nossa relação com o planeta. Durante os dias do festival, nos
              intervalos dos filmes vamos ter espetáculo de circo com
              instrumentos recicláveis, forro pé de serra e pré-lançamento do
              livro “O catador” de Evaldo Garcia com a presença do autor. Todas
              e todos, artistas locais que foram selecionados através da
              abertura de inscrição. A feria de produtos sustentáveis fica
              aberta durante toda a programação para inspirar transformações
              positivas e expor que Lavras tem gente que produz cuidando do
              planeta.
            </p>
            <h4>CURADORIA</h4>
            <p className="text-vc-green">
              Para a edição de 2024, o eixo curatorial está inspirado no segundo
              objetivo da agenda de 2030 “Fome zero e agricultura sustentável”
              tendo recebido em sua primeira edição 150 filmes inscritos. Foram
              selecionados 18 filmes de várias partes do Brasil, de vários
              formatos e duração que abordam o tema diretamente ou de forma
              transversal. Com a intenção de inspirar e promover transformações
              necessárias na nossa sociedade, a curadoria selecionou filmes para
              estimular diálogos após cada sessão e ampliar o repertorio
              audiovisual do público, oferecendo a oportunidade de assistir
              obras brasileiras relevantes, diferenciadas e de difícil acesso.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
