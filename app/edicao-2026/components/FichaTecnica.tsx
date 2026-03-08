"use client";

type Participante = {
  nome: string;
  funcoes: string[];
};

const fichaTecnica: Participante[] = [
  {
    nome: "CRISTIANE PEDERIVA",
    funcoes: ["produção executiva", "coordenação geral", "curadoria"],
  },
  {
    nome: "PEDRO MICHELLI",
    funcoes: ["coordenação geral", "curadoria", "vinheta"],
  },
  {
    nome: "MARIANA VALLIN",
    funcoes: ["Produção"],
  },
  { nome: "LUISA HELENA", funcoes: ["assistente de produção"] },
 
  { nome: "MARINA RUFATO", funcoes: ["design gráfico","mídias sociais"] },
  { nome: "MARCELO RUFATO", funcoes: ["site"] },
  { nome: "SILVA JUNIOR", funcoes: ["drone para vinheta"] },
  { nome: "MARCOS SOUZA", funcoes: ["registro fotografia e vídeo"] },
  { nome: "RODRIGO MARQUES", funcoes: ["tradução em libras"] },
  { nome: "LUZ COMUNICAÇÃO", funcoes: ["assessoria de imprensa"] },
  { nome: "EVALDO GARCIA", funcoes: ["gestão de resíduos"] },
  {
    nome: "MARA GUARRIEIRO/CONCEITO GRUPO CONTÁBIL",
    funcoes: ["contabilidade"],
  },

];

const groupFuncoes: Record<string, string[]> = {};

for (const item of fichaTecnica) {
  for (const funcao of item.funcoes) {
    if (!groupFuncoes[funcao]) {
      groupFuncoes[funcao] = [];
    }
    if (!groupFuncoes[funcao].includes(item.nome)) {
      groupFuncoes[funcao].push(item.nome);
    }
  }
}

export default function FichaTecnicaLista() {
  return (
    <ul className="space-y-2">
      {Object.entries(groupFuncoes).map(([funcao, nomes]) => (
        <li key={funcao} className="text-vc-light">
          <small className="opacity-70 capitalize">{funcao}:</small>{" "}
          {nomes.join(", ")}
        </li>
      ))}
    </ul>
  );
}
