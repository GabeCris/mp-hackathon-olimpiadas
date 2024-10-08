import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const { colors, breakpoints } = theme;

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;

        &::-webkit-scrollbar{
        width: 3px;
        height: 3px;
        }
        
        &::-webkit-scrollbar-track{
            background-color: ${colors.gray};
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: ${colors.graphite};
            border-radius: 6px;
        }
    }

    p,
    span,
    h1, 
    h2, 
    label,
    input,
    div,
    button{
        font: 500 14px "DM Sans", sans-serif;
    }

    body{
        background: ${colors.light_gray};
        min-height: 100vh;

        @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
            max-height: 100vh;
        }
    }

    .frame{
        max-width: 600px;
        margin-inline: auto;

        .range1{
            top: 0;
            left: 32px;
        }

        .range2{
            bottom: 0;
            right: 32px;
        }

        .qrcode{
            left: 32px;
            bottom: 32px;
        }

        .range1,
        .range2,
        .qrcode{
            position: fixed;
            display: none;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
            margin-block: 16px;

            .range1,
            .range2,
            .qrcode{
                display: block;
            }
        }
    }
`;
