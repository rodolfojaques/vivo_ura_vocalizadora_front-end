import GrupoAtuacaoProvider from "./gruposAtuacao";
import UserProvider from "./user";

function Providers({ children }) {
  return (
    <UserProvider>
      <GrupoAtuacaoProvider>{children}</GrupoAtuacaoProvider>
    </UserProvider>
  );
}

export default Providers;
