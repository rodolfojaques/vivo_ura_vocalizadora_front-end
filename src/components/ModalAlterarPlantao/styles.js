import styled, { keyframes } from "styled-components";

export const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  border-radius: 8px;

  animation: ${slideDown} 1s ease-in-out;

  @media (min-width: 768px) {
    width: 450px;
    height: auto;
  }
`;

export const TitleModal = styled.header`
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  background-color: purple;
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 18px;
    color: white;
  }

  span {
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 14px;
  padding-top: 20px;
  height: auto;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 2px solid var(--gray-0);

  p {
    font-weight: 600;
    margin-bottom: 16px;
  }

  .btn {
    border-style: none;
    border-radius: 5px;

    width: 6rem;
    height: 2.5rem;

    font-size: small;
    font-weight: bold;

    color: white;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }
  }

  .remover {
    width: 5rem;
    height: 24px;
    background-color: red;
  }

  .alterar {
    background-color: purple;
  }

  .cancelar {
    background-color: gray;
  }

  .list-datas {
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    margin-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .div-datas {
    margin-top: 12px;
    margin-bottom: 18px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 600;
    }
  }

  .div-select-turn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    label {
      font-size: 18px;
    }
  }

  select {
    width: 50%;
    height: 2rem;
    padding-left: 0.5rem;
    border-style: none;
    border: solid gray;
    border-radius: 5px;
  }

  .div-buttons {
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 4px;
  }
`;
