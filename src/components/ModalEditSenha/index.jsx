import ModalEditSenhaStl from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

function ModalEditSenha() {
  const { baseURL, usuario, editSenha, setEditSenha } = useContext(UserContext);

  const schema = yup.object().shape({
    password: yup.string().required("Informe uma senha"),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSchema = (data) => {
    console.log(data.password);
    axios
      .patch(
        `${baseURL}/usuario/update/${usuario?.user?.id}`,
        {
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usuario?.token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Senha alterada com sucesso!");
        setEditSenha(!editSenha);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalEditSenhaStl>
      <h2 className="title">Editar Senha</h2>
      <form onSubmit={handleSubmit(formSchema)} className="form_edit">
        <div className="container">
          <label htmlFor="" className="label_input">
            Nova Senha
          </label>
          <input
            type="password"
            className="input_senha"
            placeholder="Digite sua nova senha"
            {...register("password")}
          />
          {errors?.password?.message ? (
            <span className="error">{errors?.password?.message}*</span>
          ) : (
            <></>
          )}
        </div>
        <div className="container">
          <label htmlFor="" className="label_input">
            Confirme a Senha
          </label>
          <input
            type="password"
            className="input_senha"
            placeholder="Confirme sua nova senha"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword?.message ? (
            <span className="error">{errors?.confirmPassword?.message}*</span>
          ) : (
            <></>
          )}
        </div>
        <div className="btn_form_cadastro">
          <button
            onClick={() => setEditSenha(!editSenha)}
            className="btn fechar"
          >
            Fechar
          </button>
          <input className="btn salvar" type="submit" value="Salvar" />
        </div>
      </form>
    </ModalEditSenhaStl>
  );
}

export default ModalEditSenha;
