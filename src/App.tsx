import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Routers } from "./Routers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
