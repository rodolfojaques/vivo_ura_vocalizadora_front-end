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

  const [dateForDelete, setDateForDelete] = useState([]);
  const [dateTurns, setDateTurns] = useState(usuarioClicado?.datas);

  const [setarDT, setSetarDT] = useState(false);

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
    })
    .catch(err => {
      console.error(err)
      toast.error("Erro ao buscar usuários!");
    })
  },[setDateTurns,newDateTurn])

  const handleDateChange = (date) => {
    console.log('date',date);
    
    setNewDateTurn({
      dtInicio: date[0].toISOString(),
      dtFim: date[1].toISOString(),
    });

    setSetarDT(true);

    console.log('dateTurns',dateTurns);
  };

  const turnChangeSubInicio = (e) => {

    setNewDateTurn({
      dtInicio: `${newDateTurn.dtInicio.slice(0,11)}${e}${newDateTurn.dtInicio.slice(16)}`,
      dtFim: newDateTurn.dtFim
    });
    
  }

  const turnChangeSubFim = (e) => {

    setNewDateTurn({
      dtInicio: newDateTurn.dtInicio,
      dtFim: `${newDateTurn.dtFim.slice(0,11)}${e}${newDateTurn.dtFim.slice(16)}`,
    });

    console.log('newDateTurn =>>',newDateTurn);
  }

  const removeDateTurn = (index) => {
    dateTurns.splice(index, 1);
    setDateTurns([...dateTurns]);
  };

  const datasForDelete = (idData) => {
    if(!!idData) setDateForDelete(prevState=> [
      ...prevState,idData
    ])
  }

  const createPlantoes = async (data) => {
    dateForDelete?.forEach(id => {
      axios.delete(`${baseURL}/datas/delete/${id}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usuario?.token}`
        }})
      .then(res => {
        toast.success("Plantões removidos com sucesso!")
        setDateForDelete([])
      })
      .catch(err => {
        console.error("Erro ao criar plantão.",err)
        toast.error("Erro ao criar plantão.")
      })      
    })  
    
    if(!!data.dtInicio && !!data.dtFim){
      
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
        toast.success("Plantão adicionado com sucesso!")
        setNewDateTurn({})
      })
      .catch(err => {
        console.error("Erro ao submeter datas de plantão",err)
        toast.error("Erro ao submeter datas de plantão")
        setNewDateTurn({})
      })
    }
      
  }

  const turnChangeSub = async () => {
    await createPlantoes(newDateTurn);

    setSetarDT(false);    
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
                        <div className="info_turn">
                          <p className="turn">
                            hora: <span className="value">{new Date(dateTurn.dtInicio).toLocaleTimeString()}</span>
                          </p>
                        </div>
                    </div>
                    <div className="div-datas">
                      <p>
                        Fim: <span className="value">{new Date(dateTurn.dtFim).toLocaleDateString()}</span> 
                      </p> 
                        <div className="info_turn">
                          <p className="turn">
                            hora: <span className="value">{new Date(dateTurn.dtFim).toLocaleTimeString()}</span>
                          </p>
                        </div>
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
              createPlantoes({})
              setAlterarPlantao(false)
              setAlterarPlantaoPagUser(false)
              }} 
              className="btn alterar" 
              type="submit"
            >
              Alterar
            </button>
            <button className="btn cancelar"
              onClick={() => {
                setNewDateTurn({})
                setAlterarPlantao(false)
                setAlterarPlantaoPagUser(false)
              }}
            >Cancelar</button>
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
                    <label className="hr">hora:</label>
                    <input type="time" className="time-input" onChange={(e)=> turnChangeSubInicio(e.target.value)}/>
                  </div>  
                </div>
                <div className="div-datas">
                  <p>
                    Fim: <span className="value">{new Date(newDateTurn.dtFim).toLocaleDateString()}</span> 
                  </p>
                  <div className="div-select-turn">
                    <label className="hr">hora:</label>
                    <input type="time" className="time-input" onChange={(e)=> turnChangeSubFim(e.target.value)}/>
                  </div> 
                </div>
                <div className="div-datas">
                  <button
                    className="btn cancelar"
                    type="button"
                    onClick={() => {
                      setNewDateTurn({})
                      setSetarDT(false);
                    }}
                  >
                    Cancelar
                  </button> 
                  <button
                    onClick={() => {
                      turnChangeSub();                      
                    }}
                    className="btn alterar"
                    type="button"
                  >
                    Adicionar
                  </button>  
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
