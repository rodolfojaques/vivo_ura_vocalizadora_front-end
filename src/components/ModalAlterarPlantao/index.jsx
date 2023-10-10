import { FormModal, ModalContainer, ModalWrapper, TitleModal } from "./styles";

function ModalAlterarPlantao({ setAlterarPlantao }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>Alterar plantões</h2>
          <span onClick={() => setAlterarPlantao(false)}>X</span>
        </TitleModal>
        <FormModal>
          <div>
            <label htmlFor="data-plantao">Selecione o plantão:</label>
            <select name="dias-plantao" id="dias-plantao">
              <option value="">00-00-00</option>
              <option value="27-02-2023">27-02-2023</option>
              <option value="27-04-2023">27-04-2023</option>
              <option value="27-06-2023">27-06-2023</option>
              <option value="27-08-2023">27-08-2023</option>
              <option value="27-12-2023">27-12-2023</option>
            </select>
          </div>

          <div className="div-radio">
            <label htmlFor="T1">Turno 1</label>
            <input type="radio" id="T1" name="plantao" value="T1" />
            <label htmlFor="T2">Turno 2</label>
            <input type="radio" id="T2" name="plantao" value="T2" />
            <label htmlFor="T3">Turno 3</label>
            <input type="radio" id="T3" name="plantao" value="T3" checked />
          </div>
          <div className="div-radio"></div>
          <div className="div-radio"></div>
        </FormModal>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalAlterarPlantao;
