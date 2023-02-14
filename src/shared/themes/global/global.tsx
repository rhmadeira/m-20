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
      *::-webkit-scrollbar {
        width: 1px;
      }
      *::-webkit-scrollbar-track {
        background: #d7d9da;
      }
      *::-webkit-scrollbar-thumb {
        background-color: #006c5b;
        border-radius: 20px;
      }
      * {
        box-sizing: border-box;
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

      .animeLeft {
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft 0.3s forwards;
      }

      @keyframes animeLeft {
        to {
          opacity: 1;
          transform: initial;
        }
      }
    `}
  />
);
