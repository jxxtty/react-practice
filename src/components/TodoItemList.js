import React, {Component} from "react";
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        // eslint-disable-next-line
        const {todos, onToggle, onRemove} = this.props;

        return (
            <div>
                <TodoItem text="룰루랄라"/>
                <TodoItem text="리액트"/>
                <TodoItem text="리액트가너무낯설어요"/>
            </div>
        );
    }
}

export default TodoItemList;