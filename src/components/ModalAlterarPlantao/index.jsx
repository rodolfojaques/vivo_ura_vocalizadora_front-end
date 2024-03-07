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
    alterarPlantao,
    setAlterarPlantao,alterarPlantaoPagUser, setAlterarPlantaoPagUser
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
    .catch(err => console.error(err))
  },[setDateTurns,setDateTurnsOld])

  const handleDateChange = (date) => {
    
    const newDateTurn = {
      dia: date,
      turno: "",
    };
    setDateTurns([...dateTurns, newDateTurn]);
    setDateTurnsSubmmit([...dateTurnsSubmmit, newDateTurn]);
  };

  const handleTurnChange = (event, index) => {
    const updatedDateTurns = [...dateTurns];
    updatedDateTurns[index].turno = event.target.value;
    setDateTurns(updatedDateTurns);
  };

  const handleTurnChangeSub = (event, index) => {
    const updatedDateTurnsSub = [...dateTurnsSubmmit];
    updatedDateTurnsSub[(!!dateForDelete? (index + 1) - dateTurns.length : index - dateTurnsOld.length)].turno = event.target.value;
    setDateTurnsSubmmit(updatedDateTurnsSub);
  };

  const removeDateTurn = (index) => {
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
      .catch(err => console.log(err))      
    })

    dateTurnsSubmmit.forEach((data)=>{

      const data2 = new Date(data.dia.toDateString())
      data.dia = data2.toISOString()
      
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
      .catch(err => console.log(err))
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
          <p>Para alterar o plantão, selecione uma data e um turno.</p>
          <Calendar onChange={handleDateChange} />
          <section className="list-datas">
            {dateTurns?.map((dateTurn, index) => (
              <div className="div-datas" key={index} id={dateTurn?.id}>
                <p>
                  Data: {new Date(dateTurn.dia).toLocaleDateString()}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      datasForDelete(e.target.parentNode.parentNode.id);
                      removeDateTurn(index);
                    }}
                    className="btn remover"
                  >
                    Remover
                  </button>
                </p>
                {
                  !!dateTurn.id ? 
                  <div className="info_turn">
                    <p className="turn">
                      Turno: {dateTurn.turno}
                    </p>
                  </div>
                  :
                  <div className="div-select-turn">
                    <label>Selecione o turno:</label>
                    <select
                      default={"T3"}
                      onChange={(event) => {
                        handleTurnChange(event, index)
                        handleTurnChangeSub(event, index)
                      }}
                    >
                      <option value="T3">Selecione...</option>
                      <option value="T1">T1</option>
                      <option value="T2">T2</option>
                      <option value="T3">T3</option>
                    </select>
                  </div>                  
                }
              </div>
            ))}
          </section>
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
