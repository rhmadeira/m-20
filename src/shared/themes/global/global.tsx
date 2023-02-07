import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        background: var(--green100);

        padding: 0;
        margin: 0;

        overflow-x: hidden;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body::-webkit-scrollbar {
        width: 4px;
      }
      body::-webkit-scrollbar-track {
        background: #03263a;
      }
      body::-webkit-scrollbar-thumb {
        background-color: var(--blue400);
        border-radius: 20px;
      }

      :root {
        --white: #f8f9fc;
        --black: #222222;

        --gray50: #e9eaed;
        --gray100: #dadada;
        --gray200: #85898e;

        --blue600: #03263a;
        --blue500: #0f334c;
        --blue400: #086aad;
        --blue300: #25759a;

        --green300: #007863;
        --green200: #00b495;
        --green100: #4fbfa5;

        --red400: #ff0000;
      }
      @keyframes loading {
        to {
          transform: rotate(1turn);
        }
      }
    `}
  />
);
