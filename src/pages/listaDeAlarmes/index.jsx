import { useContext, useEffect, useMemo, useState } from "react";
import CaminhoComponent from "../../components/Caminho";
import Header from "../../components/Header";
import TableComponent from "../../components/tableReact";
import { FormListAlarmStl, ListaDeAlarmesStl } from "./styles";
import {
  siglaSite,
  arrEstado,
  arrTipoAlarme,
  ultAlarmesEm,
  localidade,
} from "../../utils/pagListaAlarmes";
import { useForm } from "react-hook-form";
import { ListaDeAlarmesContext } from "../../providers/listaDeAlarmes";

function ListaDeAlarmes() {
  const {
    filterAlarmes,
    setPag,
    pag, pagSiz, setPagSiz, setTypeFilter,
    dataPesq, setDataPesq
  } = useContext(ListaDeAlarmesContext);
  
  const [totalItems, setTotalItems] = useState(20);

  const columns = useMemo(
    () => [
      {
        Header: "Tipo TA",
        accessor: "TIPO_TA",
      },
      {
        Header: "Tipo Rede",
        accessor: "TIPO_REDE",
      },
      {
        Header: "Estado",
        accessor: "ESTADO",
      },
      {
        Header: "Localidade",
        accessor: "LOCALIDADE",
      },
      {
        Header: "Site",
        accessor: "SITE",
      },
      {
        Header: "Tipo Alarme",
        accessor: "TIPO_ALARME",
      },
      {
        Header: "Classificação",
        accessor: "CLASSIFICACAO",
      },
      {
        Header: "ID Evento",
        accessor: "ID_EVENTO",
      },
      {
        Header: "ID Equipamento",
        accessor: "ID_EQUIPAMENTO",
      },
      {
        Header: "RPA Status",
        accessor: "RPA_STATUS",
      },
      {
        Header: "SIGITM Fluxo",
        accessor: "SIGITM_FLUXO",
      },
      {
        Header: "Tipo Bilhete",
        accessor: "TIPO_BILHETE",
      },
      {
        Header: "Tipo Rede COD",
        accessor: "TIPO_REDE_COD",
      },
      {
        Header: "Tipo Rede COD INT",
        accessor: "TIPO_REDE_COD_INT",
      },
      {
        Header: "Localidade COD",
        accessor: "LOCALIDADE_COD",
      },
      {
        Header: "Municipio",
        accessor: "MUNICIPIO",
      },
      {
        Header: "ID Site",
        accessor: "ID_SITE",
      },
      {
        Header: "Sequencia Alarme",
        accessor: "SEQUENCIA_ALARME",
      },
      {
        Header: "Empresa Manutenção",
        accessor: "EMPRESA_MANUTENCAO",
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
        accessor: "TIPO_FALHA",
      },
      {
        Header: "Tipo Afetação",
        accessor: "TIPO_AFETACAO",
      },
      {
        Header: "Equipamento",
        accessor: "EQUIPAMENTO",
      },
      {
        Header: "Tipo Corrente Eletrica",
        accessor: "TIPO_CORRENTE_ELETRICA",
      },
      {
        Header: "Capacidade",
        accessor: "CAPACIDADE",
      },
      {
        Header: "Data Apresentação",
        accessor: "DATA_APRESENTACAO",
      },
      {
        Header: "Fabricante",
        accessor: "FABRICANTE",
      },
      {
        Header: "Modelo",
        accessor: "MODELO",
      },
      {
        Header: "Salas Afetadas",
        accessor: "SALAS_AFETADAS",
      },
      {
        Header: "Historico",
        accessor: "HISTORICO",
      },
      {
        Header: "Historico Tipo",
        accessor: "HISTORICO_TIPO",
      },
      {
        Header: "Tipo Planta",
        accessor: "TIPO_PLANTA",
      },
      {
        Header: "Tipo Planta COD",
        accessor: "TIPO_PLANTA_COD",
      },
      {
        Header: "TA",
        accessor: "TA",
      },
      {
        Header: "Elemento Sigla",
        accessor: "ELEMENTO_SIGLA",
      },
    ],
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const formSchema = (data) => {
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
    <ListaDeAlarmesStl>
      <Header />
      <CaminhoComponent path={"Lista de Alarmes"} />
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
                {arrEstado.map((item, i) => (
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
                {localidade.map((item, i) => (
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
                {siglaSite.map((item, i) => (
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
                {arrTipoAlarme.map((item, i) => (
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
                <select className="campos_dropDown">
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
      <TableComponent columns={columns} total={totalItems}/>
    </ListaDeAlarmesStl>
  );
}

export default ListaDeAlarmes;
