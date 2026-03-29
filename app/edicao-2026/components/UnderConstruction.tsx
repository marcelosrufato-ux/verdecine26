"use client";
import "../globals.css";
import "../globalv2-26.css";
import { Container, Button } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRef } from "react";

export default function UnderConstruction() {
  const ref = useRef(null);

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <header className="p-4 flex justify-end bg-slate-50">
        <Link href="edicao-2024">
          <Button
            className="bg-vc26-blue-light text-vc26-blue hover:bg-vc26-blue-light hover:text-vc26-blue hover:bg-opacity-85"
            variant="subtle"
          >
            Edição 2024
          </Button>
        </Link>
      </header>
      <main className="bg-slate-50 h-[calc(100vh-68px)] flex justify-center items-center   ">
        <Container>
          <div className="flex flex-col items-center">
            <h2 className="text-v25 text-vc26-blue">Vem aí o</h2>
            <h2 className="text-v25 text-vc26-blue text-9xl">
              VER<span className="text-7xl">de</span>CINE
            </h2>
            <p>
              A edição 2025 promove diálogo sobre cidades mais sustentáveis
              guiada pelo objetivo 11* da agenda de 2030
            </p>
            <Link
              href="./EDITAL - VERDECINE - 2025.pdf"
              target="_blank"
              download
            >
              <Button
                className="bg-vc26-blue-light text-vc26-blue hover:bg-vc26-blue-light hover:text-vc26-blue hover:bg-opacity-85"
                variant="subtle"
              >
                Baixar o edital
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}
