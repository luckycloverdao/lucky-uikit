import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#b39781",
  primaryBright: "#b39781",
  primaryDark: "#b39781",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#3b4133",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#6e7b62",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#ffffff",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffffff",
  borderColor: "#E9EAEB",
  card: "#6e7b62",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
