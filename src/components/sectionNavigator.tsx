import { Box, setRef } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SectionNavigator(props: { sections: string[] }) {
    const [yPosition, setYPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setYPosition(scrollY);
        console.log("Y Scroll Position:", scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "60px",
          left: "30px",
          zIndex: 999,
        }}
      >
        {yPosition > 325 ? (
          <Box>
            {props.sections.map((section, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <Box
                  key={section}
                  sx={{
                    my: 3,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={`#${section}`}
                    style={{
                      color: isHovered ? "white" : "black",
                      textDecoration: "none",
                      border: `1.5px solid ${isHovered ? "black" : "black"}`,
                      borderRadius: "8px",
                      padding: "4px 8px",
                      backgroundColor: isHovered ? "black" : "transparent",
                      transition: "all 0.3s", // Smooth transitions for color changes
                    }}
                  >
                    {section}
                  </Link>
                </Box>
              );
            })}
          </Box>
        ) : null}
      </Box>
    );
  }


  // export default function SectionNavigator(props: { sections: string[] }) {
//   const [yPosition, setYPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       setYPosition(scrollY);
//       console.log("Y Scroll Position:", scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         position: "fixed",
//         bottom: "60px",
//         left: "30px",
//         zIndex: 999,
//       }}
//     >
//       {yPosition > 325 ? (
//         <Box>
//           {props.sections.map((section) => {
//             return (
//               <Box key={section} sx={{ my: 3 }}>
//                 <Link href={`#${section}`} style={{ color: "black", textDecoration: "none", border: "1.5px solid black", 
//              borderRadius: "8px", padding: "4px 8px"  }}>
//                   {section}
//                 </Link>
//               </Box>
//             );
//           })}
//         </Box>
//       ) : null}
//     </Box>
//   );
// }