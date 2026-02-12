import { ClassAttributes, FC } from "react";
import { useRef } from "react";
import {
  Box,
  Burger,
  Container,
  Flex,
  Group,
  Drawer,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

import "./Header.module.css";
import cn from "classnames";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconMailbox,
} from "@tabler/icons-react";
import "../../globals.css";
interface HeaderProps {
  className?: string;
  title?: string;
}

export const Header: FC<HeaderProps> = ({ className, title }: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure();
  const [openedDrawer, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        className="bg-vc-green-light"
        size={"sm"}
        styles={{
          content: { backgroundColor: "#FCEDCE" },
          header: { backgroundColor: "#FCEDCE" },
        }}
        opened={openedDrawer}
        onClose={close}
        position="right"
        closeButtonProps={{
          size: "xl",
        }}
      >
        <Box className="p-6">
          <Group className="flex flex-col justify-start items-start ">
            <Box>
              <Link
                href="/edicao-2024/sobre"
                className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
              >
                Sobre
              </Link>
            </Box>
            <Box>
              <Link
                href="/edicao-2024/programacao"
                className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
              >
                Programação
              </Link>
            </Box>
            <Box>
              <Link
                href="/edicao-2024/filmes"
                className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
              >
                Filmes
              </Link>
            </Box>
            <Box>
              <Link
                href="/edicao-2024/quem-somos"
                className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
              >
                Quem Somos
              </Link>
            </Box>

            <Box>
              <Link
                href="/edicao-2024/contato"
                className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
              >
                Contato
              </Link>
            </Box>
            <Group>
              <Box>
                <Link
                  href="https://www.instagram.com/verdecine/"
                  className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                >
                  <IconBrandInstagram size={30} />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.youtube.com/@verdecine"
                  className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                >
                  <IconBrandYoutube size={30} />
                </Link>
              </Box>
            </Group>
          </Group>
        </Box>
      </Drawer>
      <header className={cn("py-3 absolute top-0 w-full z-50", className)}>
        <Container size="xl">
          <Flex justify="space-between" align="center" className="w-full">
            <Link href="/">
              <Image
                width={100}
                height={50}
                src="/logo.svg"
                alt="Logo VerdeCINE"
              />
            </Link>
            <Box>
              <Group className="collapse sm:visible">
                <Box>
                  <Link
                    href="/edicao-2024/sobre"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    Sobre
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/edicao-2024/programacao"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    Programação
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/edicao-2024/filmes"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    Filmes
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/edicao-2024/quem-somos"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    Quem Somos
                  </Link>
                </Box>

                <Box>
                  <Link
                    href="/edicao-2024/contato"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    Contato
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="https://www.instagram.com/verdecine/"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    <IconBrandInstagram size={30} />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="https://www.youtube.com/@verdecine"
                    className="font-semibold uppercase hover:opacity-80 text-vc-green-light"
                  >
                    <IconBrandYoutube size={30} />
                  </Link>
                </Box>
              </Group>
            </Box>
            <Burger
              className="sm:hidden"
              opened={opened}
              onClick={open}
              aria-label="Toggle navigation"
            />
          </Flex>
        </Container>
      </header>

      {title && (
        <Center className="relative h-80 sm-h-80 sm-min-h-[820px] sm:min-h-fit z-0">
          <h1 className="mt-[95px]">{title}</h1>
        </Center>
      )}
    </>
  );
};
