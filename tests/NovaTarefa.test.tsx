import { render, screen, fireEvent } from "@testing-library/react";
import { NovaTarefa } from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("renderiza o campo e o botão", () => {
    render(<NovaTarefa onAdicionar={() => {}} />);

    expect(screen.getByLabelText("Nova tarefa")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeInTheDocument();
  });

  it("chama on Adicionar com o título digitado ao enviar o formulário", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText("Nova tarefa");
    fireEvent.change(input, { target: { value: "Estudar testes" } });
    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(onAdicionar).toHaveBeenCalledWith("Estudar testes");
    expect(input).toHaveValue("");
  });

  it("não chama onAdicionar quando o campo está vazio", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(onAdicionar).not.toHaveBeenCalled();
  });
});