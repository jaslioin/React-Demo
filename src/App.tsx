import { MemoryRouter } from "react-router-dom";
import { Routers } from "./Routers";

import { Path } from "./constants/paths";

function App() {
  return (
    <div>
      <MemoryRouter initialEntries={Object.values(Path)} initialIndex={0}>
        <Routers />
      </MemoryRouter>
    </div>
  );
}

export default App;
