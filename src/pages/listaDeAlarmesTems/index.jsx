import { useContext,useEffect,useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { FormListAlarmTemsStl, ListaDeAlarmesTemsStl } from "./styles";
import { arrEstado, ultAlarmesEm } from "../../utils/pagListaAlarmes";
import { useForm } from "react-hook-form";
import TableTemsComponent from "../../components/tableReactTems";
import { ListaDeAlarmesTemsContext } from "../../providers/listaDeAlarmesTems";
import { setTipoPlanta, setTipoRede, setTipoTA } from "../../utils/mocks/tems";

import * as Icon from "react-bootstrap-icons";

function ListaDeAlarmesTems() {

  const {
    filterAlarmes,
    pag, 
    pagSiz, 
    setPagSiz, 
    setTypeFilter,
    setDataPesq,
    dataPesq,
  } = useContext(ListaDeAlarmesTemsContext);

  const [ valuePesq, setValuePesq ] = useState("");

  const {
    register,
    handleSubmit,
  } = useForm({});

  const formSchema = (data) => {
    setDataPesq(data)
    setTypeFilter("geral")
    filterAlarmes(data,pag,pagSiz);
  };

  const handleValueClick = () => {
    const data = {ALARME: valuePesq};
    setDataPesq(data)
    setTypeFilter("specifc")
    filterAlarmes(data,1,pagSiz);
  };

  useEffect(() => {
    filterAlarmes(dataPesq,pag,pagSiz)
  }, [pag,pagSiz]);

  return (
    <ListaDeAlarmesTemsStl> 
      <Header />
      <CaminhoComponent path={"Lista de Alarmes DL-Tems"} typeAlarm={"DL"}/>
      <div className="cabListAlarm">
        <FormListAlarmTemsStl onSubmit={handleSubmit(formSchema)}>
          <div className="campos_principais">
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                frontTypeTa
              </label>
              <select className="campos_dropDown" {...register("frontTypeTa")}>
                <option value={null}>{null}</option>
                {setTipoTA.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                frontNetworkType
              </label>
              <select className="campos_dropDown" {...register("frontNetworkType")}>
                <option value={null}>{null}</option>
                {setTipoRede.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                estadoSigla
              </label>
              <select className="campos_dropDown" {...register("estadoSigla")}>
                <option value={null}>{null}</option>
                {arrEstado.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                  frontPlantType
              </label>
              <select className="campos_dropDown" {...register("frontPlantType")}>
                <option value={null}>{null}</option>
                {setTipoPlanta.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                specificProblem
              </label>              
              <input type="text" className="campos_dropDown" placeholder="Ex: FALHA MONITORACAO REDE" {...register("specificProblem")}/>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                classificacao
              </label>
              <select
                className="campos_dropDown"
                {...register("classificacao")}
              >
                <option value={null}>{null}</option>
                <option value={"5CRITICO"}>CRITICO</option>
                <option value={"4MAJORITARIO"}>MAJORITARIO</option>
                <option value={"3MINORITARIO"}>MINORITARIO</option>
              </select>
            </div>
          </div>
          <div className="campos_dataTime">
            <div className="campos_dataTime_container_stl">
              <div className="datas">
                <label htmlFor="" className="label_datas">
                  Data
                </label>
                <div className="container_alinhamento_data_1">
                  <input
                    type="date"
                    className="data_ data_start"
                    {...register("DATA_INICIO")}
                  />
                  <span className="placeDataInicio">Início</span>
                </div>
                <div className="container_alinhamento_data_2">
                  <input
                    type="date"
                    className="data_ data_end"
                    {...register("DATA_FIM")}
                  />
                  <span className="placeDataFim">Fim</span>
                </div>
              </div>
              <div className="horas">
                <label htmlFor="" className="label_dropDown">
                  Ultimos alarmes em
                </label>
                <select className="campos_dropDown" {...register("ULTIMOS_EM")}>
                  <option value={null}>{null}</option>
                  {ultAlarmesEm.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input
                  type="submit"
                  className="btn_filtrar"
                  value={"Filtrar"}
                />
              </div>
            </div>
          </div>
          <div className="pesquisa_btnSubmit">
            <input
              placeholder="Pesquisar"
              type="text"
              className="barra_pesquisa"
              onChange={(e) => setValuePesq(e.target.value)}
            />
            <span className="btn_search"
              onClick={() => handleValueClick()}
            >
              <Icon.Search/>
            </span>
          </div>
        </FormListAlarmTemsStl>
        <div className="quantidade_linhas">
          <label htmlFor="" className="quant_lin_label">
            Mostrar linhas
          </label>
          <input
            onChange={(e) => setPagSiz(Number(e.target.value))}
            type="number"
            min={1}
            name="quant_line"
            id="quant_lin"
            placeholder="Qtd linhas"
          />
        </div>
      </div>
      <TableTemsComponent />
    </ListaDeAlarmesTemsStl>
  );
}

export default ListaDeAlarmesTems;
