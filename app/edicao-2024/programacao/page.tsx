"use client";
import Footer25 from "../../edicao-2025/components/Footer25";
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
      <Footer25 />
    </>
  );
};

export default Programacao;
