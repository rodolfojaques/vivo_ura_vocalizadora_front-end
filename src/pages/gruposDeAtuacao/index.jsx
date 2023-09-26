import { useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import ContainerGruposComponente from "../../components/ContainerGrupos";
import Header from "../../components/Header";
import { GruposDeAtuacaoStl } from "./styles";
import ModalGruposAtuacaoComponente from "../../components/ModalGruposAtuacao";
import ListaSG from "../../components/ListaSG";
import ListaDL from "../../components/ListaDL";
import { gruposAtuacaoMock } from "../../utils/grupos";
import BoxNomeGrupoComponente from "../../components/BoxNomeGrupo";
import ModalExcludeGruposComponent from "../../components/ModalExcludeGrupos";

function GruposDeAtuacao(){
    const [ openModalGruposAtuacao, setOpenModalGruposAtuacao ] = useState(false)
    const [openModalExclude, setOpenModalExclude] = useState(false)
    const [grupoSelecionado, setGrupoSelecionado] = useState({})

    const deleteOnClick = (grp)=> {
    }

    return(
        <GruposDeAtuacaoStl>
            <Header />
            <CaminhoComponent path={"Grupos de Atuação"} />
            <ContainerGruposComponente
            tipoGrupo={"atuação"}
            openModalGruposAtuacao={openModalGruposAtuacao}
            setOpenModalGruposAtuacao={setOpenModalGruposAtuacao}
            >
                <ListaSG>
                    {
                        gruposAtuacaoMock.map((grupo,i)=> <BoxNomeGrupoComponente
                        key={i} 
                        tipoGrupo={"atuação"} 
                        nome={grupo.nomeGrupo} 
                        grupo={grupo} 
                        openModalExclude={openModalExclude} 
                        setOpenModalExclude={setOpenModalExclude}
                        grupoSelecionado={grupoSelecionado}
                        setGrupoSelecionado={setGrupoSelecionado}
                        />)
                    }
                </ListaSG>
                <ListaDL></ListaDL>
            </ContainerGruposComponente>
            {
                !!openModalGruposAtuacao?
                <ModalGruposAtuacaoComponente 
                openModalGruposAtuacao={openModalGruposAtuacao}
                setOpenModalGruposAtuacao={setOpenModalGruposAtuacao}
                />
                :<></>
            }
            {
                !!openModalExclude?<ModalExcludeGruposComponent
                deleteOnClick={deleteOnClick} 
                openModalExclude={openModalExclude}  
                setOpenModalExclude={setOpenModalExclude}
                grupo={grupoSelecionado}              
                /> : <></>
            }
        </GruposDeAtuacaoStl>
    )
}

export default GruposDeAtuacao