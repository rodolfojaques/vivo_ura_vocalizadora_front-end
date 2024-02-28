import AssociacaoProvider from "./associacao";
import AssociacaoTemsProvider from "./associacaoTems";
import GrupoAtuacaoProvider from "./gruposAtuacao";
import ListaDeAlarmesProvider from "./listaDeAlarmes";
import ListaDeAlarmesTemsProvider from "./listaDeAlarmesTems";
import UserProvider from "./user";

function Providers({ children }) {
  return (
    <UserProvider>
      <GrupoAtuacaoProvider>
        <AssociacaoProvider>
          <AssociacaoTemsProvider>
            <ListaDeAlarmesTemsProvider>
              <ListaDeAlarmesProvider>{children}</ListaDeAlarmesProvider>
            </ListaDeAlarmesTemsProvider>            
          </AssociacaoTemsProvider>          
        </AssociacaoProvider>
      </GrupoAtuacaoProvider>
    </UserProvider>
  );
}

export default Providers;
