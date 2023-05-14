import { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { CarrinhoContext } from "./CarrinhoContext";
import "./carrinho.css";

const CarrinhoComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const carrinhoContext = useContext(CarrinhoContext);
  const { meuCarrinho, removerItem } = carrinhoContext || {};

  useEffect(() => {
    // Adicione o código desejado aqui para lidar com as alterações no meuCarrinho
  }, [meuCarrinho]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const calcularValorTotal = () => {
    let total = 0;
    for (const item of meuCarrinho || []) {
      total += item.quantidade * (item.produto?.preco || 0);
    }
    return total;
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn btn-success">
        {modalIsOpen ? "Fechar Carrinho" : "Carrinho"}
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        overlayClassName="carrinho-overlay"
        className="carrinho-modal"
        contentLabel="Carrinho"
        ariaHideApp={false}
      >
        {meuCarrinho.length === 0 ? (
          <div>
            <p>O carrinho está vazio.</p>
          </div>
        ) : (
          <div>
            <h2>Meu Carrinho</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {meuCarrinho.map((item, index) => (
                  <tr key={index}>
                    <td>{item.produto?.nome}</td>
                    <td>{item.quantidade}</td>
                    <td>
                      R$ {(item.produto?.preco * item.quantidade).toFixed(2)}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removerItem(index)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Valor Total: R$ {calcularValorTotal().toFixed(2)}</p>
            <button className="btn btn-success">Finalizar Compra</button>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default CarrinhoComponent;
