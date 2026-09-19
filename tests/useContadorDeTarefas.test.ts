import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/lib/tarefas";

describe("useContadorDeTarefas", () => {
  it("retorna 0 quando não há tarefas", () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));

    expect(result.current).toBe(0);
  });

  it("retorna a quantidade correta de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Tarefa 1" },
      { id: 2, titulo: "Tarefa 2" },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toBe(2);
  });
});