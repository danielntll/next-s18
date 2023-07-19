import { tTodo } from "@/mock/todos";

type Action = {
  type: "ADD_TO" | "DELETE_TO" | "UPDATE_TO_COMPLETE" | "UPDATE_TO_NOT";
  new_todo?: tTodo;
  id?: number;
};

export const mainReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "ADD_TO":
      const auxADD_TO = [...state];
      auxADD_TO.push(action.new_todo);
      return auxADD_TO;

    case "DELETE_TO":
      const auxDELETE_TO = [...state].filter(
        (todo: tTodo) => todo.id !== action.id
      );

      return auxDELETE_TO;

    case "UPDATE_TO_COMPLETE":
      const auxUPDATE_TO_COMPLETE: tTodo[] = [...state];
      const ind = auxUPDATE_TO_COMPLETE.findIndex(
        (todo: tTodo) => todo.id === action.id
      );
      console.log(auxUPDATE_TO_COMPLETE[ind]);

      auxUPDATE_TO_COMPLETE[ind].status = "Completed";

      console.log(auxUPDATE_TO_COMPLETE[ind]);
      return auxUPDATE_TO_COMPLETE;

    case "UPDATE_TO_NOT":
      const auxUPDATE_TO_NOT: tTodo[] = [...state];
      const indUPDATE_TO_NOT = auxUPDATE_TO_NOT.findIndex(
        (todo: tTodo) => todo.id === action.id
      );
      console.log(auxUPDATE_TO_NOT[indUPDATE_TO_NOT]);

      auxUPDATE_TO_NOT[indUPDATE_TO_NOT].status = "Todo";

      console.log(auxUPDATE_TO_NOT[indUPDATE_TO_NOT]);
      return auxUPDATE_TO_NOT;

    default:
      console.log(state);
      return state;
  }
};
