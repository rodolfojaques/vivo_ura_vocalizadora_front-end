import { ModalExcludeStl } from "./styles";

function ModalExcludeGruposComponent({grupo, openModalExclude, setOpenModalExclude, deleteOnClick}){
    return (
        <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
                Você tem certeza que deseja excluir<br></br>
                o grupo <span className="nome_grupo"> {grupo.nomeGrupo}</span>?
            </p>
            <div className="btns">
                <button onClick={()=> setOpenModalExclude(!openModalExclude)} className="btn voltar">Voltar</button>
                <button onClick={()=> {
                    deleteOnClick(grupo)
                    setOpenModalExclude(!openModalExclude)
                }} className="btn excluir">Excluir</button>                
            </div>
        </ModalExcludeStl>
    )
}

export default ModalExcludeGruposComponent