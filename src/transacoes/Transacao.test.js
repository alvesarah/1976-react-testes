import React from "react";
import { render } from "@testing-library/react";
import Transacoes from "./Transacoes";

describe("Componente Lista de Transações do extrato", () => {
  it("O snapshot deve sempre permanecer o mesmo", () => {
    const transacoes = [
      {
        id: 1,
        transacao: "saque",
        tipo: "saque",
        valor: "10",
        data: "01/01/2020",
      },
      {
        id: 2,
        transacao: "deposito",
        tipo: "deposito",
        valor: "10",
        data: "01/01/2020",
      },
    ];
    const { container } = render(<Transacoes transacoes={transacoes} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
