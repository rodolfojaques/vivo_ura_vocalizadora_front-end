import { FormModal, ModalContainer, ModalWrapper, TitleModal } from "./styles";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../providers/user";
import axios from "axios";


function ModalAlterarPlantao({ idUser }) {
  const [dateTurns, setDateTurns] = useState([]);

  const {
    baseURL,
    usuario,
    alterarPlantao,
    setAlterarPlantao
  } = useContext(UserContext)

  idUser = idUser || usuario.user.id

  useEffect(()=>{
    axios.get(`${baseURL}/usuario/${idUser}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usuario?.token}`
        }}
    )
    .then(res => {
        console.log(res.data)

        res.data.datas.map(data => {
          setDateTurns([...dateTurns,{date: new Date(data.dia), turn: data.turno}])
        })
    })
    .catch(err => console.error(err))
  },[])

  const handleDateChange = (date) => {

    const newDateTurn = {
      date: date,
      turn: "",
    };
    setDateTurns([...dateTurns, newDateTurn]);
  };

  const handleTurnChange = (event, index) => {
    const updatedDateTurns = [...dateTurns];
    updatedDateTurns[index].turn = event.target.value;
    setDateTurns(updatedDateTurns);
  };

  const removeDateTurn = (index) => {
    dateTurns.splice(index, 1);
    setDateTurns([...dateTurns]);
  };

  const createPlantoes = () => {
    console.log(dateTurns);

    dateTurns.map(data => {

      axios.post(`${baseURL}/datas/register/${idUser}`,{dia:data.date, turno:data.turn},{
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${usuario?.token}`
          }})
      .then(res => console.log(res))
      .catch(err => console.log(err))      
    })
  }

  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>Alterar plantões</h2>
          <span onClick={() => setAlterarPlantao(!alterarPlantao)}>X</span>
        </TitleModal>
        <FormModal>
          <p>Para alterar o plantão, selecione uma data e um turno.</p>
          <Calendar onChange={handleDateChange} />
          <section className="list-datas">
            {dateTurns.map((dateTurn, index) => (
              <div className="div-datas" key={index}>
                <p>
                  Data: {dateTurn.date.toLocaleDateString()}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeDateTurn(index);
                    }}
                    className="btn remover"
                  >
                    Remover
                  </button>
                </p>

                <div className="div-select-turn">
                  <label>Selecione o turno:</label>
                  <select
                    value={dateTurn.turn}
                    onChange={(event) => handleTurnChange(event, index)}
                  >
                    <option value="T1">T1</option>
                    <option value="T2">T2</option>
                    <option value="T3">T3</option>
                  </select>
                </div>
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
