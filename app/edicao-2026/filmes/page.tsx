"use client";
import { FilmsGrid } from "../components/FilmsGrid";
import data from "./data.json";
import "../globalv2-26.css"; // Sobe 1 nível
import "../style-26.css"; // Sobe 1 nível
import { Container } from "@mantine/core";
import { HeaderSimple } from "../components/Menu/Menu";
import Footer25 from "../components/Footer26";

export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc26-blue-new py-5">
        <Container size="xl">
          <h2 className="text-white">Filmes edição 2026</h2>
        </Container>
      </div>
      <div className=" py-5">
        <Container size="xl">
          <h2 className="text-vc26-blue">Em breve programação completa</h2>
        </Container>
      </div>
      {/*<Container size="xl" className="my-14"> //libera a lista de filmes
        <FilmsGrid films={data.films} />
      </Container>*/}
      <Footer25 />
    </>
  );
}
