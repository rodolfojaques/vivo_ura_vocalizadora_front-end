import AssociacaoProvider from "./associacao";
import GrupoAtuacaoProvider from "./gruposAtuacao";
import UserProvider from "./user";

function Providers({ children }) {
  return (
    <UserProvider>
      <GrupoAtuacaoProvider>
        <AssociacaoProvider>{children}</AssociacaoProvider>
      </GrupoAtuacaoProvider>
    </UserProvider>
  );
}

export default Providers;
