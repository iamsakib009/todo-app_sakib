import { Button, List } from "@mui/material";
import TodoList from "./TodoList";
import "./Todos.css";

const Todos = ({ todos, check, clear, remove, edit }) => {
  console.log({ todos });
  return (
    <>
      <List
        sx={{
          width: { xs: "95vw", md: "100%" },
          bgcolor: "background.paper",
          maxWidth: 460,
          borderRadius: 4,
          mx: "auto",
        }}
      >
        {todos &&
          todos.map((todo) => {
            return (
              <TodoList
                check={check}
                key={todo.id}
                edit={edit}
                remove={remove}
                todo={todo}
              />
            );
          })}
        {todos && todos.length > 0 && (
          <div className="btn-clear">
            <Button color="primary" onClick={clear} variant="contained">
              ClearTodos
            </Button>
          </div>
        )}
      </List>
    </>
  );
};

export default Todos;
