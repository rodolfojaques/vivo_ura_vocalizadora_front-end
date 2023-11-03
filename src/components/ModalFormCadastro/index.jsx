import { ModalFormCadastroStl } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

function ModalFormCadastro({
  title,
  openModal,
  setOpenModal,
  openModalEdit,
  setOpenModalEdit,
}) {
  const [user, setUser] = useState({});

  const { baseURL, usuario, idUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${baseURL}/usuario/${idUser}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const schema = !!openModal
    ? yup.object().shape({
        nome: yup.string().required("*Campo obrigatório"),
        RE: yup.string().required("*Campo obrigatório"),
        email: yup
          .string()
          .email("Formato de e-mail inválido")
          .required("*Campo obrigatório"),
        tel_cel: yup.string().required("*Campo obrigatório"),
        perfil: yup.string().required("*Campo obrigatório"),
      })
    : yup.object().shape({
        nome: yup.string(),
        RE: yup.string(),
        email: yup.string().email("Formato de e-mail inválido"),
        tel_cel: yup.string(),
        perfil: yup.string(),
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSchema = (data) => {
    axios
      .post(`${baseURL}/usuario/register`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOpenModal(!openModal);
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Usuário já existente, RE e e-mail devem ser únicos!");
        } else {
          toast.error("Usuário sem permissão para esta ação!");
        }
      });
  };

  const schemaUpdate = (data) => {
    !!data.nome ? (data.nome = data.nome) : (data.nome = user.nome);
    !!data.email ? (data.email = data.email) : (data.email = user.email);
    !!data.tel_cel
      ? (data.tel_cel = data.tel_cel)
      : (data.tel_cel = user.tel_cel);
    !!data.perfil ? (data.perfil = data.perfil) : (data.perfil = user.perfil);
    delete data?.password;

    axios
      .patch(`${baseURL}/usuario/update/${idUser}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usuario?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOpenModalEdit(!openModalEdit);
        toast.success("Usuário atualizado com sucesso!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Usuário sem permissão para esta ação!");
      });
  };

  return (
    <ModalFormCadastroStl>
      <h2 className="title_cadastro">{title}</h2>
      {!!openModal ? (
        <form
          onSubmit={handleSubmit(formSchema)}
          action=""
          className="form_cadastro"
        >
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Nome
              </label>
              <input
                type="text"
                className="campos"
                placeholder="Nome do usuário..."
                {...register("nome")}
              />
            </div>
            {errors?.nome?.message ? (
              <span className="msg_error">{errors.nome?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                RE
              </label>
              <input
                type="text"
                className="campos"
                placeholder="RE do usuário..."
                {...register("RE")}
              />
            </div>
            {errors?.RE?.message ? (
              <span className="msg_error">{errors.RE?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                E-mail
              </label>
              <input
                type="text"
                className="campos"
                placeholder="E-mail do usuário..."
                {...register("email")}
              />
            </div>
            {errors?.email?.message ? (
              <span className="msg_error">{errors.email?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Tel/Cel
              </label>
              <input
                type="text"
                className="campos"
                placeholder="Tel/Cel do usuário..."
                {...register("tel_cel")}
              />
            </div>
            {errors?.tel_cel?.message ? (
              <span className="msg_error">{errors.tel_cel?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Perfil
              </label>
              <select className="campos" {...register("perfil")}>
                <option value="Operador">Operador</option>
                <option value="Gestor">Gestor</option>
                <option value="Admin">Admin</option>
                <option value="UserAdm">UserAdm</option>
              </select>
              {/* <input type="text" className="campos" placeholder="Perfil do usuário..." {...register("perfil")}/> */}
            </div>
            {errors?.perfil?.message ? (
              <span className="msg_error">{errors.perfil?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="btn_form_cadastro">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="btn fechar"
            >
              Fechar
            </button>
            <input className="btn salvar" type="submit" value="Salvar" />
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit(schemaUpdate)}
          action=""
          className="form_cadastro"
        >
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Nome
              </label>
              <input
                type="text"
                className="campos"
                placeholder="Nome do usuário..."
                {...register("nome")}
                defaultValue={user.nome}
              />
            </div>
            {errors?.nome?.message ? (
              <span className="msg_error">{errors.nome?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                RE
              </label>
              <input
                disabled
                type="text"
                className="campos"
                placeholder="RE do usuário..."
                defaultValue={user.RE}
              />
            </div>
            {errors?.RE?.message ? (
              <span className="msg_error">{errors.RE?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                E-mail
              </label>
              <input
                type="text"
                className="campos"
                placeholder="E-mail do usuário..."
                {...register("email")}
                defaultValue={user.email}
              />
            </div>
            {errors?.email?.message ? (
              <span className="msg_error">{errors.email?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Tel/Cel
              </label>
              <input
                type="text"
                className="campos"
                placeholder="Tel/Cel do usuário..."
                {...register("tel_cel")}
                defaultValue={user.tel_cel}
              />
            </div>
            {errors?.tel_cel?.message ? (
              <span className="msg_error">{errors.tel_cel?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="container_campos">
            <div className="container_intern_camp">
              <label htmlFor="" className="label_campos">
                Perfil
              </label>
              <select
                className="campos"
                {...register("perfil")}
                defaultValue={user.perfil}
              >
                <option value="Admin">Admin</option>
                <option value="Operador">Operador</option>
                <option value="Gestor">Gestor</option>
                <option value="UserAdm">UserAdm</option>
              </select>
              {/* <input type="text" className="campos" placeholder="Perfil do usuário..." {...register("perfil")} defaultValue={user.perfil}/> */}
            </div>
            {errors?.perfil?.message ? (
              <span className="msg_error">{errors.perfil?.message}</span>
            ) : (
              ""
            )}
          </div>
          <div className="btn_form_cadastro">
            <button
              onClick={() => setOpenModalEdit(!openModalEdit)}
              className="btn fechar"
            >
              Fechar
            </button>
            <input className="btn salvar" type="submit" value="Salvar" />
          </div>
        </form>
      )}
    </ModalFormCadastroStl>
  );
}

export default ModalFormCadastro;
