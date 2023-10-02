package de.neuefische.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
class TodoRepository {

    /* private final Map<String, Todo> todos = new HashMap<>(Map.of("1", new Todo("1", "Test", TodoStatus.OPEN)));*/

    private final Map<String, Todo> todos = new HashMap<>(Map.of(
            "1", new Todo("1", "Keller aufräumen", TodoStatus.OPEN),
            "2", new Todo("2", "Regal schleifen und streichen", TodoStatus.IN_PROGRESS),
            "3", new Todo("3", "Staubsaugen am Mittwoch", TodoStatus.DONE),
            "4", new Todo("4", "Geschirr abwaschen", TodoStatus.OPEN),
            "5", new Todo("5", "Fussleisten befestigen", TodoStatus.IN_PROGRESS),
            "6", new Todo("6", "Staubsaugen am Mittwoch", TodoStatus.OPEN)
    ));


    public List<Todo> getAll() {
        return new ArrayList<>(todos.values());
    }

    public Todo save(Todo todoToSave) {
        todos.put(todoToSave.id(), todoToSave);
        return todoToSave;
    }

    public Todo getById(String id) {
        return todos.get(id);
    }

    public Todo update(Todo todo) {
        todos.put(todo.id(), todo);
        return todo;
    }

    public void delete(String id) {
        todos.remove(id);
    }
}
