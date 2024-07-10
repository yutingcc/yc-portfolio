"use client";

import Projects from "@/components/projects";
import Portfolio from "@/components/portfolio";
import { ThemeProvider } from "@mui/material";
import { ProjectTheme } from "./projectTheme";

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
