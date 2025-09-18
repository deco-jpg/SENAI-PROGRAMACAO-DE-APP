// src/pages/FaleConosco/index.jsx
import './style.css';

function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <section className="contato">
      <h1>Fale Conosco</h1>
      <p>Tire suas dúvidas e peça um orçamento sem compromisso.</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="grid cols-3">
          <label className="field">
            <span>E-mail:</span>
            <input type="email" placeholder='voce@email.com' required />
          </label>
        <label className="field">
            <span>Telefone: </span>
            <input type='tel' placeholder="(99) 99999-9999" required />
        </label>
        </div>
        <label className="field">
            <span>Mensagem: </span>
            <input type="mensagem" placeholder='Escreva sua mensagem aqui...' required />
        </label>
        <button className="btn primary" type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default FaleConosco;
