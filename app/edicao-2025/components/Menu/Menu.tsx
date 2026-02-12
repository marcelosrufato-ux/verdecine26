import { useState } from "react";
import {
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Menu,
  NavLink,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import logo from "../../../../public/logo.svg";
import classes from './HeaderSimple.module.css';
import Image from "next/image";
//import { link } from "fs";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href?: string;
  submenu?: Omit<MenuItem, "submenu">[];
  target?: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: "Filmes",
    href: "/edicao-2025/filmes",
  },
  {
    label: "Programação",
    href: "/edicao-2025/programacao",
  },

  {
    label: "Sobre",

    submenu: [
      {
        label: "O Festival",
        href: "/edicao-2025/sobre/o-festival",
      },
      {
        label: "Associação VERdeCINE",
        href: "/edicao-2025/sobre/associacao-verdecine",
      },
    ],
  },
  {
    label: "Histórico",

    submenu: [
      {
        label: "Edição 2024",
        href: "/edicao-2025/edicao-2024",
      },
      {
        label: "Outras edições",
        href: "/edicao-2025/historico",
      },
    ],
  },
  {
    label: "Contato",
    href: "#contato",
  },
];
export function HeaderSimple() {
  const matches = useMediaQuery("(min-width: 800px)");
  const [opened, { toggle, open, close }] = useDisclosure();
  return (
    <header className="py-4 border-b h-[100px] flex items-center ">
      <Container size="xl" className=" w-full">
        <Flex justify="space-between">
          <Group>
            <Link href="/">
              <Image
                className="hover:opacity-85"
                src={logo}
                alt="alt"
                width={80}
                height={100}
              />
            </Link>
          </Group>
          {matches && (
            <Group gap={2}>
              {menuItems &&
                menuItems.map((item) =>
                  !item.submenu ? (
                    <Button
                      key={item.href}
                      component="a"
                      href={item.href}
                      variant="subtle"
                    >
                      {item?.label}
                    </Button>
                  ) : (
                    <Menu trigger="hover" key={item.href}>
                      <Menu.Target>
                        <Button
                          component="a"
                          rightSection={<IconChevronDown size={15} />}
                          variant="subtle"
                        >
                          {item?.label}
                        </Button>
                      </Menu.Target>

                      <Menu.Dropdown>
                        {item.submenu.map((submenu) => (
                          <Menu.Item key={submenu.href}>
                            <Button
                              component="a"
                              href={submenu.href}
                              variant="transparent"
                            >
                              {submenu?.label}
                            </Button>
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    </Menu>
                  )
                )}
            </Group>
          )}
          {!matches && (
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
              />
              <Drawer
                opened={opened}
                onClose={close}
                position="bottom"
                withCloseButton={false}
                overlayProps={{ display: "none" }}
                size={"calc(100% - 100px)"}
                // styles={{ content: { background: "#3A6835" } }}
              >
                <Stack>
                  {menuItems &&
                    menuItems.map((item) =>
                      !item.submenu ? (
                        <NavLink
                          key={item.href}
                          component="a"
                          label={item?.label}
                          href={item.href}
                          variant="subtle"
                          styles={{
                            label: {
                              fontSize: "1.8rem",
                              fontWeight: "bold",
                              // color: "white",
                            },
                          }}
                        ></NavLink>
                      ) : (
                        <NavLink
                          label={item?.label}
                          variant="white"
                          component="a"
                          href="#"
                          className={classes.root}
                          key={item.href}
                          styles={{
                            label: {
                              fontSize: "1.8rem",
                              fontWeight: "bold",
                              // color: "white",
                            },
                            // chevron: { w: "2rem" },
                          }}
                        >
                          {/* <Menu.Target>
                            <Button
                              component="a"
                              rightSection={<IconChevronDown size={15} />}
                              variant="white"
                            >
                              {item?.label}
                            </Button>
                          </Menu.Target> */}

                          {item.submenu.map((submenu) => (
                            <NavLink
                              variant="subtle"
                              className="bg-white "
                              label={submenu?.label}
                              key={submenu.href}
                              href={submenu.href}
                              styles={{
                                label: {
                                  fontSize: "1.8rem",
                                  fontWeight: "bold",
                                  // color: "white",
                                },
                                // chevron: { fontSize: "1.8rem" },
                              }}
                            >
                              {/* <Button
                                component="a"
                                href={submenu.href}
                                variant="white"
                              >
                                {submenu?.label}
                              </Button> */}
                            </NavLink>
                          ))}
                        </NavLink>
                      )
                    )}
                </Stack>
              </Drawer>
            </Group>
          )}
        </Flex>
      </Container>
    </header>
  );
}
