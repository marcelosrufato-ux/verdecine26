"use client";
import {Footer} from "../../edicao-2025/components/Footer";
import {Header} from "../../edicao-2025/components/Header";
import "./Programacao.module.css";
const Programacao = () => {
  return (
    <>
      <Header
        className="bg-vc-purpleborder border-[#0000002b]"
        title="Programação"
      />
      <section className="bg-vc-green">
        <Tab />
      </section>
      <Footer />
    </>
  );
};

export default Programacao;
