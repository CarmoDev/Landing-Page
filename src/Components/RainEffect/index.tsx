import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

export default function Rain() {
  const [rainCount] = useState(40);
  const [animationTiming] = useState();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (let index = 0; index < rainCount; index++) {
      const i = document.createElement("i");

      // Calcs
      const sizeX = Math.random() * 5;
      const sizeY = Math.random() * 300;
      const delay = Math.random() * 300;
      const posX = Math.floor(Math.random() * window.innerWidth);

      // Styles
      i.classList.add("rain");
      i.style.width = 0.2 + sizeX + "px";
      i.style.height = 0.2 + sizeY + "px";
      i.style.left = 0.2 + posX + "px";
      i.style.animationDelay = delay + "s";
      i.style.animationDuration = animationTiming + "s";

      // Sets and Appends
      i.style.setProperty("--height", "-" + sizeY + "px" );

      container.current?.appendChild(i);
    }
  }, []);

  return(
    <Container ref={container}>
    </Container>
  );
}
