'use client';

import { createTheme } from "@mui/material";

const ProjectTheme = createTheme({
    typography: {
        fontFamily: "Roboto",
      },
    palette: {
        background: {
            default: "#ffffff",  // 设置全局背景颜色为白色
        },
    },
    components:{
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "black"
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform:'none'
                }
            }
        }
    }
})

export { ProjectTheme };