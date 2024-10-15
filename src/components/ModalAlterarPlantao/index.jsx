import { FormModal, ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../providers/user";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [setarDT, setSetarDT] = useState(true);

  const [newDateTurn, setNewDateTurn] = useState({})
  
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
    
    setNewDateTurn({
      dtInicio: date[0].toISOString(),
      dtFim: date[1].toISOString(),
    });

    setDateTurns([...dateTurns, newDateTurn]);
    setDateTurnsSubmmit([...dateTurnsSubmmit, newDateTurn]);

    console.log('dateTurns',dateTurns);
  };

  const turnChangeSubInicio = (e,dt) => {
    dt.dtInico = `${dt.dtInico.slice(0,11)}${e}${dt.dtInico.slice(16)}`
  }

  const turnChangeSubFim = (e,dt) => {
    dt.dtFim = `${dt.dtFim.slice(0,11)}${e}${dt.dtFim.slice(16)}`
  }

  const turnChangeSub = () => {
    
  }

  const handleTurnChangeSub = (event, index) => {
    const updatedDateTurnsSub = [...dateTurnsSubmmit.sort((a,b)=> new Date(b?.dtInicio?.slice(0,10)) - new Date(a?.dtInicio?.slice(0,10)))];

    const inicio = updatedDateTurnsSub[index].dtInicio

    updatedDateTurnsSub[index].dtInicio = (
      `${inicio.slice(0,11)}${event}${inicio.slice(16)}`
    )
  };

  const handleTurnFimChangeSub = (event, index) => {
    const updatedDateTurnsSub = [...dateTurnsSubmmit.sort((a,b)=> new Date(b?.dtInicio?.slice(0,10)) - new Date(a?.dtInicio?.slice(0,10)))];
    const fim = updatedDateTurnsSub[index].dtFim

    updatedDateTurnsSub[index].dtFim = (
      `${fim.slice(0,11)}${event}${fim.slice(16)}`
    )
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

  const createPlantoes = async () => {
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
    
    dateTurnsSubmmit.forEach(async(data)=>{
      
      data.dtInicio = new Date(data.dtInicio)
      data.dtFim = new Date(data.dtFim)
      
      await data.dtInicio.setHours(data.dtInicio.getHours() + 3)
      await data.dtFim.setDate(data.dtFim.getDate() - 1)
      await data.dtFim.setHours(data.dtFim.getHours() + 3)
      
      await axios.post(`${baseURL}/datas/register/${idUser}`,data,{
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
    console.log('dateTurnsSubmmit',dateTurnsSubmmit);
      
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
              {dateTurns?.sort((a,b)=> new Date(b?.dtInicio?.slice(0,10)) - new Date(a?.dtInicio?.slice(0,10)))?.map((dateTurn, index) => (
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
                    type="button"
                  >
                    Remover
                  </button>               
                </div>
              ))}
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
        {
          setarDT?
            <div className="fundo">
              <div className="cont">
                <div className="div-datas">
                  <p>
                    Início: <span className="value">{new Date(newDateTurn.dtInicio).toLocaleDateString()}</span> 
                  </p>
                  <div className="div-select-turn">
                    <label>Hora:</label>
                    <input type="time" className="time-input" onChange={(e)=> turnChangeSubInicio(e.target.value, newDateTurn)}/>
                  </div>  
                </div>
                <div className="div-datas">
                  <p>
                    Fim: <span className="value">{new Date(newDateTurn.dtFim).toLocaleDateString()}</span> 
                  </p>
                  <div className="div-select-turn">
                    <label>Hora:</label>
                    <input type="time" className="time-input" onChange={(e)=> turnChangeSubFim(e.target.value, newDateTurn)}/>
                  </div> 
                </div>                
              </div>                              
            </div> : <></>
        }
        </FormModal>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalAlterarPlantao;
