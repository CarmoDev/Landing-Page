import Review from "./Review";
import { Container, Clients } from "./styles";

const Mocks = [
  {
    id: 1,
    name: "RVS",
    review: "Lorem ipsum dolor sit amet consectetur. Enim ac justo sem viverra at convallis duis semper. Ullamcorper ut donec sollicitudin purus praesent duis. Tristique mauris sit dolor id massa ac nunc. Facilisis vulputate vel morbi turpis elementum."
  },
  {
    id: 2,
    name: "IMÃ",
    review: "Lorem ipsum dolor sit amet consectetur. Venenatis feugiat ultrices posuere eleifend ultrices lacus molestie pellentesque elementum. Vulputate habitant pretium ipsum velit feugiat elementum est gravida in. Ut aliquet risus risus a. Amet commodo neque vitae nunc. Ipsum nec fusce tristique pulvinar mauris laoreet vitae at. Etiam ac cras id eu praesent porttitor dolor. Leo massa vivamus leo donec faucibus proin. Nisi tortor lacus eget in enim aliquam tincidunt. Justo egestas ornare aenean dui maecenas a lobortis. Iaculis netus leo ut consequat risus. Ac facilisi cras consectetur pharetra congue cras duis. Laoreet luctus turpis adipiscing suspendisse lacus lorem quis."
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
