"use client";

import Image from "next/image";
import { Container, Content } from "./styles";

import Logotype from "../../Assets/Logotype.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <Content>
        <Image src={Logotype} alt="logotipo" width={400} height={250} priority />

        <h1>Leve sua empresa para um novo nível</h1>

        <p>somos especialistas em criar sites personalizados que atendem às suas necessidades exclusivas.</p>

        <Link href="#Contato">
          <button>
            Entrar em contato
          </button>
        </Link>
      </Content>
    </Container>
  );
}
