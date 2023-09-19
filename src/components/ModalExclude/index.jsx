import { ModalExcludeStl } from "./styles";

function ModalExcludeComponent({dadosUsers, openModalExclude, setOpenModalExclude}){
    return (
        <ModalExcludeStl>
            <h2 className="atencao">Atenção</h2>
            <p className="txt_exclude">
                Você tem certeza que deseja excluir<br></br>
                o usuário {dadosUsers[0].nome}, de RE {dadosUsers[0].RE}?
            </p>
            <div className="btns">
                <button onClick={()=> setOpenModalExclude(!openModalExclude)} className="btn voltar">Voltar</button>
                <button className="btn excluir">Excluir</button>                
            </div>
        </ModalExcludeStl>
    )
}

export default ModalExcludeComponent