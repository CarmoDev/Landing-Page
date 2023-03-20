import Image from "next/image";

import { Container, JobContainer } from "./styles";

import Desktop from "../../Assets/Desktop.svg";
import Mobile from "../../Assets/Mobile.svg";
import Graphic from "../../Assets/Graphic.svg";

export default function Jobs() {
  return(
    <Container>
      <JobContainer>
        <Image src={Desktop} alt="Web" />
        <p>Desenvolvimento de Websites</p>
      </JobContainer>

      <JobContainer>
        <Image src={Mobile} alt="Mobile" />
        <p>Desenvolvimento de Aplicativos</p>
      </JobContainer>

      <JobContainer>
        <Image src={Graphic} alt="Graphics" />
        <p>Análise de dados</p>
      </JobContainer>
    </Container>
  );
}