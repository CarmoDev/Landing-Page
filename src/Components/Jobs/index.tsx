import Image from "next/image";

import { Container, JobContainer } from "./styles";

import Desktop from "../../Assets/Desktop.svg";
import Mobile from "../../Assets/Mobile.svg";
import Graphic from "../../Assets/Graphic.svg";

export default function Jobs() {
  return(
    <Container>
      <JobContainer>
        <Image
          src={Desktop}
          alt="Web"
          width={200}
          height={110}
          loading="lazy"
        />
        <p>Desenvolvimento de Websites</p>
      </JobContainer>

      <JobContainer>
        <Image
          src={Mobile}
          alt="Mobile"
          width={80}
          height={130}
          loading="lazy"
        />
        <p>Desenvolvimento de Aplicativos</p>
      </JobContainer>

      <JobContainer>
        <Image
          src={Graphic}
          alt="Graphics"
          width={90}
          height={100}
          loading="lazy"
        />
        <p>Análise de dados</p>
      </JobContainer>
    </Container>
  );
}
