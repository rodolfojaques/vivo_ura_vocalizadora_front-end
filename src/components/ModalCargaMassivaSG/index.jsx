import { ModalCargaMassivaStl,BackgroundStl } from "./styles"
import { useContext } from "react";
import { UserContext } from "../../providers/user";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

function ModalCargaMassiva(){
    const { usuario, baseURL, openCargaMassiva, setOpenCargaMassiva } = useContext(UserContext);
    
    const {register, handleSubmit, formState: { errors }} = useForm({})

    const formSchema = async (data)=> {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        axios.post(`${baseURL}/carga-massiva/sg`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${usuario.token}`,
                },
            }
        )
        .then(resp=> {
            toast.success("Processo de carga massiva realizado com sucesso!")
            setTimeout(()=> {
                setOpenCargaMassiva(!openCargaMassiva)
            }, 3000)
        })
        .catch(err=> toast.error("Erro no processo de carga massiva!"))
    }

    return (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenCargaMassiva(!openCargaMassiva)}}>
            <ModalCargaMassivaStl onSubmit={handleSubmit(formSchema)}>
                <h2 className="title">Carga Massiva Grupos de Alarmes SG-Infra</h2>
                <p className="text-info">
                    <b>"</b>{` Para realizar o processo de carga massiva de grupos e tipos de alarmes, é necessário que o arquivo CSV esteja no seguinte formato: \n`} 
                    <br />
                    <br />
                    <b>NOME_GRUPO,UF,SITE,TIPO_ALARME,CLASSIFICACAO,LOCALIDADE</b>
                    <br />
                    O&M X,SP,ATP,BAT. DESC.,CRITICO,SPO
                    <br />
                    O&M Y,RJ,RBD,BAT. DESC.,MAJORITARIO,RJO
                    <br />
                    <br />
                    {`Os campos do documento devem ser separados por vírgula, tanto "CABEÇALHO" quanto as "LINHAS", e todos os campos DEVEM ser preenchidos. `}<b>"</b>
                </p>
                <form action="" className="form_carga_massiva">
                    <div className="line-input">
                        <label className="label-inputs" htmlFor="file">Selecione o arquivo CSV:</label>
                        <input className="inputs" type="file" name="file" id="file" accept=".csv" {...register("file")}/>
                    </div>
                    <div className="btn_form">
                        <button onClick={()=> setOpenCargaMassiva(!openCargaMassiva)} className="btn fechar">Fechar</button>
                        <input className="btn salvar" type="submit" value="Salvar" />
                    </div>    
                </form>                
            </ModalCargaMassivaStl>
        </BackgroundStl>
    )
}

export default ModalCargaMassiva