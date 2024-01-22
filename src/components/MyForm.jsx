import { useState } from "react";
import "./MyForm.css"
useState
export const MyForm = ({userName,userEmail}) => {
    //3 gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const handleName = (e) => {
        setName(e.target.value)
    }
    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email)
    }

    console.log(name, email)

    //validação
    //envio
  return (
    <div>
      {/* 1 - Criação de Form */}
      {/* 5 - envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="Digite seu nome..."
            onChange={handleName}
            // 6 - controlled input
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Digite seu email..."
            // 4 - simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled input
            value={email || ""}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
