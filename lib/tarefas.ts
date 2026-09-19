export interface Tarefa {
  id: number;
  titulo: string;
}

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Configurar o projeto" },
  { id: 2, titulo: "Escrever os testes" },
  { id: 3, titulo: "Revisar o código" },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasIniciais);
}