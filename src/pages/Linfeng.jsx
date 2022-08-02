import React, { useState } from "react"
import { Box, Paper, Stack, Item } from "@mui/material"
import "./linfeng.css"
import AppBar from "@mui/material/AppBar"

import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { styled } from "@mui/material/styles"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import NightlifeIcon from "@mui/icons-material/Nightlife"
import TerminalIcon from "@mui/icons-material/Terminal"

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
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Linfeng's page
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <div style={{ display: "flex", flexdirection: "row" }}>
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
