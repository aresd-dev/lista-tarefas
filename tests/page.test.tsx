import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renderiza a lista de tarefas carregada", async () => {
    const jsx = await Home();
    render(jsx);

    expect(screen.getByText("Lista de tarefas")).toBeInTheDocument();
    expect(screen.getByText("Configurar o projeto")).toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
  });
});