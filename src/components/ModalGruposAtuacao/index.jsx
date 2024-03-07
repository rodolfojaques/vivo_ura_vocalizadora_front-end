import { useContext, useState } from "react";
import { BackgroundStl, DivButtonAddContatos, ModalGruposAtuacaoStl } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GrupoAtuacaoContext } from "../../providers/gruposAtuacao";

function ModalGruposAtuacaoComponente({
  grupoAtuacao,
  setGrupoAtuacao,
  openModalGruposAtuacao,
  setOpenModalGruposAtuacao,
}) {
  const [users, setUsers] = useState([]);
  const [selects, setSelects] = useState([]);
  const [idUser, setIdUser] = useState([]);
  const [userDeletado, setUserDeletado] = useState([]);

  const { usuario, baseURL } = useContext(UserContext);
  const {
    addContato,
    setAddContato,
    addUserGrupoAtuacao,
    setIdGrupo,
    idGrupo,
    setTypeTeam,
    typeTeam,
    typeUpdateTeam,setTypeUpdateTeam
  } = useContext(GrupoAtuacaoContext);

  const schema = yup.object().shape({
    typeTeam: yup.string().required("*Campo obrigatório"),
    nomeGrupo: yup.string().required("*Campo obrigatório"),
    RE1: yup.string(),
    nome1: yup.string().required("*Campo obrigatório"),
    contato1: yup.string().required("*Campo obrigatório"),
    RE2: yup.string(),
    nome2: yup.string().required("*Campo obrigatório"),
    contato2: yup.string().required("*Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formAddContato = (idsUsers) => {
    addUserGrupoAtuacao(idsUsers, idGrupo);
    setAddContato(!addContato);
  };

  const formSchema = async (data) => {
    const grupoAtuacao = {
      typeTeam: data.typeTeam || 'SG',
      nomeGrupo: data.nomeGrupo,
      gerente1: data.nome1,
      contato_ger1: data.contato1,
      gerente2: data.nome2,
      contato_ger2: data.contato2,
    };

    try {
      const response = await axios.post(
        `${baseURL}/grupos-atuacao/register`,
        grupoAtuacao,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario.token}`,
          },
        }
      );
      setIdGrupo(response.data.id);
      addUserGrupoAtuacao(idUser, response.data.id);

      toast.success("Grupo de Atuação criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
    setOpenModalGruposAtuacao(!openModalGruposAtuacao);
  };

  const adicionarSelect = () => {
    setSelects([...selects, users]);
  };
  const removeSelect = (index) => {
    selects.splice(index, 1);
    idUser.splice(index, 1);
    setIdUser([...idUser]);
    setSelects([...selects]);
    setUsers([...users, userDeletado[index]]);
  };

  const allUsers = async () => {
    const URL = `${baseURL}/usuario/${typeTeam === "SG"?"infra":"tems"}`
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${usuario.token}`,
        },
      });
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    allUsers();
  }, [typeUpdateTeam,typeTeam]);

  const handleChange = (index, selectedUserId) => {
    const updatedIdUser = [...idUser];
    updatedIdUser[index] = selectedUserId;
    setIdUser(updatedIdUser);
  };

  const removeUserSelected = (selectedUserID) => {
    const delUser = users.find((user) => user.id === selectedUserID);
    setUserDeletado([...userDeletado, delUser]);
    const index = users.filter((user) => user.id !== selectedUserID);
    setUsers(index);
  };
  return (
    <>
      {addContato ? (  
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setAddContato(!addContato)}}>
          <ModalGruposAtuacaoStl>
            {console.log(typeTeam)}
            <h2 className="title">Adicionar novos contatos</h2>
            <form
              onSubmit={() => {
                formAddContato(idUser);
              }}
              action=""
              className="form_gp_atuacao"
            >
              {selects.map((elem, index) => (
                <div key={index} className="contCampos">
                  <label htmlFor="" className="label_campos">
                    Contato {index + 3}
                  </label>
                  <select
                    className="campos campos_line2 campos_dropDown"
                    {...register(`contato${index + 3}`)}
                    defaultValue={"Contato"}
                    onChange={(e) => {
                      removeUserSelected(parseInt(e.target.value));
                      handleChange(index, parseInt(e.target.value));
                    }}
                  >
                    <option value="Contato" disabled>
                      Contato
                    </option>
                    {elem.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {`${opt.nome}, RE: ${opt.RE}`}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="btn_remover"
                    onClick={() => removeSelect(index)}
                  >
                    Remover
                  </button>
                </div>
              ))}
              <DivButtonAddContatos>
                <button
                  type="button"
                  className="btn_add"
                  onClick={() => {
                    adicionarSelect()
                  }}
                >
                  Adicionar novo contato
                </button>
              </DivButtonAddContatos>
              <div className="btn_form">
                <button
                  onClick={() => setAddContato(!addContato)}
                  className="btn fechar"
                >
                  Fechar
                </button>
                <input className="btn salvar" type="submit" value="Salvar" />
              </div>
            </form>
          </ModalGruposAtuacaoStl>          
        </BackgroundStl>    
      ) : (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenModalGruposAtuacao(!openModalGruposAtuacao)}}>
          <ModalGruposAtuacaoStl>
            <h2 className="title">Criar Novo Grupo</h2>
            <form
              onSubmit={handleSubmit(formSchema)}
              action=""
              className="form_gp_atuacao"
            >
              <div className="contCampos_nome">
                <label htmlFor="" className="label_campos">
                  Setor
                </label>
                <select name="" id="" className="campos" {...register("typeTeam")} onChange={(e)=>{setTypeTeam(e.target.value)}}>
                  <option value="SG"></option>
                  <option value="SG">SG-Infra</option>
                  <option value="DL">DL-Tems</option>
                </select>
              </div>
              {errors?.sector?.message ? (
                <span className="msg_error">{errors.sector?.message}</span>
              ) : (
                ""
              )}
              <div className="contCampos_nome">
                <label htmlFor="" className="label_campos">
                  Nome do Grupo
                </label>
                <input
                  type="text"
                  className="campos"
                  placeholder="Nome do grupo..."
                  {...register("nomeGrupo")}
                />
              </div>
              {errors?.nomeGrupo?.message ? (
                <span className="msg_error">{errors.nomeGrupo?.message}</span>
              ) : (
                ""
              )}
              <div className="div_fields">
                <div className="contCampos_open">
                  <div className="line_1">
                    <label htmlFor="" className="label_campos">
                      Gerente 1
                    </label>
                    <input
                      type="text"
                      className="campos"
                      placeholder="Nome completo..."
                      {...register("nome1")}
                    />
                    {errors?.gerente1?.message ? (
                      <span className="msg_error_gerentes">
                        {errors.gerente1?.message}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="line_2">
                    <input
                      type="text"
                      className="campos campos_line2"
                      placeholder="RE... (opcional)"
                      {...register("RE1")}
                    />
                    <input
                      type="text"
                      className="campos campos_line2"
                      placeholder="Número de contato..."
                      {...register("contato1")}
                    />
                    {errors?.contato1?.message ? (
                      <span className="msg_error_gerentes">
                        {errors.contato1?.message}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="contCampos_open">
                  <div className="line_1">
                    <label htmlFor="" className="label_campos">
                      Gerente 2
                    </label>
                    <input
                      type="text"
                      className="campos"
                      placeholder="Nome completo..."
                      {...register("nome2")}
                    />
                    {errors?.gerente2?.message ? (
                      <span className="msg_error_gerentes">
                        {errors.gerente2?.message}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="line_2">
                    <input
                      type="text"
                      className="campos campos_line2"
                      placeholder="RE... (opcional)"
                      {...register("RE2")}
                    />
                    <input
                      type="text"
                      className="campos campos_line2"
                      placeholder="Número de contato..."
                      {...register("contato2")}
                    />
                    {errors?.contato2?.message ? (
                      <span className="msg_error_gerentes">
                        {errors.contato2?.message}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {selects.map((elem, index) => (
                  <div key={index} className="contCampos">
                    <label htmlFor="" className="label_campos">
                      Contato {index + 3}
                    </label>
                    <select
                      className="campos campos_line2 campos_dropDown"
                      {...register(`contato${index + 3}`)}
                      defaultValue={"Contato"}
                      onChange={(e) => {
                        removeUserSelected(parseInt(e.target.value));
                        handleChange(index, parseInt(e.target.value));
                      }}
                    >
                      <option value="Contato" disabled>
                        Contato
                      </option>
                      {elem.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {`${opt.nome}, RE: ${opt.RE}`}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="btn_remover"
                      onClick={() => removeSelect(index)}
                    >
                      Remover
                    </button>
                  </div>
                ))}
                <DivButtonAddContatos>
                  <button
                    type="button"
                    className="btn_add"
                    onClick={() => adicionarSelect()}
                  >
                    Adicionar novo contato
                  </button>
                </DivButtonAddContatos>
              </div>
              <div className="btn_form">
                <button
                  onClick={() =>
                    setOpenModalGruposAtuacao(!openModalGruposAtuacao)
                  }
                  className="btn fechar"
                >
                  Fechar
                </button>
                <input className="btn salvar" type="submit" value="Salvar" />
              </div>
            </form>
          </ModalGruposAtuacaoStl>          
        </BackgroundStl>
      )}
    </>
  );
}

export default ModalGruposAtuacaoComponente;
