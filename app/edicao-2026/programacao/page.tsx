"use client";
import { Container } from "@mantine/core";
import { HeaderSimple } from "../components/Menu/Menu";
import Programacao25 from "../components/Programacao/Programacao";
import "../globalv2.css";
import Footer25 from "../components/Footer25";
export default function Page() {
  return (
    <>
      <HeaderSimple />
      <div className="bg-vc25-green py-5">
        <Container size="xl">
          <h2 className="text-white">Programação</h2>
        </Container>
      </div>
      <Container size="xl" className="my-14">
        <Programacao25 />
      </Container>
      <Footer25 />
    </>
  );
}
