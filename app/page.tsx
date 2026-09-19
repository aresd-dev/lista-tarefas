import { buscarTarefas } from "@/lib/tarefas";
import { ListaTarefas } from "@/components/ListaTarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main>
      <h1>Lista de tarefas</h1>
      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  );
}