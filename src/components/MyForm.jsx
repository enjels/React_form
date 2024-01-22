import { useState } from "react";
import "./MyForm.css"
useState
export const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
  return (
    <div>
      {/* {1 - Criação de Form} */}
      <form action="">
        <div>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" placeholder="Digite seu nome..." />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input type="email" name="Email" id="Email" placeholder="Digite seu email..." />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
