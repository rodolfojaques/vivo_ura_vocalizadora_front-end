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
    width: 437px;
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
  padding: 14px;
  padding-top: 20px;
  height: auto;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 2px solid var(--gray-0);

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;

    label {
      font-size: 16px;
      font-weight: 600;
    }

    input,
    select {
      width: 60%;
      height: 2rem;

      padding-left: 0.5rem;

      border-style: none;
      border: solid gray;
      border-radius: 5px;
    }
  }

  .div-radio{
      margin-top: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      input[type="radio"] {
        width: 20px;
      }
    }

`;
