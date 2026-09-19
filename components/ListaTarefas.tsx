"use client";

import { useState } from "react";
import type { Tarefa } from "@/lib/tarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import { NovaTarefa } from "@/components/NovaTarefa";

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[];
}

export function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    setTarefas((atual) => [...atual, { id: Date.now(), titulo }]);
  }

  function removerTarefa(id: number) {
    setTarefas((atual) => atual.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <section>
      <p>Total de tarefas: {total}</p>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.titulo}</span>
            <button type="button" onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}