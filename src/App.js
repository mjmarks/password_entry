/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Password from "./components/password/Password";

const appStyles = {
  header: css`
    align-items: center;
    border-bottom: 1px solid black;
    display: flex;
    font-weight: 500;
    height: 15vh;
    justify-content: center;
    letter-spacing: 2px;
    width: 100vw;
  `,
  main: css`
    align-items: center;
    display: flex;
    height: 85vh;
    justify-content: center;
    width: 100vw;
  `,
};

function App() {
  return (
    <>
      <header css={appStyles.header}>
        <h1>PASSWORD ENTRY</h1>
      </header>
      <main css={appStyles.main}>
        <Password />
      </main>
    </>
  );
}

export default App;
