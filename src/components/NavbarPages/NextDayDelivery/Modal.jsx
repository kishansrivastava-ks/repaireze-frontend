/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWindow = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;

  &:hover {
    color: #999;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    object-fit: cover;
    border-radius: 8px;
  }

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const Modal = ({ product, onClose }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalWindow>
        <CloseIcon onClick={onClose} />
        <ModalContent>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.details}</p>
        </ModalContent>
      </ModalWindow>
    </ModalOverlay>
  );
};

export default Modal;
