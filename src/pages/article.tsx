// "use client";

// import {
//   Box,
//   Container,
//   ThemeProvider,
//   Typography,
//   Grid,
//   Link,
// } from "@mui/material";
// import NavBar from "@/components/navBar";
// import "../assets/styles/main.scss";
// import { ProjectTheme } from "@/app/projectTheme";
// import SectionNavigator from "@/components/sectionNavigator";

// export default function Screen() {
//   const examples = [""];

//   return (
//     <main>
//       <ThemeProvider theme={ProjectTheme}>
//         <NavBar />

//           <Container
//             sx={{
//               marginTop: "6rem",
//               paddingBottom: "5rem",
//             }}
//             id="images"
//           >
//             <Grid container spacing={4}>

//             <Grid item xs={6}>
//                 <Typography variant="h4">Contextualised Reading Responses & Overview - Now is</Typography>
//               </Grid>

//             <Grid item xs={12}>
//                 <Typography variant="h5">
//                 <Link href="https://www.pdffiller.com/jsfiller-desk15/?isShareViaLink=1&requestHash=7d1bfe3bbc6016ce2c0cad278911ba5a672068867f6dc3857cc2d458a2073db7&lang=en&projectId=1452529435&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=false&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-socket-io=false&routeId=b0b1bf6328aedbdb0a247ecc11768cfa#e6eedc70c9ca42d3a007717b65c91775" color="inherit" underline="none">
//       Read
//     </Link>
//                 </Typography>
//               </Grid>

//               <Grid item xs={6}>
//                 <Typography variant="h4">Discuss Atmosphere in Art and Design Practices – From Human to AI</Typography>
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h5">
//                 <Link href="https://www.pdffiller.com/jsfiller-desk15/?isShareViaLink=1&requestHash=9373a084a6355de7697072b3203d4d3566d6c3cbe0683b4ade61764438467138&lang=en&projectId=1452531077&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=false&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-socket-io=false&routeId=543c5116d8b30c5c0eb589841509595a#651818327f014a57a3d1a6c26fe8a7f0" color="inherit" underline="none">
//                 Read
//     </Link>
//                 </Typography>
//               </Grid>

//             </Grid>
//           </Container>
//       </ThemeProvider>
//     </main>
//   );
// }

import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import NavBar from "@/components/navBar";
import "../assets/styles/main.scss";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";
import { useState } from "react";

export default function Screen() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    {
      title: "Contextualised Reading Responses & Overview - Now is",
      url: "https://pdf.ac/2V8h6l",
    },
    {
      title:
        "Discuss Atmosphere in Art and Design Practices – From Human to AI",
      url: "https://www.pdffiller.com/jsfiller-desk15/?isShareViaLink=1&requestHash=9373a084a6355de7697072b3203d4d3566d6c3cbe0683b4ade61764438467138&lang=en&projectId=1452531077&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=false&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-socket-io=false&routeId=543c5116d8b30c5c0eb589841509595a#651818327f014a57a3d1a6c26fe8a7f0",
    },
  ];

  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />

        <Container
          sx={{
            marginTop: "6rem",
            paddingBottom: "5rem",
          }}
          id="images"
        >
          <Grid container spacing={4}>
            {links.map((link, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="h4" marginBottom={"1rem"}>
                  {link.title}
                </Typography>
                <Typography variant="h5">
                  <Link
                    href={link.url}
                    style={{
                      color: hoveredIndex === index ? "white" : "black",
                      textDecoration: "none",
                      border: `1.5px solid ${
                        hoveredIndex === index ? "black" : "black"
                      }`,
                      borderRadius: "8px",
                      padding: "4px 8px",
                      backgroundColor:
                        hoveredIndex === index ? "black" : "transparent",
                      transition: "all 0.3s", // Smooth transitions for color changes
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    Read
                  </Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </main>
  );
}
