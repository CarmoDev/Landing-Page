import { SetStateAction, useState } from "react";

import { Container, Title, ContactInfo } from "./styles";
import Switch from "../Switch";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(event: { target: { value: SetStateAction<string>; }; }) {
    setName(event.target.value);
  }

  function handleMessageChange(event: { target: { value: SetStateAction<string>; }; }) {
    setMessage(event.target.value);
  }

  const formData = {
    name,
    message
  };

  return (
    <Container id="Contato">
      <Title>
        <h1>
        Dúvidas sobre como  podemos ajudar seu negócio ou deseja fazer um orçamento? Entre em contato conosco através do formulário e um especialista lhe responderá em até 24hrs.
        </h1>
      </Title>


      <ContactInfo>
        <Switch
          firstOption="Whatsapp"
          secondOption="E-mail"
          data={formData}
        >
          <>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleNameChange}
            />

            <textarea
              placeholder="Mensagem"
              value={message}
              onChange={handleMessageChange}
            />
          </>
        </Switch>
      </ContactInfo>
    </Container>
  );
}
