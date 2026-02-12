import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#f2f8f1",
  "#e4eee3",
  "#c5dcc2",
  "#a3c99f",
  "#86b981",
  "#74af6d",
  "#6aab63",
  "#599552",
  "#4d8548",
  "#386634",
];
export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryShade: 9,
  fontFamily: "Bahnschrift, sans-serif",
  primaryColor: "myColor",
});
