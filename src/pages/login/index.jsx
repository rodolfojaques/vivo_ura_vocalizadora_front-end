import FormComponent from "../../components/Form";
import { LoginStl } from "./styles";

import logo from "../../assets/logoProv.png";
import * as Icon from "react-bootstrap-icons";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { baseURL, setUsuario } = useContext(UserContext);

  const schema = yup.object().shape({
    RE: yup.string().required("*Campo obrigatório"),
    password: yup.string().required("*Campo obrigatório"),
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
      .post(`${baseURL}/login`, data)
      .then((res) => {
        localStorage.setItem("usuario", JSON.stringify(res.data));
        setUsuario(res.data);
        toast.success("Login realizado com sucesso!");
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
        toast.error("RE ou senha incorretos!");
      });
  };

  return (
    <LoginStl>
      <img src={logo} className="logo_login" alt="" />
      <FormComponent title={"Login"} onSubmit={handleSubmit(formSchema)}>
        <form action="" className="formClass">
          <div className="inputs">
            <label htmlFor="" className="labelInput">
              <figure>
                <Icon.PersonVcardFill size={35} />
              </figure>
            </label>
            <div className="container_err">
              <input
                type="text"
                className="admin"
                placeholder="Insira seu usuário..."
                {...register("RE")}
              />
              {errors?.RE?.message ? (
                <span className="msg_error">{errors.RE?.message}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="inputs">
            <label htmlFor="" className="labelInput">
              <figure>
                <Icon.UnlockFill size={35} />
              </figure>
            </label>
            <div className="container_err">
              <input
                type="password"
                className="password"
                placeholder="Insira sua senha..."
                {...register("password")}
              />
              {errors?.password?.message ? (
                <span className="msg_error">{errors.password?.message}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <input type="submit" className="submit" value="Enter" />
        </form>
      </FormComponent>
      <span className="company">
        <Icon.CCircle size={16} /> Techsolutio 2023
      </span>
    </LoginStl>
  );
}

export default Login;
