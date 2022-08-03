import React, { useState } from "react"
import { Box, Paper, Stack, Item } from "@mui/material"
import "./linfeng.css"

import Typography from "@mui/material/Typography"

import { styled } from "@mui/material/styles"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import NightlifeIcon from "@mui/icons-material/Nightlife"
import TerminalIcon from "@mui/icons-material/Terminal"
import { Helmet } from "react-helmet"
// import Loading from "../Loading/Loading"

export default function Linfeng() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))

  return (
    <>
      <div className="body">
        <Helmet>
          <style>{"body { background-color: #edf2f7; }"}</style>
        </Helmet>
        <Typography variant="h1" component="h1">
          👋Linfeng Chen👋
        </Typography>
        <Typography variant="h2" component="h1">
          Title: Software Engineer
        </Typography>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content">
            <Typography variant="h2" component="h2">
              Coding <TerminalIcon fontSize="large" />
              Skills
            </Typography>
            <Stack spacing={1}>
              <Item>JavaScirpt</Item>
              <Item>React</Item>
              <Item>CSS</Item>
            </Stack>
          </div>
          <div className="content">
            <Typography variant="h2" component="h2">
              Favorite <NightlifeIcon fontSize="large" /> DJ
            </Typography>
            <Stack spacing={1}>
              <Item>Avicii</Item>
              <Item>Martin Garrix</Item>
              <Item>Timmy Trumpet</Item>
            </Stack>
          </div>
          <div className="content">
            <Typography variant="h2" component="h2">
              Favorite <LunchDiningIcon fontSize="large" /> food
            </Typography>
            <Stack spacing={1}>
              <Item>Beef</Item>
              <Item>Pizza</Item>
              <Item>Chinese food</Item>
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}
