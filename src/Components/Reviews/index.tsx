import Review from "./Review";
import { Container, Clients } from "./styles";

const Mocks = [
  {
    id: 1,
    name: "RVS",
    review: "Atendimento impecável, bastante atencioso nas solicitações e entrega rápida do projeto foram os diferenciais desse trabalho."
  },
  {
    id: 2,
    name: "IMÃ",
    review: " Projeto exatamente como a empresa precisava e atendimento de qualidade! "
  },
];

export default function Reviews() {
  return (
    <Container>
      <h1>
        O Que os clientes estão dizendo:
      </h1>

      <Clients>
        {Mocks.map((client) => (
          <Review
            key={client.id}
            comment={client?.review}
            client={client?.name}
          />
        ))}
      </Clients>
    </Container>
  );
}
