import { useState } from "react";
import "./MyForm.css";
useState;
export const MyForm = ({ userName, userEmail }) => {
  //3 gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // 5 - envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
      setBio("");
      setRole("");
  };

  console.log(name, email, bio,role);

  //validação
  //envio

  // 7 - limpar form

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
        {/* 8 - textarea */}
        <label>
          <span></span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adimin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
