import { useContext, useEffect, useMemo, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import TableComponent from "../../components/tableReact";
import { FormListAlarmStl, ListaDeAlarmesStl } from "./styles";
import { arrSite, siglaSite, mockJson, arrEstado, arrTipoAlarme, ultAlarmesEm, localidade } from "../../utils/pagListaAlarmes";
import axios from "axios";
import { UserContext } from "../../providers/user";


function ListaDeAlarmes(){
    const {
        baseURL,
        usuario
    } = useContext(UserContext)

    const [ linhas, setLinhas ] = useState(5)
    const [ arrAlarm, setArrAlarm ] = useState([])
    const [ arrAlarmInit, setArrAlarmInit ] = useState([])

    useEffect(()=>{
        axios.get(`${baseURL}/alarmes`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usuario?.token}`
            }})
        .then(res => {
            setArrAlarm(res.data)
            setArrAlarmInit(res.data)
        })
        .catch(err => console.log(err))        
    },[]) 

    const columns = useMemo(
        ()=> [ 
                {
                Header: "Tipo TA",
                accessor: "TIPO_TA"
                },
                {
                Header: "Tipo Rede",
                accessor: "TIPO_REDE"
                },
                {
                Header: "Estado",
                accessor: "ESTADO"
                },
                {
                Header: "Localidade",
                accessor: "LOCALIDADE"
                },
                {
                Header: "Site",
                accessor: "SITE"
                },
                {
                Header: "Tipo Alarme",
                accessor: "TIPO_ALARME"
                },
                {
                Header: "Classificação",
                accessor: "CLASSIFICACAO"
                },
                {
                Header: "ID Evento",
                accessor: "ID_EVENTO"
                },
                {
                Header: "ID Equipamento",
                accessor: "ID_EQUIPAMENTO"
                },
                {
                Header: "RPA Status",
                accessor: "RPA_STATUS"
                },
                {
                Header: "SIGITM Fluxo",
                accessor: "SIGITM_FLUXO"
                },
                {
                Header: "Tipo Bilhete",
                accessor: "TIPO_BILHETE"
                },
                {
                Header: "Tipo Rede COD",
                accessor: "TIPO_REDE_COD"
                },
                {
                Header: "Tipo Rede COD INT",
                accessor: "TIPO_REDE_COD_INT"
                },
                {
                Header: "Localidade COD",
                accessor: "LOCALIDADE_COD"
                },
                {
                Header: "Municipio",
                accessor: "MUNICIPIO"
                },
                {
                Header: "ID Site",
                accessor: "ID_SITE"
                },
                {
                Header: "Sequencia Alarme",
                accessor: "SEQUENCIA_ALARME"
                },
                {
                Header: "Empresa Manutenção",
                accessor: "EMPRESA_MANUTENCAO"
                },
                {
                Header: "Alarme",
                accessor: "ALARME",
                Cell: ({ value }) => (
                    <a
                        href={`#/${value}`}
                        onClick={(e) => {
                        e.preventDefault();
                        alert(value);
                      }}
                    >
                      Detalhes do alarme
                    </a>
                  ),
                },
                {
                Header: "Tipo Falha",
                accessor: "TIPO_FALHA"
                },
                {
                Header: "Tipo Afetação",
                accessor: "TIPO_AFETACAO"
                },
                {
                Header: "Equipamento",
                accessor: "EQUIPAMENTO"
                },
                {
                Header: "Tipo Corrente Eletrica",
                accessor: "TIPO_CORRENTE_ELETRICA"
                },
                {
                Header: "Capacidade",
                accessor: "CAPACIDADE"
                },
                {
                Header: "Data Apresentação",
                accessor: "DATA_APRESENTACAO"
                },
                {
                Header: "Fabricante",
                accessor: "FABRICANTE"
                },
                {
                Header: "Modelo",
                accessor: "MODELO"
                },
                {
                Header: "Salas Afetadas",
                accessor: "SALAS_AFETADAS"
                },
                {
                Header: "Historico",
                accessor: "HISTORICO"
                },
                {
                Header: "Historico Tipo",
                accessor: "HISTORICO_TIPO"
                },
                {
                Header: "Tipo Planta",
                accessor: "TIPO_PLANTA"
                },
                {
                Header: "Tipo Planta COD",
                accessor: "TIPO_PLANTA_COD"
                },
                {
                Header: "TA",
                accessor: "TA"
                },
                {
                Header: "Elemento Sigla",
                accessor: "ELEMENTO_SIGLA"
                }
            ],
        []
    );

    const handleValueChange = (event,arr) => {
        const value = event.target.value || "";
        
        const newArrAlarm = arr.filter((obj) => {

            if(obj?.TIPO_TA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_REDE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ESTADO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.LOCALIDADE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.SITE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_ALARME?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.CLASSIFICACAO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ID_EVENTO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ID_EQUIPAMENTO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.RPA_STATUS?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.SIGITM_FLUXO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_BILHETE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_REDE_COD?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_REDE_COD_INT?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.LOCALIDADE_COD?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.MUNICIPIO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ID_SITE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.SEQUENCIA_ALARME?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.EMPRESA_MANUTENCAO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ALARME?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_FALHA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_AFETACAO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.EQUIPAMENTO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_CORRENTE_ELETRICA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.CAPACIDADE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.DATA_APRESENTACAO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.FABRICANTE?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.MODELO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.SALAS_AFETADAS?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.HISTORICO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;            
            } else if(obj?.HISTORICO_TIPO?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_PLANTA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TIPO_PLANTA_COD?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.TA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            } else if(obj?.ELEMENTO_SIGLA?.toString().toLowerCase().includes(value.toLowerCase())){
                return obj;
            }
        })
        setArrAlarm(newArrAlarm)
    };

    return (
        <ListaDeAlarmesStl>
            <Header />
            <CaminhoComponent path={'Lista de Alarmes'}/>
            <div className="cabListAlarm">
                <FormListAlarmStl>
                    <div className="campos_principais">
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo TA
                            </label>
                            <select className="campos_dropDown">
                                <option value="infraestrutura">Infraestrutura</option>
                            </select>                            
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo Rede
                            </label>
                            <select className="campos_dropDown">
                                <option value="climatizacao">Climatização</option>
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Estado
                            </label>
                            <select className="campos_dropDown">
                                {
                                    arrEstado.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Localidade
                            </label>
                            <select className="campos_dropDown">
                                {
                                    localidade.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Site
                            </label>
                            <select className="campos_dropDown">
                                {
                                    siglaSite.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                }                                
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo Alarme
                            </label>
                            <select className="campos_dropDown">
                                {arrTipoAlarme.map((item,i)=> <option key={i} value={item}>{item}</option>)}
                            </select>                        
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Classificação
                            </label>
                            <select className="campos_dropDown">
                                <option value="MAJORITARIO">MAJORITARIO</option>
                                <option value="MINORITARIO">MINORITARIO</option>
                                <option value="CRITICO">CRITICO</option>
                                <option value="MESA DE CONTROLE">MESA DE CONTROLE</option>
                            </select>
                        </div>
                    </div>
                    <div className="campos_dataTime">
                        <div className="campos_dataTime_container_stl">
                            <div className="datas">
                                <label htmlFor="" className="label_datas">Data</label>
                                <div className="container_alinhamento_data_1">
                                    <input type="date" className="data_ data_start" />
                                    <span className="placeDataInicio">Início</span>
                                </div>
                                <div className="container_alinhamento_data_2">
                                    <input type="date" className="data_ data_end" />
                                    <span className="placeDataFim">Fim</span>
                                </div>   
                            </div>
                            <div className="horas">
                                <label htmlFor="" className="label_dropDown">
                                    Ultimos alarmes em
                                </label>
                                <select className="campos_dropDown">
                                    {
                                        ultAlarmesEm.map((item,i)=> <option key={i} value={item}>{item}</option>)
                                    }                                    
                                </select>
                                <input  type="submit" className="btn_filtrar" value={"Filtrar"} />                            
                            </div>                            
                        </div>
                        
                    </div>
                    <div className="pesquisa_btnSubmit">
                        <input onChange={(event)=> handleValueChange(event,arrAlarmInit)} placeholder="Pesquisar" type="text" className="barra_pesquisa" />
                        
                    </div>
                </FormListAlarmStl>
                <div className="quantidade_linhas">
                    <label htmlFor="" className="quant_lin_label">Mostrar linhas</label>
                    <input onChange={(e)=> setLinhas(Number(e.target.value))} type="number" min={1} name="quant_line" id="quant_lin" placeholder="Qtd linhas"/>
                </div>
            </div>
            <TableComponent columns={columns} data={arrAlarm} exibirLinhas={linhas}/>
        </ListaDeAlarmesStl>
    )
}

export default ListaDeAlarmes