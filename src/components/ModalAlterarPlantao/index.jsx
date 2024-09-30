import { FormModal, ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";
import { date } from "yup";
import { log } from "react-to/Logger";

function ModalAlterarPlantao({ idUser }) {
  const {
    baseURL,
    usuario,
    usuarioClicado,
    setUsuarioClicado,
    setAlterarPlantao, setAlterarPlantaoPagUser
  } = useContext(UserContext)

  const [dateTurnsSubmmit, setDateTurnsSubmmit] = useState([]);
  const [dateForDelete, setDateForDelete] = useState([]);
  const [dateTurns, setDateTurns] = useState(usuarioClicado?.datas);
  const [dateTurnsOld, setDateTurnsOld] = useState(usuarioClicado?.datas);
  
  idUser = idUser || usuario.user.id

  useEffect(()=>{
    axios.get(`${baseURL}/usuario/${idUser}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usuario?.token}`
        }}
    )
    .then(res => {
        setUsuarioClicado(res.data)
        setDateTurns(res.data.datas)
        setDateTurnsOld(res.data.datas)
    })
    .catch(err => {
      console.error(err)
      toast.error("Erro ao buscar usuários!");
    })
  },[setDateTurns,setDateTurnsOld])

  const handleDateChange = (date) => {
    console.log('date',date);
    
    const newDateTurn = {
      dtInicio: date[0].toISOString(),
      dtFim: date[1].toISOString(),
    };
    setDateTurns([...dateTurns, newDateTurn]);
    setDateTurnsSubmmit([...dateTurnsSubmmit, newDateTurn]);

    console.log('dateTurns',dateTurns);
  };

  /**
   * TODO:
   * logica de setar os horarios deve ser alterada para o array.reverse()
   */

  const handleTurnChangeSub = (event, index) => {
    
    console.log('index',index);
    const updatedDateTurnsSub = [...dateTurnsSubmmit];
    const inicio = updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)].dtInicio


    const dt = updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)]


    updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)].dtInicio = (
      `${inicio.slice(0,11)}${event}${inicio.slice(16)}`
    )

    console.log('dt',dt);
    console.log('inicio',inicio);
    console.log(updatedDateTurnsSub);
    

    // setDateTurnsSubmmit(updatedDateTurnsSub);
  };

  const handleTurnFimChangeSub = (event, index) => {
    
    console.log('index',index);
    const updatedDateTurnsSub = [...dateTurnsSubmmit];
    const fim = updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)].dtFim


    const dt = updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)]

    updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)].dtFim = (
      `${fim.slice(0,11)}${event}${fim.slice(16)}`
    )

    console.log('dt',dt);
    console.log('fim',fim);
    console.log(updatedDateTurnsSub);
    

    // setDateTurnsSubmmit(updatedDateTurnsSub);
  };

  const removeDateTurn = (index) => {
    const dtt = dateTurns[index]
    dateTurnsSubmmit.forEach((dt,i)=>{
      if(dtt.dtInicio === dt.dtInicio && dtt.dtFim === dt.dtFim){
        dateTurnsSubmmit.splice(i, 1);
      }
    });
    
    dateTurns.splice(index, 1);
    setDateTurns([...dateTurns]);
  };

  const datasForDelete = (idData) => {
    if(!!idData) setDateForDelete(prevState=> [
      ...prevState,idData
    ])
  }

  const createPlantoes = () => {
    dateForDelete?.forEach(id => {
      axios.delete(`${baseURL}/datas/delete/${id}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usuario?.token}`
        }})
      .then(res => {
        toast.success("Plantões removidos com sucesso!")
        setAlterarPlantao(false)
        setAlterarPlantaoPagUser(false)
      })
      .catch(err => {
        console.error("Erro ao criar plantão.",err)
        toast.error("Erro ao criar plantão.")
      })      
    })

    dateTurnsSubmmit.forEach((data)=>{
      
      data.dtInicio = new Date(data.dtInicio)
      data.dtFim = new Date(data.dtFim)
      
      data.dtInicio.setHours(data.dtInicio.getHours() + 3)
      data.dtFim.setDate(data.dtFim.getDate() - 1)
      data.dtFim.setHours(data.dtFim.getHours() + 3)
      
      axios.post(`${baseURL}/datas/register/${idUser}`,data,{
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${usuario?.token}`
          }})
      .then(res => {
        toast.success("Plantões adicionados com sucesso!")
        setAlterarPlantao(false)
        setAlterarPlantaoPagUser(false)
      })
      .catch(err => {
        console.error("Erro ao submeter datas de plantão",err)
        toast.error("Erro ao submeter datas de plantão")
      })
    })    
  }

  return (
    <ModalWrapper className="div_fechar" onClick={(e)=>{if(e.target.className.includes("div_fechar")) {setAlterarPlantao(false);setAlterarPlantaoPagUser(false)}}}>
      <ModalContainer>
        <TitleModal>
          <h2>Alterar plantões</h2>
          <span onClick={() => {
            setAlterarPlantao(false)
            setAlterarPlantaoPagUser(false)
          }}>X</span>
        </TitleModal>
        <FormModal>
          <div className="container">
            <Calendar 
              onChange={handleDateChange}
              selectRange={true}
            />
            <section className="list-datas">
              {dateTurns?.map((dateTurn, index) => (
                <div key={index} id={dateTurn?.id} className="items">
                  <div className="subitems">
                    <div className="div-datas">
                      <p>
                        Início: <span className="value">{new Date(dateTurn.dtInicio).toLocaleDateString()}</span> 
                      </p>
                      {
                        !!dateTurn.id ? 
                        <div className="info_turn">
                          <p className="turn">
                            Hora: <span className="value">{new Date(dateTurn.dtInicio).toLocaleTimeString()}</span>
                          </p>
                        </div>
                        :
                        <div className="div-select-turn">
                          <label>Hora:</label>
                          <input type="time" className="time-input" onChange={(e)=> handleTurnChangeSub(e.target.value, index)}/>
                        </div>                  
                      }
                    </div>
                    <div className="div-datas">
                      <p>
                        Fim: <span className="value">{new Date(dateTurn.dtFim).toLocaleDateString()}</span> 
                      </p>
                      {
                        !!dateTurn.id ? 
                        <div className="info_turn">
                          <p className="turn">
                            Hora: <span className="value">{new Date(dateTurn.dtFim).toLocaleTimeString()}</span>
                          </p>
                        </div>
                        :
                        <div className="div-select-turn">
                          <label>Hora:</label>
                          <input type="time" className="time-input" onChange={(e)=> handleTurnFimChangeSub(e.target.value, index)}/>
                        </div>                  
                      }
                    </div>                     
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('e.target.parentNode.id',e.target.parentNode.id);
                      
                      datasForDelete(e.target.parentNode.id);
                      removeDateTurn(index);
                    }}
                    className="btn remover"
                  >
                    Remover
                  </button>               
                </div>
              )).reverse()}
            </section>            
          </div>

          <div className="div-buttons">
            <button onClick={(e)=> {
              e.preventDefault()
              createPlantoes()
              }} className="btn alterar" type="submit">
              Alterar
            </button>
            <button className="btn cancelar">Cancelar</button>
          </div>
        </FormModal>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalAlterarPlantao;
