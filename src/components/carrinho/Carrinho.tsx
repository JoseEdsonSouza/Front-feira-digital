import { useState } from "react";
import ReactModal from "react-modal";
import "./carrinho.css";

const Carrinho = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        {modalIsOpen ? "Fechar Carrinho" : "Abrir Carrinho"}
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        overlayClassName="carrinho-overlay"
        className="carrinho-modal"
        contentLabel="Carrinho"
        ariaHideApp={false}
      >
        <h2>Meu Carrinho</h2>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <button onClick={toggleModal}>
        {modalIsOpen ? "Fechar Carrinho" : "Abrir Carrinho"}
      </button>
      </ReactModal>
    </div>
  );
};

export default Carrinho;
