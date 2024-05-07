import { useContext } from "react";
import "./App.css";
import { UserContext } from "./providers/user";
import RoutesMain from "./routes";
import ModalEditSenha from "./components/ModalEditSenha";

function App() {

  const {
    editSenha
  } = useContext(UserContext)

  return (
    <div className="App">
      {!!editSenha && <ModalEditSenha/>}
      <RoutesMain />
    </div>
  );
}

export default App;
