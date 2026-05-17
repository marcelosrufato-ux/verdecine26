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
    funcoes: ["produção"],
  },
  { nome: "LUIZA HELENA", funcoes: ["assistente de produção"] },
  {
    nome: "FERNANDA OMELCZUK / ISABELA COURA /BRUNA AZEVEDO/ LARISSA ANDRADE",
    funcoes: ["oficina de cinema na escola"],
  },
  { nome: "MARINA RUFATO", funcoes: ["design gráfico","mídias sociais"] },
  { nome: "MARCELO RUFATO", funcoes: ["site"] },
  { nome: "ERICK AZEVEDO DE SOUZA - oficinas cinema na escola", funcoes: ["foto cartaz"] },
  { nome: "LUZ COMUNICAÇÃO", funcoes: ["assessoria de imprensa"] },
  { nome: "CURTA LAVRAS", funcoes: ["registro fotografia e vídeo"] },
  { nome: "EVALDO GARCIA", funcoes: ["gestão de resíduos"] },
  {
    nome: "MARA GUARRIEIRO/CONCEITO GRUPO CONTÁBIL",
    funcoes: ["contabilidade"],
  },
  { nome: "GABRIEL ROQUINI", funcoes: ["Secretaria de Cultura de Lavras"] },
  { nome: "SOFIA MICHELLI PEDERIVA", funcoes: ["estagiária de coordenação geral"] },
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
        <li key={funcao} className="text-vc26-blue">
          <small className="opacity-70 capitalize">{funcao}:</small>{" "}
          {nomes.join(", ")}
        </li>
      ))}
    </ul>
  );
}
