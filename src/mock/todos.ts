export type tTodo = {
  name: string;
  status: "Todo" | "Completed";
  id: number;
};

export const mockTodos: tTodo[] = [
  {
    name: "comprare il latte",
    status: "Todo",
    id: 121322132132,
  },
  {
    name: "Lorem2",
    status: "Todo",
    id: 115146558411,
  },
  {
    name: "Lorem3",
    status: "Completed",
    id: 79874941143,
  },
  {
    name: "Lorem4",
    status: "Completed",
    id: 78498451332,
  },
  {
    name: "Lorem5",
    status: "Todo",
    id: 12631698498,
  },
];
