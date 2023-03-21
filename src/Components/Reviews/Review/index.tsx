import Dummy from "../../../Assets/Dummy.svg";
import { Container, User } from "./styles";
import Image from "next/image";

interface ReviewProps {
  comment: string,
  client: string,
}

export default function Review({comment, client}: ReviewProps) {
  return (
    <Container>
      <p>{comment}</p>

      <User>
        <Image src={Dummy} alt={client} loading="lazy" />
        {client}
      </User>
    </Container>
  );
}
