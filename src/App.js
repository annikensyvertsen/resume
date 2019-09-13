import React, { useState } from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Grid } from "./styles/grid";
import styled from "styled-components";
import { backgroundColor } from "./styles/theme";

const App = () => {
  const [page, setPage] = useState();
  return (
    <div>
      <heading>
        <Header setPage={setPage} page={page} />
      </heading>
      <GridWrapper>
        <MainContent>
          <Content page={page} />
        </MainContent>
      </GridWrapper>
    </div>
  );
};

const GridWrapper = styled(Grid)`
  background-color: ${backgroundColor};
  grid-template-areas: "left content right";
  grid-template-columns: 1fr 4fr 1fr;
  min-height: 95vh;
`;

const MainContent = styled.div`
  background-color: ${backgroundColor};
  grid-area: content;
`;

export default App;
