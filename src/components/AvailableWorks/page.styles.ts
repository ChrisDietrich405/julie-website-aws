"use client";
import { styled } from "@mui/joy/styles";
import { Sheet } from "@mui/joy";

export const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.palette.text.secondary,
}));

export const ItemDynamic = styled(Sheet)(({ theme }) => ({
  margin: theme.spacing(2),
}));


