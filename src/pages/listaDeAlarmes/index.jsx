import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { FormListAlarmStl, ListaDeAlarmesStl } from "./styles";

function ListaDeAlarmes(){
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
                            </div>                            
                        </div>
                        
                    </div>
                    <div className="pesquisa_btnSubmit">
                        <input type="text" className="barra_pesquisa" />
                        <input type="submit" className="btn_filtrar" value={"Filtrar"} />
                    </div>
                </FormListAlarmStl>
            </div>
        </ListaDeAlarmesStl>
    )
}

export default ListaDeAlarmes