import { ModalCargaMassivaStl,BackgroundStl } from "./styles"
import { useContext } from "react";
import { UserContext } from "../../providers/user";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

function ModalCargaMassivaDL(){
    const { usuario, baseURL, openCargaMassivaDL, setOpenCargaMassivaDL } = useContext(UserContext)
    
    const {register, handleSubmit, formState: { errors }} = useForm({})

    const formSchema = async (data)=> {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        axios.post(`${baseURL}/carga-massiva/dl`, formData,
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
                setOpenCargaMassivaDL(!openCargaMassivaDL)
            }, 3000)
        })
        .catch(err=> toast.error("Erro no processo de carga massiva!"))
    }

    return (
        <BackgroundStl className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) setOpenCargaMassivaDL(!openCargaMassivaDL)}}>
            <ModalCargaMassivaStl onSubmit={handleSubmit(formSchema)}>
                <h2 className="title">Carga Massiva Grupos de Alarmes DL-TEMS</h2>
                <p className="text-info">
                    {`" Para realizar o processo de carga massiva de grupos e tipos de alarmes, é necessário que o arquivo CSV esteja no seguinte formato: \n`} 
                    <br />
                    <br />
                    <b>NOME_GRUPO,estadoSigla,manager,specificProblem,frontNetworkType,frontTypeTa,frontPlantType,frontTypeFailure</b>
                    <br />
                    O&M Z,RJ,U2020_,BAT. DESC.,Movel,Plataforma,movel,hardware
                    <br />
                    O&M Z,RJ,,BAT. DESC.,Movel,,movel, 
                    <br />
                    <br />
                    <span style={{color: "red"}}><b>{"Para valores que não serão declarados deixe o espaço em BRANCO mas respeite as virgulas (são 8 espaços, 7 vírgulas)"}</b></span>
                    <br />
                    <br />
                    {`Os campos do documento devem ser separados por vírgula, tanto "CABEÇALHO" quanto as "LINHAS", os`}
                    <br />
                    {`campos 'estadoSigla' e 'specificProblem' DEVEM ser preenchidos, o restante dos campos são opcionais. "`}
                </p>
                <form action="" className="form_carga_massiva">
                    <div className="line-input">
                        <label className="label-inputs" htmlFor="file">Selecione o arquivo CSV:</label>
                        <input className="inputs" type="file" name="file" id="file" accept=".csv" {...register("file")}/>
                    </div>
                    <div className="btn_form">
                        <button onClick={()=> setOpenCargaMassivaDL(!openCargaMassivaDL)} className="btn fechar">Fechar</button>
                        <input className="btn salvar" type="submit" value="Salvar" />
                    </div>    
                </form>                
            </ModalCargaMassivaStl>
        </BackgroundStl>
    )
}

export default ModalCargaMassivaDL