import { useEffect, useMemo, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import TableComponent from "../../components/tableReact";
import { FormListAlarmStl, ListaDeAlarmesStl } from "./styles";


function ListaDeAlarmes(){

    const [ linhas, setLinhas ] = useState(5)
    const [ arrMock, setArrMock ] = useState([])

    const mockJson = [{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Infraestrutura",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "RS",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM GERENCIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Manutenção",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "PR",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM GERENCIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Suporte",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "SP",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM GERENCIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Infraestrutura",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "RS",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "QUEDA DE LUZ",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Infraestrutura",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "SP",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM ENERGIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Infraestrutura",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "PR",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM GERENCIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    },{
        "ID_EVENTO": "5491159",
        "ID_EQUIPAMENTO": 7759,
        "RPA_STATUS": 2,
        "SIGITM_FLUXO": 1,
        "TIPO_BILHETE": "SG-INFRA",
        "TIPO_TA": "Infraestrutura",
        "TIPO_REDE_COD": 501,
        "TIPO_REDE_COD_INT": 501,
        "TIPO_REDE": "Energia",
        "ESTADO": "PR",
        "LOCALIDADE_COD": 41628,
        "MUNICIPIO": "SWW",
        "LOCALIDADE": "SWW",
        "ID_SITE": 40748,
        "SITE": "Z65",
        "SEQUENCIA_ALARME": 1466,
        "EMPRESA_MANUTENCAO": "TELEFONICA",
        "TIPO_ALARME": "Fonte sem gerência",
        "CLASSIFICACAO": "MAJORITARIO",
        "ALARME": `Falha Identificada na Plataforma de Alarmes - SGINFRA -
        https://maestro.vivo.com.br/sginfra/#/fcc/7759\r\nUF: PR - Site:
        PR.SWW.O1A85\r\nTipo: FCC\r\nNome: V2.PR.SWW.O1A85.GAB.FCC Fabricante:
        LINEAGE POWER - Modelo: QS841E V-1.4 - IP: 10.241.22.105 - GATEWAY:
        10.241.22.126\r\nAlarme Identificado: Fonte sem gerência\r\nData de Início:
        04/04/2023 16:40:00\r\nAlarme presente está sendo externalizado pelo novo processo
        de supervisão de alarmes pelas Fontes dos Sites`,
        "TIPO_FALHA": "SEM GERENCIA",
        "TIPO_AFETACAO": "Sem Afetação de Serviço",
        "EQUIPAMENTO": "USCC",
        "TIPO_CORRENTE_ELETRICA": "Contínua",
        "CAPACIDADE": 0,
        "DATA_APRESENTACAO": "2023-04-04T16:40:00Z",
        "FABRICANTE": "-",
        "MODELO": "-",
        "SALAS_AFETADAS": 1,
        "HISTORICO": null,
        "HISTORICO_TIPO": "Sistema",
        "TIPO_PLANTA": "Fixa Integrada V2",
        "TIPO_PLANTA_COD": 6,
        "TA": 298746663,
        "ELEMENTO_SIGLA": "Outros"
    }]

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
                accessor: "ALARME"
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

    useEffect(()=>{
        setArrMock(mockJson)
    },[])

    const handleValueChange = (event,arr) => {
        const value = event.target.value || "";
        
        const newArrMock = arr.filter((obj) => {

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
        setArrMock(newArrMock)
    };

    return (
        <ListaDeAlarmesStl>
            <Header />
            <CaminhoComponent />
            <div className="cabListAlarm">
                <FormListAlarmStl>
                    <div className="campos_principais">
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo TA
                            </label>
                            <select className="campos_dropDown">
                                <option value="tipo-ta">...</option>
                            </select>                            
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo Rede
                            </label>
                            <select className="campos_dropDown">
                                <option value="tipo-rede">...</option>
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Estado
                            </label>
                            <select className="campos_dropDown">
                                <option value="estado">...</option>
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Localidade
                            </label>
                            <select className="campos_dropDown">
                                <option value="localidade">...</option>
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Site
                            </label>
                            <select className="campos_dropDown">
                                <option value="site">...</option>
                            </select>
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Tipo Alarme
                            </label>
                            <select className="campos_dropDown">
                                <option value="tipo-alarme">...</option>
                            </select>                        
                        </div>
                        <div className="divDrop_down">
                            <label htmlFor="" className="label_dropDown">
                                Classificação
                            </label>
                            <select className="campos_dropDown">
                                <option value="classificacao">...</option>
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
                                    Ultimos alarmes em:
                                </label>
                                <select className="campos_dropDown">
                                    <option value="ultimos alarmes">...</option>
                                </select>
                                <input  type="submit" className="btn_filtrar" value={"Filtrar"} />                            
                            </div>                            
                        </div>
                        
                    </div>
                    <div className="pesquisa_btnSubmit">
                        <input onChange={(event)=> handleValueChange(event,mockJson)} placeholder="Pesquisar" type="text" className="barra_pesquisa" />
                        
                    </div>
                </FormListAlarmStl>
                <div className="quantidade_linhas">
                    <label htmlFor="" className="quant_lin_label">Mostrar linhas</label>
                    <input onChange={(e)=> setLinhas(Number(e.target.value))} type="number" min={1} name="quant_line" id="quant_lin" placeholder="Qtd linhas"/>
                </div>
            </div>
            <TableComponent columns={columns} data={arrMock} exibirLinhas={linhas}/>
        </ListaDeAlarmesStl>
    )
}

export default ListaDeAlarmes