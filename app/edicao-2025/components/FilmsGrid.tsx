// app/films/FilmsGrid.tsx
"use client";

import { useState } from "react";
import {
  Grid,
  Card,
  Text,
  Select,
  TextInput,
  Button,
  Modal,
  Tabs,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface Film {
  title: string;
  director: string;
  // duration: string;
  year: number;
  type: string;
  // accessibility?: string;
  synopsis: string;
  // technicalDetails?: string;
  trailer?: string;
}

export function FilmsGrid(filmsData: { films: Film[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>("all");
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const filteredFilms = filmsData.films.filter((film) => {
    const matchesSearch = film.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || film.type === selectedType;
    return matchesSearch && matchesType;
  });

  const extractYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handleLearnMore = (film: Film) => {
    setSelectedFilm(film);
    open();
  };

  const uniqueTypes = Array.from(
    new Set(filmsData.films.map((film) => film.type))
  ).map((type) => ({
    value: type,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));
  const typeOptions = [{ value: "all", label: "Todos" }, ...uniqueTypes];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <TextInput
          label="Pesquisar por título"
          placeholder="Digite o título do filme"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          style={{ flex: 1 }}
        />

        <Select
          label="Filtrar por gênero"
          placeholder="Selecione"
          data={typeOptions}
          value={selectedType}
          onChange={setSelectedType}
        />
      </div>

      <Grid>
        {filteredFilms.map((film) => (
          <Grid.Col key={film.title} span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text size="xl" fw={700} mb="sm">
                {film.title}
              </Text>

              {film.trailer && extractYoutubeId(film.trailer) && (
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${extractYoutubeId(
                    film.trailer
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              <Text mt="sm">
                <strong>Direção:</strong> {film.director}
              </Text>
              <Text>
                <strong>Ano:</strong> {film.year}
              </Text>
              <Text>
                <strong>Gênero:</strong> {film.type}
              </Text>
              {/* {film.accessibility && (
                <Text>
                  <strong>Acessibilidade:</strong> {film.accessibility}
                </Text>
              )} */}

              <Text mt="sm" size="sm">
                {truncateText(film.synopsis, 120)}
              </Text>

              <Button
                fullWidth
                mt="md"
                variant="light"
                onClick={() => handleLearnMore(film)}
              >
                Leia mais
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={close}
        title={selectedFilm?.title}
        size="xl"
        centered
      >
        {selectedFilm && (
          <div>
            <Text
              style={{
                whiteSpace: "pre-line",
                overflow: "auto",
                maxHeight: "400px",
              }}
            >
              {selectedFilm.synopsis}
            </Text>
          </div>
          // <Tabs defaultValue="sinopse">
          //   <Tabs.List>
          //     <Tabs.Tab value="sinopse">Sinopse</Tabs.Tab>
          //     <Tabs.Tab value="ficha">Ficha Técnica</Tabs.Tab>
          //   </Tabs.List>

          //   <Tabs.Panel value="sinopse" pt="xs">
          //     {/* <Text
          //       style={{
          //         whiteSpace: "pre-line",
          //         overflow: "auto",
          //         maxHeight: "400px",
          //       }}
          //     >
          //       {selectedFilm.synopsis}
          //     </Text> */}
          //   </Tabs.Panel>

          //   <Tabs.Panel value="ficha" pt="xs">
          //     {/* <Text
          //       style={{
          //         whiteSpace: "pre-line",
          //         overflow: "auto",
          //         maxHeight: "400px",
          //         fontFamily: "monospace",
          //       }}
          //     >
          //       {selectedFilm.technicalDetails.split("/").join("\n")}
          //     </Text> */}
          //   </Tabs.Panel>
          // </Tabs>
        )}
      </Modal>
    </div>
  );
}
