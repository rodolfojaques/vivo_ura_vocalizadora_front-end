import { useContext,useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import { FormListAlarmStl, ListaDeAlarmesStl } from "./styles";
import { siglaSite, arrEstado, arrTipoAlarme, ultAlarmesEm, localidade } from "../../utils/pagListaAlarmes";
import { set, useForm } from "react-hook-form";
import { ListaDeAlarmesContext } from "../../providers/listaDeAlarmes";
import TableDragSGInfra from "../../components/tableSGInfra";

import * as Icon from "react-bootstrap-icons";

function ListaDeAlarmes() {
  const {
    filterAlarmes,
    pag, 
    pagSiz, 
    setPagSiz, 
    setTypeFilter, 
    setDataPesq
  } = useContext(ListaDeAlarmesContext);

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

  return (
    <ListaDeAlarmesStl>
      <Header />
      <CaminhoComponent path={"Histórico de Alarmes"} />
      <div className="cabListAlarm">
        <FormListAlarmStl onSubmit={handleSubmit(formSchema)}>
          <div className="campos_principais">
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Tipo TA
              </label>
              <select className="campos_dropDown" {...register("TIPO_TA")}>
                <option value={null}>{null}</option>
                <option value="Infraestrutura">Infraestrutura</option>
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Tipo Rede
              </label>
              <select className="campos_dropDown" {...register("TIPO_REDE")}>
                <option value={null}>{null}</option>
                <option value="Climatização">Climatização</option>
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Estado
              </label>
              <select className="campos_dropDown" {...register("ESTADO")}>
                <option value={null}>{null}</option>
                {arrEstado.map((item,i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Localidade
              </label>
              <select className="campos_dropDown" {...register("LOCALIDADE")}>
                <option value={null}>{null}</option>
                {localidade.map((item,i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Site
              </label>
              <select className="campos_dropDown" {...register("SITE")}>
                <option value={null}>{null}</option>
                {siglaSite.map((item,i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Tipo Alarme
              </label>
              <select className="campos_dropDown" {...register("TIPO_ALARME")}>
                <option value={null}>{null}</option>
                {arrTipoAlarme.map((item,i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="divDrop_down">
              <label htmlFor="" className="label_dropDown">
                Classificação
              </label>
              <select
                className="campos_dropDown"
                {...register("CLASSIFICACAO")}
              >
                <option value={null}>{null}</option>
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
                  {ultAlarmesEm.map((item,i) => (
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
              placeholder="Pesquisar"
              type="text"
              className="barra_pesquisa"
              onChange={(e) => setValuePesq(e.target.value)}
              {...register("ALARME")}
            />
            <button type="submit" className="btn_search"  
              onClick={(event) => {
                event.preventDefault(); // Evita o reload da página
                handleSubmit(formSchema)();
              }}
              // onClick={() => handleValueClick()}
            >
              <Icon.Search/>
            </button>
          </div>
        </FormListAlarmStl>
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
      <TableDragSGInfra />
    </ListaDeAlarmesStl>
  );
}

export default ListaDeAlarmes;
