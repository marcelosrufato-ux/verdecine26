"use client";
import { Card, Container, Grid, GridCol, Modal, Tooltip } from "@mantine/core";
import Footer25 from "../../edicao-2025/components/Footer25";
import {Header} from "../../edicao-2025/components/Header";
import { useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
import { useDisclosure } from "@mantine/hooks";
import dynamic from "next/dynamic";
import Image from "next/image";

import { IconBadgeCc, IconPlayerPlay } from "@tabler/icons-react";

const filmes = [
  {
    id: 1,
    title: "A Chuva do caju / 07 de junho / 17h50",
    image: "/a-chuva-de-caju.png",
    description: "20 minutos | GO",
    url: "https://youtu.be/giOL2IqFzT4",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse: `Sinopse: No coração de um vale escondido nas profundezas do Brasil central, Seu Alvino e Dona Neusa plantam e colhem o que a terra dá, como o cajuzinho do cerrado e o baru. Após mais de dois séculos, o tempo continua passando lento no quilombo Vão de Almas, apesar da seca cada vez mais severa`,
    fichaTecnica: `Direção: Alan Schvarsberg/Produtor:Gustavo Amora/Diretor de Fotografia:Alan Schvarsberg/ Produtora Executiva:Juliana Melo/Roteiro: Alice Riff/Produção de pós:Gustavo Amora/Pesquisa:Gustavo Amora e Alan Schvarsberg/Personagens:Neuza Fernandes da Cunha, Alvino Cesario, Algemiro Dias Pombo, Jaci dos Santos,Ildecy dos Santos/Still: Gustavo Amora/ Assistente de Produção: Pedro Henrique Pereira e Bethania Maia/ Assistente de câmera: Rodrigo Rangel/ Técnico de som: Luiza Chagas/ Controller: Bruna Lopes/Montador e Colorista
Caio Mazzilli/ Assistência de Montagem:Francisco Mendes e Mateus Albino/ Trilha Sonora: Samuel Mota/ Edição de Diálogos: Flávia Wolfart /Edição de Efeitos: Luciano Komirchuk/Desenho de Som e Mixagem: Vitor Moraes/ Assessoria Jurídica: Sales e Medeiros Advogados/ Consultoria Executiva
Vanessa Medrado/ Assistente de Produção Executiva: João Gabriel Castro/Assistente de Direção
Letícia Ximenes
`,
  },
  {
    id: 2,
    title: "Águas Turvas / 08 de junho / 20h15",
    image: "/aguas-turvas.png",
    description: "7 minutos | RJ",
    url: "https://youtu.be/r0Hfbr0rV5I",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Localizada na famosa Baía de Guanabara, a Z10 é uma das mais antigas e tradicionais colônias de pesca do país. Neste documentário, acompanhamos a história de Zezinho, um pescador desta comunidade histórica, cuja vida é drasticamente alterada pela crescente poluição marinha. Com a diminuição dos peixes, Zezinho e seus colegas enfrentam uma crise de sustento e identidade. Numa reviravolta inspiradora, eles reinventam suas práticas, transformando-se de pescadores em guardiões do oceano. Ao 'pescarem' lixo, não apenas encontram um novo meio de subsistência, mas também emergem como figuras centrais na luta pela preservação ambiental. Este curta-metragem é uma jornada visual e emocional, destacando a resiliência humana diante de adversidades ambientais, e a capacidade da comunidade de encontrar soluções criativas para problemas globais.",
    fichaTecnica:
      "Direção: Kleber Leão e Gabriel Panazio/Produção: Winola Tavares e Fran Camparoni/Direção de fotografia: Gabriel Panazio e Lucas Badini/Edição: Lufe Berto/Som: Julio Oliveira/Assistente de produção: Alexandre Tinoco/ Assistente de câmera: Bernardo Dutra",
  },
  {
    id: 3,
    title: "Antes do prato / 06 e 08 de junho / 19h50 e 19h",
    image: "/antes-do-prato.png",
    description: "53 minutos | SP",
    url: "https://youtu.be/5JuixoiuF24",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: O documentário Antes do Prato conta a história de quatro experiências em agroecologia, a partir das vivências de quem protagoniza a produção e o acesso a alimentos saudáveis enquanto preserva a natureza. Percorremos três regiões do Brasil para registrar os conhecimentos, práticas e modos de vida de indivíduos e comunidades envolvidos com um modelo de produção socialmente justo, livre de agrotóxicos e baseado nas relações de cuidado e respeito.",
    fichaTecnica: `DIREÇÃO:Carol Quintanilha/PRODUÇÃO EXECUTIVA:Juliana Borges/ARGUMENTO
Adriana Charoux,Bernardo Camara,Carol Quintanilha e Marina Lacôrte/ROTEIRO E DIREÇÃO DE FOTOGRAFIA: Carol Quintanilha/MONTAGEM:André Finotti/PESQUISA
Camila Camargo e Pamela Gopi/COLABORAÇÃO DE ROTEIRO:Adriana Charoux, Bernardo Camara, Marina Lacôrte/SOM DIRETO:Juliana Santana/TRILHA SONORA ORIGINAL: Andriana Biacolini, Henrique Manchuria e Silvanny Sivuca/MIXAGEM DE SOM: Guilherme Malavasi/APOIO EDITORIAL:Elisabetta Recine, Potira Preiss e Ação Coletiva Comida de Verdade
`,
  },
  {
    id: 4,
    title: "Cabeça de fogo/ 08 e  09 de junho /21h30 e  20h30",
    image: "/cabeca-de-fogo.png",
    description: "10 minutos | GO",
    url: "https://youtu.be/VvArHUg6vZI",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse:Diante de um cerrado cada dia mais degradado, Marta Narciso, que vive na Serra dos Pireneus, semeia palavras que nos convocam a uma conexão harmoniosa com a natureza, entendendo seus sistemas, sons, cheiros e formas.",
    fichaTecnica:
      "Direção: Lidiana Reis /Direção de fotografia: Marcello Dantas e Rodrigo Rangel /Montagem: Larissa Corino /Elenco: Marta Narciso ",
  },
  {
    id: 5,
    title: "Cadim / 09 de junho / 20h30",
    image: "/cadim.png",
    description: "6 minutos | SP",
    url: "https://youtu.be/KA6t3Oc-cxM",
    audioDescricao: true,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse:Em meio a terras áridas e destruídas, Seu Zé caminha carregando seu pássaro Chico em uma frágil gaiola. Pouco depois de se estabelecer em um terreno saudável, tiros vindos de fazendeiros obrigam o andarilho a fugir, sem perceber que o pássaro havia sumido. Seu Zé, então, deve continuar sua jornada e reencontrar Chico, de quem tanto sente falta.",
    fichaTecnica: `Direção (Director) Luiza Pugliesi Villaça/Roteiro (Screenplay) Luiza Pugliesi Villaça/Produção Executiva (Executive Production) Laura Orefice Folkmann e Luana Carlquist/Montagem (Editing)        Luiza Pugliesi Villaça/Som (Sound) Luiza Pugliesi Villaça e Fernanda Moreno/Trilha Sonora (Music)        Pedro Fonseca/Edição e Mixagem de Som (Sound Design) Gabriel Terra e Pedro Fonseca/Foley      Fernanda Moreno/Arte (Art Direction) Luiza Pugliesi Villaça e Fernanda Moreno/Direção de Animação (Animation)Mariana Tartaroti Shishito/Cenografia 2D (2D Scenarios) Luiza Pugliesi Villaça, Laura Orefice Folkmann, Mariana Tartaroti Shishito, Fernanda Moreno, Jacqueline Chloé Osuna Delgado/Cenografia 3D (3D Scenarios)Fernanda Moreno/Design de Personagens (Character Design)        Luiza Pugliesi Villaça/Storyboard e Animatic Luiza Pugliesi Villaça e Mariana Tartaroti Shishito/Edição Gráfica (Graphic Edition) Luiza Pugliesi Villaça e Mariana Tartaroti Shishito/Elenco (Cast)Beatriz Pugliesi Villaça e Carolina Tartaroti ShishitoD`,
  },
  {
    id: 6,
    title: "Comida de quintal / 07 e 08 de junho /19h50 e 20h50",
    image: "/comida-de-quintal.png",
    description: "17 minutos | MG",
    url: "https://youtu.be/i0A0bokziss",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse:Comida de Quintal é um filme curta metragem, ensaio visual sinestésico que nos convida a conhecer Maria, Vera e Wanusa, que têm em comum o fato de manterem seus quintais urbanos produtivos, uma forma de resistência no território verticalizado da cidade de Belo Horizonte. Ali, falam sobre as relações de afeto estabelecidas com a comida, sobre machismo e outras questões que perpassam o universo da cozinha.",
    fichaTecnica:
      "Direção, produção, texto e voz off: Luisa Macedo/Direção de fotografia: Ciro Thielmann/Edição: Nani Escobar/Trilha sonora original: Rafael Macedo/Som direto: Flora Guerra/Mixagem: Rafael Dutra/Assistência de câmera e still: Júlia Braga/Design de títulos: Letícia Naves",
  },
  {
    id: 7,
    title: "Cordão verde / 07 de junho / 18h20",
    image: "/cordao-verde.png",
    description: "30 minutos | RS",
    url: "https://youtu.be/CGOYqUUStcc",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: O filme Cordão Verde investiga a importância da produção de alimentos orgânicos nas cidades de Porto Alegre e Amsterdã. São mostrados o trabalho de produtores, feiras, lojas, escolas, especialistas da área e consumidores em ambos os países.",
    fichaTecnica: `Uma Produção da FLOW FILMES em Associação com pH7 Filmes
Com MAYARA BARROS LIMA,RAFAEL DE CASTRO HILÁRIO,CLARISSE CAVAZIN,GETULIO MACHADO,JUCA - ELISEU ROSA DA SILVA,YVONNE BOS,KASPER HOEX,JAAP VAN DER BOON,NANCY WILTINK,ADRIANA DORFMAN,ANA LIVIA,NEUSA CAMARGO,PAUL TERBRINK
NINA WELT,MARION AERTS,ROWIE RENSINK,IANSÃ SANTAREM,CLAUDIA TELLEGEN,JOSÉ YGOR SILVA PENA,FRANCISCO MILANEZ,DARCI CAMPANI,JULIANO FERREIRA DE SÁ,MARC SEIJLHOUWER,SIETSKE VAN 'T KRUIS,AGNES VISSERING/Roteiro e Direção:HOPI CHAPMAN e KARINE EMERICH/Argumento:HOPI CHAPMAN e ROBERTA DE PINHO SILVEIRA/Direção de Fotografia:DHINEY RAMOS e HOPI CHAPMAN/Entrevistas:KARINE EMERICH (Brasil) DHINEY RAMOS e HOPI CHAPMAN (Holanda)/Drone no Brasil: EDUARDO HÖRLLE CUBAS/Drone na Holanda:JORDY RUIJTER/Som Direto: RENATO ALMEIDA:Montagem e Finalização:HOPI CHAPMAN:Trilha Sonora:RISOMÁ CORDEIRO/Músicos:JONATHAN SANTOS (Violoncelo) e RISOMÁ CORDEIRO (Viola Caipira)/Diretor de Arte :CICERO DA SILVA FERREIRA/Produção
MARYANGELA FERNANDES FERREIRA,JASMIJN CHAPMA e JOB CHAJES/Imagens adicionais
KASPER HOEX e JORDY RUIJTER/Estúdio de Som:ESTÚDIO GAIA (RAFAEL PAVÃO)/Consultoria
MARYANGELA FERNANDES FERREIRA e NILSON LOPES
`,
  },
  {
    id: 8,
    title: "Dente / 06 de junho / 17h15",
    image: "/dente.png",
    description: "20 minutos | PE",
    url: "https://youtu.be/cUc7C4S5H9s",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse: Ana trabalha como diarista e é a única provedora do lar em que vive com os dois filhos e a neta.  A rotina pós trabalho dela é afetada quando quebra um dente.  Ana entra em um dilema entre ir ao dentista ou suprir as necessidades da sua família. ",
    fichaTecnica: `Elenco: Gheuza, Caroline Teodósio, Itioko Santiago, Eron Villar e Laís Medeiros. /Direção e Roteiro: Rita Luna/Produção e Direção de Produção: Tamy de Paula/Assistente de Produção: Joana Gabriela
Produção Executiva: Danielle Valentim e Maria Alencar/Assistente de Direção: Gabriel Coelho
Direção de Fotografia e Correção de Cor: Pedro Falcão/Assistente de Fotografia e Still: Eloá Nascimento/Iluminação e Elétrica: Lila e Alex M. Silva/Direção de Arte: Henrique Arruda
Contrarregra: Denis Souza/Figurino: Maria Helena Alcântara/Preparadora de Elenco: Simone Figueiredo/Direção de Som e Edição de Som: Priscila Nascimento/Som direto: Priscila Nascimento e Catarina/Logger e Montagem: Monik Rodrigues/Trilha: Pedro Black e Rogério Samico/Motoristas: Fernando Ramos e Bruno Ramos/Design: Antônio Melo
`,
  },
  {
    id: 9,
    title: "GRÃO / 06 de junho /  18h20",
    image: "/grao.png",
    description: "15 minutos | MT",
    url: "https://youtu.be/jeB5LgrCXL0",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Um olhar poético sobre a luta de famílias no estado do Mato Grosso, que resistem aos venenos, à truculência e ao poder do agronegócio com trabalho, força e fé.",
    fichaTecnica:
      "Roteiro, Direção e Montagem: Adriana Miranda/Produção Executiva: Carol Ribeiro/Produção: Nathasha Prado/Fotografia: Tota Paiva/Trilha: Flavia Tygel/Som Direto: Yuri Kopcak/Mixagem: Daniela Pastore/Drawings: Wagner Willian/Animation: Anderson B",
  },
  {
    id: 10,
    title: "O eco em mim / 07 e 09 de junho /  16h10 e 17h30",
    image: "/o-eco-em-mim.png",
    description: "72 minutos | SP",
    url: "https://youtu.be/6FL3rCZwqc0",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse: É possível - e extremamente necessário - transformar a nossa relação com o planeta, independente do local em que se viva. Essa é a mensagem que cinco mulheres de territórios e contextos completamente diferentes passam ao gravarem suas próprias rotinas, para transmitir ideais e compartilhar práticas sustentáveis que inspiram e engajam suas comunidades.",
    fichaTecnica: `Ficha técnica: Leandro Lima - Direção/Hygor Amorim - Co-direção/Leandro Lima - Roteiro/Maria Fernanda Lôbo -Pesquisa/Recy Cazarotto-Produção Executiva/Laís Veronese-Assistente de Produção de Executiva/Amanda Castro-Direção de Produção/Maria Fernanda Lôbo-Assistente de Produção/Cecília A. de Figueiredo-Estagiária de Produção/Oz Produtora-Direção de Fotografia/Murilo Morais Oliveira-Técnico de Captação de Imagem/Marco Sartori-Técnico de Captação de Som/Leandro Lima-Montagem/Vitor Mafra-Montagem/Ana Carolina Vedovato-Assistente de Montagem/Leandro Lima-Correção de Cor/Francis Fidélix-Motion Designer/Pedro Lima-Motion Designer/Julian J. Ludwig-Coordenação de Pós-Produção de Som/Jacarandá Áudio-Estúdio de Som/Rafael Thémes-Trilha Sonora/Robson Jack-Edição de Som/Robson Jack-Mixagem/Artlist
Banco de trilhas/Oz Produtora-Finalização/Francis Fidélix-Identidade Visual/Conecta Nuvem- Armazenamento em Nuvem/Prospecto Seguros-Seguro/Isabella Neumann-Assessoria Jurídica/Jacqueline Bernini-Controller/Lígia Rodriguez-Controller/Ana Carolina Pedro-Assistente de Controller/Cinema Verde-Consultoria Audiovisual/Fubá - Educação Ambiental-Consultoria Técnica-ETC Filmes-Acessibilidade, Tradução e Legendagem
`,
  },
  {
    id: 11,
    title:
      "O rio não vai mais correr quando você for embora / 09 de junho / 20h30 ",
    image: "/o-rio-nao-corre.png",
    description: "17 minutos | MT",
    url: "https://youtu.be/GTPXx52Zb9I",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Na cidade, o homem branco constrói a sua vida baseada na noção de propriedade privada, e isso também vale para a relação dele com a água. No entanto, o povo Chiquitano encara esta relação de um jeito bastante diferente.",
    fichaTecnica: `Direção: Felippy Damian/Roteiro: Felippy Damian e  Angela Coradini/Consultoria: Sebastião Arruda
Produção: Felippy Damian, Leandro Aranha e Sebastião Arruda/Direção de Fotografia: Marcus Aurélio Barros/Técnico de Som: Leandro Aranha/Montagem: Jonathan Cesar e Marcus Aurélio Barros/Finalização: Marcus Aurélio Barros/Elenco: Elena Laura Chue, Maria Auxiliadora Rup, Nicolau
Urupê Javiô, Florêncio Urupê Muquissai, Maria Siria Rup, Fernandes Moquissai, Saturnina
Urupe Chue, Silvano Chue Muquissai, Feliciana Maconho Paz Flores
`,
  },
  {
    id: 12,
    title: "O T-Rex e a pedra lascada / 09 de junho / 16h",
    image: "/o-trex.png",
    description: "17 minutos | ES",
    url: "https://youtu.be/ADajN0y8QUA",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: No Condado da Lua corre uma lenda antiga sobre um espírito guardião adormecido na raiz de uma árvore à beira do rio. Ganga, Tule e Dara descobrem uma forma de despertá-lo",
    fichaTecnica: `Roteiro, direção e produção:Luã Ériclis/Produtora Executiva:Beatriz Lindenberg/Diretor de fotografia: Ana Rezende/Técnica de som:Dayane Pinto/Equipe de produção:Adérito Tavares (Capineiro),CazaCon fotografia,Rhisley A. Damasceno,Vitória Damázio da Silva/Direção de arte: Itamar dos Anjos /Animação:Dedê Galdino/Produtora de set: Patricia Cortes/Assistente de câmera e fotógrafo still: Gustavo Louzada/Participações:NÚCLEO DE PROTAGONISTAS, Anali Maria Damázio, como Vó Nalha,Fernanda Vitória Damázio, como Dara,Geovana Damázio de Almeida,Luna Vitória de Almeida, como Ganga,Maitê Batista da Silva, como Tule,Maria das Graças Damázio, como Vó Graça/PARTICIPAÇÃO ESPECIAL Adérito Tavares, como Dino-Bumbá/A BANDA DE CONGO 
Eliseu Borges,Giurlan de Almeida,Igor Damázio,Marlon Carvalho da Silva,Messias Carvalho/AS LAVADEIRAS Adriana Rocha Damázio e Luciana Rocha Damázio /AS CRIANÇAS 
Adrian Batista da Silva,Ana Beatriz Firmino Neves,Clara Helena de Jesus Rodrigues Davi Lucas Damázio Geovana Damázio,Gregory Souza Lima Izabely dos Santos Rodrigues Jeany Souza Baptista,João Lucca de Almeida João Miguel José Piol Kyara Vitória Penha Contreiro Leandra dos Santos Rodrigues Moana Damázio, Nathan Jr. Damázio Ribeiro Patrick de Jesus Rodrigues, Rhyanna Bonifácio Damázio/ OS ADULTOS Ademir José Damázio Daniela Christye Souza Josielly Damázio da Silva Liliane Sonaira Penha Marlon Vieira Batista Paulo Cezar Penha de Almeida /Editora: Márcia Medeiros/Editora Assistente: Cintya Ferreira/Colorista:Lupércio Bogéa (EstudioLab)/Desenho de Som e Mixagem:Guile Martins/Artista de Foley:César Rodrigues Canindé/Abertura e Créditos:Silvana Andrade/Projeto Curta Vitória a Minas II/Realização/Empresa Produtora Instituto Marlin Azul.
`,
  },
  {
    id: 13,
    title: "Pensão alimentícia / 06 de junho / 17h30",
    image: "/pensao.png",
    description: "16 minutos | GO",
    url: "https://youtu.be/aYRbdbDZk6c",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Sônia, mulher de 38 anos, trabalha fazendo doces na Cidade de Goiás. Com duas filhas, uma de oito e outra de dois anos com problemas de saúde, tem que trabalhar em dupla jornada para tentar garantir os remédios e as necessidades básicas da família. Após tentativas jurídicas frustradas de receber a pensão de seu ex-marido, resolve tentar a solução por uma via não convencional.",
    fichaTecnica:
      "Direção e roteiro: Silvana Beline/Direção de fotografia: Matheus Amorim/Edição e Colorização: Matheus Amorim/Direção de som: Elder Patrick/Direção de arte: Mariane Beline/Direção de produção: Sinara de Sá/Assistente de fotografia: Felipe Mariano/Assistente de produção de arte: Lorrayne Dias da Silva/Assistente de direção: Bianca Gonçalves/Assistente de Direção de arte: Maiári Cruz Iasi/Figurino: Josi Campos/Still: Naira Rosana/Produção Executiva: Silvana Beline",
  },
  {
    id: 14,
    title: "Seu Adalto / 07 de junho / 19h10",
    image: "/adauto.png",
    description: "12 minutos | PE",
    url: "https://youtu.be/sv_n3W9ecls",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Seu Adauto convive com a urbanidade e seus problemas. Com quase um século de existência, ele acorda todas as manhãs para fazer a diferença.",
    fichaTecnica:
      "roteiro, direção, fotografia e montagem: Edvaldo Santos/produção e som direto: Éryka Vasconcelos/Trilha sonora original: Edson Pedro/Depoimentos: Seu Adauto e João Domingos",
  },
  {
    id: 15,
    title: "Terra que alimenta / 06 de junho / 18h50",
    image: "/terra.png",
    description: "15 minutos | SP",
    url: "https://www.youtube.com/shorts/YNwNC4LB33I",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: TERRA QUE ALIMENTA  é um minidocumentário que acompanha dona Maria Luíza e seu marido José, dois produtores rurais que há muito tempo trabalham apenas com o plantio de alimentos orgânicos no interior do Estado de São Paulo. O filme irá abordar diversos aspectos desse estilo de vida que, acima de tudo, resiste às mudanças violentas provocadas pelo agronegócio.",
    fichaTecnica:
      "Direção e edição: Junior Heitkoeter/Direção de fotografia: Débora Fernandes",
  },
  {
    id: 16,
    title: "Mestre de saberes da terra / 06 de junho / 18h50",
    image: "/mestres-de-saberes.png",
    description: "7 minutos | BA",
    url: "",
    audioDescricao: false,
    legendas: false,
    libras: false,
    sinopse: `Sinopse: O documentário "Mestres de Saberes da Terra" foi gravado na região de Ouro Preto - MG, nos distritos de Amarantina e Santo Antônio do Leite. Exalta a importância dos mais velhos como guardiões de saberes tradicionais ligados ao manejo da terra, abordando temas como as sementes crioulas, segurança e soberania alimentar. Exibe como o modelo exploratório capitalista ameaça a manutenção destas práticas geracionais e essenciais as comunidades que carregam os costumes rurais de forma intrínseca.`,
    fichaTecnica:
      "Mestres participantes:Expedito Alves de Almeida (Santo Antônio do Leite),Sebastião Marques de Oliveira (Santo Antônio do Leite),Helena de Freitas dos Santos (Amarantina),Marlene Gomes da Silva (Amarantina)/ Produção:Vellozia Filmes/ Direção:Emília Alcântara e Nayara Trevisani/Trilha Sonora:Yuri Lopes e Miguel Pezzuti",
  },
  {
    id: 19,
    title: "Maré braba / 09 de junho / 16h",
    image: "/mare-braba.png",
    description: "18 minutos | MG",
    url: "",
    audioDescricao: true,
    legendas: false,
    libras: false,
    sinopse:
      "Sinopse: Ela, que conecta a todos pelas suas águas, observa e opera as mudanças decorrentes do aquecimento global. O povo à beira-mar é o primeiro a sentir suas agitações e mudanças de humor. Ela sabe que os humanos estão se movendo para frear essas mudanças. Assim como ela sabe, que repetem uma antiga saga: alguns poucos prevalecendo sobre o grande restante, aprofundam os problemas criados por eles mesmos.",
    fichaTecnica:
      "Produção Executiva: Lívia de Paiva, Nayana Santos, Karleane Nogueira, Eudes Lira /Roteiro: Carla Vieira, Elena Meirelles, Lívia de Paiva, Romária Holanda, Pâmela Peregrino/ Consultoria para o roteiro: Cris Faustino, Soraya Vanini Tupinambá /Direção, Direção de Arte, Storyboard, Animação Recorte, Animação Stop Motion, Gravação Live Action: Pâmela Peregrino /Assistente de Direção: MAROON /Produção: Jhonatan Almeida e MAROON /Produção de imagem animada: Merat Produções Artísticas /Esqueletos: MAROON, Nay Moura /Bonecas: Ica Sousa /Cenografia, Recortes e Adereços: Evelyn Emi, Erlane Rosa, Filip Couto, Jhonatan Almeida, MAROON, Nay Moura, Pâmela Peregrino /Animação de Bordado: Erlane Rosa /Desenho de Som e Concepção de Trilha Sonora Original: Flávia Soledade /Instrumentistas: Flávia Soledade, Eric Barbosa /Edição e Mixagem de Som: Matheus Rocha, Eric Barbosa /Estúdio de gravação e mixagem sonora: Abrigo Plataforma Assistência Gravação Live Action: Gidalto Pereira Dias /Montagem: Thiago Fernando /Colorização: Guto Parente /Identidade Visual: Paula Soares /Realização: Instituto Terramar, GT Comunidades Costeiras, De Mãos Dadas Criamos Correnteza e Ìtàn: Cinema Negro de Animação /Apoio: Instituto PACS, Fórum Suape, União Europeia, Fundação Rosa Luxemburgo, Fundo Casa, PPM, SSPN",
  },
  {
    id: 17,
    title: "Águas Que Me Tocam / 09 de junho / 20h",
    image: "/aguas-que-tocam.jpeg",
    description: "17 minutos | RO",
    url: "",
    audioDescricao: false,
    legendas: true,
    libras: true,
    sinopse:
      "Sinopse: Rios da Amazônia são permeados de ritos de fé, sustento, ancestralidade e respeito. A voz das águas lança um alerta sobre o futuro do planeta.",
    fichaTecnica:
      "Direção e roteiro: Juraci Júnior / Produção: Val Barbosa / Produção Executiva: Juraci Júnior e Val Barbosa / Direção de Fotografia: Leandro Marques / Edição e finalização: Rone Mota, Igor Tchilian e Michele Saraiva / Trilha original: Mauro Araújo",
  },
  {
    id: 18,
    title:
      "Antes de chegar na sua mesa, passa pelas nossas mãos / 06 e 09 de junho / 16h e 21h",
    image: "/antes-de-chegar.png",
    description: "14 minutos | MG",
    url: "",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse: Real experiência, vivida e documentada por Erick Maximiano Oliveira (Cineasta e Ator). No ano de 2017, Erick acompanhou uma turma de trabalhadores rurais durante a colheita de café. Região montanhosa do Leste de Minas. O Filme conta um pouco do dia a dia dos trabalhadores, suas dificuldades, suas alegrias, sonhos, todos em busca de um lugar ao Sol. Com uma cinematografia simples, e uma linguagem atual.",
    fichaTecnica:
      "Direção, Fotografia e Edição: Erick Maximiano Oliveira / Produção Vanessa Azevedo",
  },
  {
    id: 21,
    title: "DOIS RIACHÕES: CACAU E LIBERDADE / 06 de junho / 16h20",
    image: "/maxresdefault.webp",
    description: "14 minutos | MG",
    url: "",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse: Os moradores do assentamento Dois Riachões, no sul da Bahia, viviam em situação análoga à escravidão, mas hoje conseguiram conquistar terra e liberdade através da produção de cacau. Em 2021 a comunidade lançou sua própria marca de chocolate.",
    fichaTecnica:
      "Direção: Fellipe Abreu, Patrícia Moll/Roteiro: Patrícia Moll/Direção de Fotografia: Fellipe Abreu/Direção de Produção: Fellipe Abreu e Patrícia Moll/Montagem: Vitor Pessoa/Pesquisa: Patrícia Moll/Trilha Sonora: Enrique Menezes/Finalização: Vitor Pessoa/Distribuição: Arapuá Filmes/Empresa Produtora: Margem Sul",
  },
  {
    id: 22,
    title: "Memórias de infância / 09 de junho / 16h50",
    image: "/memorias-da-infancia.png",
    description: "14 minutos | MG",
    url: "",
    audioDescricao: false,
    legendas: true,
    libras: false,
    sinopse:
      "Sinopse: Inspiradas pelo poema “Infância”, de Carlos Drummond de Andrade, crianças entrelaçam suas memórias mais delicadas como brincar na várzea com irmãos, cuidar de pintinhos, buscar a vaca no pasto ou tomar banho de rio de água limpa e cheia de peixes.",
    fichaTecnica:
      "Roteiro, direção e narração: Alunas e alunos EMEF Manuel Pereira Ramalho, Ribeirão Vermelho, MG/Projeto Animação Ambiental/Instituto Marlin Azul/Alunos: Adryan Henry da Cruz,Ana Clara, Seabra Valácio,Anna Beatriz Salatiel,Davi Marcelino da Silva,Enzo Henrique Costa,Henrique de Almeida Santos,João Eduardo Celestino,João Marcelo Ferreira,Kauã de Carvalho Oliveira,Kauã Henrique Gonçalves,Lara Aparecida Campos,Leandro José Rodrigues da Silva,Leonardo da Gama Valentim,Leandro Otávio Machado,Maria Fernanda Sebastião,Matheus Henrique de Oliveira,Vítor Hugo Carvalho,Willian Mikael de Castro,Henrique Emanuel da Silva,Vitor Silva/Orientação da oficina de animação: Analúcia Godoi/Professoras assistentes:Marinéia Anatório e Yvana Belchior/Montagem e Finalização: Analúcia Godoi e Gustavo Miaciro/Tratamento de Imagens: Analúcia Godoi/Trilha Sonora Original: Maestro e produtor Eduardo Lucas/Compositor: Igor Cowosque/Sound Designer:Bruno Hanstenreiter/Apoio Técnico:Nildo Neves/Redes Sociais: Silvana Andrade/Assessoria de Comunicação: Simony Leite Siqueira/Coordenação Administrativa: Patricia Cortes/Coordenação Geral:Beatriz Lindenberg/Patrocínio:Aliança Energia/ Realização: Projeto Animação Ambiental/Instituto Marlin Azul",
  },
];
const Filmes = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [url, setUrl] = useState("");
  const [ficha, setFicha] = useState("");
  const [title, settitle] = useState("Filmes");
  return (
    <>
      <Modal
        closeButtonProps={{ size: "xl" }}
        title={title}
        size={"xl"}
        className="h-full "
        opened={opened}
        onClose={close}
        fullScreen
      >
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-8 ">
            <ReactPlayer
              style={{ aspectRatio: "16 / 9" }}
              width={"100%"}
              height={"100%"}
              config={{
                youtube: {
                  playerVars: {
                    fs: 1,
                    playsinline: 0,
                    rel: 0,
                    controls: 1,
                  },
                },
              }}
              url={url}
            />
          </div>
          <div className="col-span-12 sm:col-span-4 p-4 bg-vc-green-light">
            <h2 className="text-vc-light">Ficha técnica</h2>
            <hr />
            <p className="text-vc-light my-3">{ficha}</p>
          </div>
        </div>
      </Modal>
      <Header className="border border-[#0000002b]" title="Filmes" />
      <Container size="xl">
        <Grid className="mb-8">
          {filmes.map((filme, index) => (
            <GridCol
              style={{
                clipPath:
                  "polygon(50% 0%, 92% 0, 100% 30%, 100% 50%, 100% 100%, 5% 100%, 0 80%, 0 0)",
              }}
              key={index}
              span={12}
              data-url={filme.url}
            >
              <Card
                className="cursor-pointer "
                onClick={() => {
                  setUrl(filme.url);
                  settitle(filme.title);
                  setFicha(filme.fichaTecnica);
                  if (filme.url) open();
                }}
                key={filme.title}
                id={`filme-${filme.id}`}
              >
                <Card.Section className="flex gap-6 sm:min-h-[225px] bg-vc-orange">
                  <div className="relative bg-black">
                    {filme.url && (
                      <button className="absolute scale-50 sm:scale-100 z-10 left-[50%] top-[50%] -translate-x-[50%]  -translate-y-[50%] bg-vc-light p-4 opacity-75">
                        <IconPlayerPlay size="35px" />
                      </button>
                    )}

                    <Image
                      src={filme.image}
                      width={400}
                      height={225}
                      className=" h-full w-[150px] sm:w-[400px] object-cover opacity-85 aspect-video"
                      alt={filme.title}
                    />
                  </div>
                  <div className="p-4 sm:p-12 max-w-[280px] sm:max-w-[50%]">
                    <h3 className="text-vc-light text-[.9em] sm:text-3xl">
                      {filme.title}
                      {filme.legendas && (
                        <Tooltip
                          arrowOffset={10}
                          arrowSize={4}
                          label="Legendagem descritiva"
                          withArrow
                          position="right"
                        >
                          <IconBadgeCc className="inline ml-2" />
                        </Tooltip>
                      )}

                      {filme.audioDescricao && (
                        <Tooltip
                          arrowOffset={10}
                          arrowSize={4}
                          label="Audiodescrição"
                          withArrow
                          position="top"
                        >
                          <Image
                            src="/audiodescricao.svg"
                            className="inline ml-2"
                            width={22}
                            height={22}
                            alt="Libras"
                          />
                        </Tooltip>
                      )}
                      {filme.libras && (
                        <Tooltip
                          arrowOffset={10}
                          arrowSize={4}
                          label="Acessível em libras"
                          withArrow
                          position="top"
                        >
                          <Image
                            src="/libras-logo.svg"
                            className="inline ml-2"
                            width={22}
                            height={22}
                            alt="Libras"
                          />
                        </Tooltip>
                      )}
                    </h3>
                    <p className="text-[.75em] sm:text-md">{filme.sinopse}</p>
                  </div>
                </Card.Section>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
      <hr className=" border-vc-orange" />
      <Footer />
    </>
  );
};
export default Filmes;
