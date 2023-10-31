import AssociacaoProvider from "./associacao";
import GrupoAtuacaoProvider from "./gruposAtuacao";
import ListaDeAlarmesProvider from "./listaDeAlarmes";
import UserProvider from "./user";

function Providers({ children }) {
  return (
    <UserProvider>
      <GrupoAtuacaoProvider>
        <AssociacaoProvider>
          <ListaDeAlarmesProvider>{children}</ListaDeAlarmesProvider>
        </AssociacaoProvider>
      </GrupoAtuacaoProvider>
    </UserProvider>
  );
}

export default Providers;
