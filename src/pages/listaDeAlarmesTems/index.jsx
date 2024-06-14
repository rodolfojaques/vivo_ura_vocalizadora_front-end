import { useContext, useEffect, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { FormListAlarmTemsStl, ListaDeAlarmesTemsStl } from "./styles";
import {
  arrSite,
  siglaSite,
  mockJson,
  arrEstado,
  arrTipoAlarme,
  ultAlarmesEm,
  localidade,
} from "../../utils/pagListaAlarmes";
import { UserContext } from "../../providers/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TableTemsComponent from "../../components/tableReactTems";
import { ListaDeAlarmesTemsContext } from "../../providers/listaDeAlarmesTems";
import { setSpecificProblem, setTipoDeAlarme, setTipoPlanta, setTipoRede, setTipoTA } from "../../utils/mocks/tems";

function ListaDeAlarmesTems() {
  const { baseURL, usuario } = useContext(UserContext);
  
  const [totalItems, setTotalItems] = useState(20);

  const {
    filterAlarmes,
    setPag,
    pag, pagSiz, setPagSiz, setTypeFilter,
    dataPesq, setDataPesq
  } = useContext(ListaDeAlarmesTemsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const formSchema = (data) => {
    console.log(data);
    setDataPesq(data)
    setTypeFilter("geral")
    filterAlarmes(data,pag,pagSiz);
  };

  const handleValueChange = (event) => {
    const data = {ALARME: event.target.value};
    setDataPesq(data)
    setTypeFilter("specifc")
    setPag(1)
    filterAlarmes(data,pag,pagSiz);
  };

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
                {setTipoTA.map((item, i) => (
                  <option key={i} value={item}>
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
                {setTipoRede.map((item, i) => (
                  <option key={i} value={item}>
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
                {arrEstado.map((item, i) => (
                  <option key={i} value={item}>
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
                {setTipoPlanta.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                specificProblem
              </label>
              <select className="campos_dropDown" {...register("frontspecificProblem")}>
                <option value={null}>{null}</option>
                {setSpecificProblem.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                frontAlarmId
              </label>
              <select className="campos_dropDown" {...register("frontAlarmId")}>
                <option value={null}>{null}</option>
                {setTipoDeAlarme.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                severity
              </label>
              <select
                className="campos_dropDown"
                {...register("severity")}
              >
                <option value={null}>Selecionar...</option>
                <option value={5}>CRITICO</option>
                <option value={4}>MAJORITARIO</option>
                <option value={3}>MINORITARIO</option>
                <option value={2}>AVISO</option>
                <option value={1}>INDETERMINADO</option>
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
                  {ultAlarmesEm.map((item, i) => (
                    <option key={i} value={item}>
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
              onChange={(event) => handleValueChange(event)}
              placeholder="Pesquisar"
              type="text"
              className="barra_pesquisa"
            />
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
      <TableTemsComponent total={totalItems}/>
    </ListaDeAlarmesTemsStl>
  );
}

export default ListaDeAlarmesTems;
