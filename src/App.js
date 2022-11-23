import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastro from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState(1);
  function irPara(tela) {
    setTela(tela);
  }
  switch (tela) {
    case 1:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaLogin irPara={irPara} />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaCadastro irPara={irPara} />
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaUsuarioCadastro irPara={irPara} />
        </MainContainer>
      );
    default:
      return "Pagina não encontrada";
  }

  // const [mudarTela, setMudarTela] = useState(3);
  // function irPara(tela) {
  //   setMudarTela(tela);
  // }
  // if (mudarTela === 1) {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaLogin irPara={irPara} />
  //     </MainContainer>
  //   );
  // } else {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaCadastro irPara={irPara} />
  //     </MainContainer>
  //   );
  // }
}

export default App;
