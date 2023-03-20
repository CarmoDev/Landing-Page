import Details from "../Details";
import { Container } from "./styles";

export default function FAQ() {
  return (
    <Container>
      <Details 
        header="Como uma solução digital pode ajudar minha empresa?"
      >
        <p>
          <strong>Aumento de vendas:</strong> Segundo uma pesquisa realizada pelo portal E-commerce brasil, 64% das pessoas preferem comprar de forma online, ou seja a cada 100 dos seus    potenciais clientes 64 vão buscar o produto primeiro na internet, e caso você não esteja lá, eles vão comprar do concorrente.
          <br/>
          <br/>
          <strong>Maior alcance:</strong> Mais pessoas terão acesso e conheceram sua loja, trazendo assim uma maior quantidade de clientes.
        </p>
      </Details>

      <Details 
        header="O que é análise de dados?"
      >
        Análise de dados é o processo de analisar dados usando estatística e a utilização de modelos de aprendizado de máquina para gerar previsões de dados.
      </Details>

      <Details 
        header="A manutenção é paga?"
      >
        Entendemos como a visão de uma empresa pode estar em constante atualização e por esse motivo oferecemos 1 ano de manutenção gratuita após a entrega do site.
      </Details>

      <Details 
        header="Quanto custa para criar um site ou aplicativo?"
      >
        Assim como nossas soluções os preços também são relativos e baseados no tipo de software à ser desenvolvido dessa forma garantido um preço justo.
      </Details>
    </Container>
  );
}