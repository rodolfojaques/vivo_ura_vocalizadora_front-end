import { ListaDLStl } from "./styles";

function ListaDL({children}){
    return (
        <ListaDLStl>
            <input type="text" className="pesquisa_dl" placeholder="Pesquisar..." />
            <h3 className="str_grup_dl">Grupos <span className="dl">DL-TEMS</span></h3>
            <ul className="list_grupos_dl">{children}</ul> 
        </ListaDLStl>
    )
}

export default ListaDL