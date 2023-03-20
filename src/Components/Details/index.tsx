/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Container } from "./styles";

interface DetailsProps {
  header: string,
  children: string | JSX.Element | JSX.Element[],
}

export default function Details({header, children}: DetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(prevState => prevState === true ? false : true);
  }

  return (
    <Container>
      <div role="button" onClick={handleOpen}>
        <h2 className={isOpen ? "ativo" : ""}>➤</h2>
        <h1>{header}</h1>
      </div>

      {isOpen && (
        <div className="detail">
          {children}
        </div>
      )}
    </Container>
  );
}