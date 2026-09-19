import { render, screen, fireEvent } from "@testing-library/react";
import { ListaTarefas } from "@/components/ListaTarefas";
import type { Tarefa } from "@/lib/tarefas";

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Tarefa 1" },
  { id: 2, titulo: "Tarefa 2" },
];

describe("ListaTarefas", () => {
  it("adiciona uma tarefa e atualiza o contador", () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();

    const input = screen.getByLabelText("Nova tarefa");
    fireEvent.change(input, { target: { value: "Tarefa 3" } });
    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 3")).toBeInTheDocument();
  });

  it("remove uma tarefa e atualiza o contador", () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    const botoesRemover = screen.getAllByRole("button", { name: "Remover" });
    fireEvent.click(botoesRemover[0]);

    expect(screen.getByText("Total de tarefas: 1")).toBeInTheDocument();
    expect(screen.queryByText("Tarefa 1")).not.toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
  });
});