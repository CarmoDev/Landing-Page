import { useState } from "react";
import { Container, StyledSwitch } from "./styles";

interface SwitchProps {
  firstOption: string,
  secondOption: string,
  children: string | JSX.Element | JSX.Element[],
  data: {
    name: string,
    message: string
  }
}

export default function Switch({firstOption, secondOption, children, data}: SwitchProps) {
  const [selectedOption, setSelectedOption] = useState(firstOption);

  function handleToggleSwitch() {
    setSelectedOption((prevState) => prevState === firstOption ? secondOption : firstOption);
  }

  function handleMakesClickAcessible(event: { keyCode: number; }) {
    if(event.keyCode === 13) { // The Enter/Return key
      document?.activeElement.click();
    }
  }

  const WhatsappAPI = `https://api.whatsapp.com/send?phone=5511953595335&text=Meu nome é ${data.name}, ${data.message}`;
  const sendEmail = `mailto:carmodev01@gmail.com?subject=Olá sou o ${data.name}&body=${data.message}`;

  return (
    <>
      <Container>
        <span className={selectedOption === firstOption ? "ativo" : ""}>{firstOption}</span>

        <StyledSwitch
          role="button"
          aria-label="Switch"
          aria-labelledby="Switch"
          tabIndex={0}
          onClick={handleToggleSwitch}
          onKeyDown={handleMakesClickAcessible}
        >
          <div className={selectedOption === firstOption ? "" : "second"} />
        </StyledSwitch>

        <span  className={selectedOption === secondOption ? "ativo" : ""}>{secondOption}</span>
      </Container>

      {children}

      <button type="button">
        <a href={selectedOption === firstOption ? WhatsappAPI : sendEmail} target="_blank" rel="noreferrer">
            Enviar
        </a>
      </button>
    </>
  );
}
