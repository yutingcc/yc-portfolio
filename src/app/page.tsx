"use client";

import Projects from "@/components/projects";
import Portfolio from "@/components/portfolio";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

const ProjectTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <Portfolio />
        <Projects />
      </ThemeProvider>
    </main>
  );
}
