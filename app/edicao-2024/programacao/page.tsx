"use client";
import { Footer, Header, Tab } from "../../components";
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
