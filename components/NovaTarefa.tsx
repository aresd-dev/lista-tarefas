"use client";

import { useState, FormEvent } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();
    if (!tituloLimpo) {
      return;
    }

    onAdicionar(tituloLimpo);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo-tarefa">Nova tarefa</label>
      <input
        id="titulo-tarefa"
        type="text"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}