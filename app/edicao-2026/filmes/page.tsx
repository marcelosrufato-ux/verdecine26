"use client";
import { FilmsGrid } from "../components/FilmsGrid";
import data from "./data.json";
import "../globalv2.css";
import "../globalv3.css";
import { Container } from "@mantine/core";
import { HeaderSimple } from "../components/Menu/Menu";
import Footer25 from "../components/Footer26";

export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc25-green py-5">
        <Container size="xl">
          <h2 className="text-white">Filmes edição 2026</h2>
        </Container>
      </div>
      <Container size="xl" className="my-14">
        <FilmsGrid films={data.films} />
      </Container>
      <Footer25 />
    </>
  );
}
