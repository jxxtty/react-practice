import React, {Component} from "react";
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    // 컴포넌트 라이플 사이클 메서드 중 shouldComponentUpdate -> 컴포넌트가 리렌더링을 할지말지 결정해준다.
    // 이걸 구현하지 않으면 언제나 true를 반환하는데, 이를 구현하려면 업데이트에 영향을 끼치는 조건을 return하면 된다.
    shouldComponentUpdate(nextProps, nextState) {
        // todos값이 바뀔때만 리렌더링하면 된다.
        // 따라서 현재this.props.todos와 nextProps.todos를 비교해서 이 값이 다를때만 리렌더링한다.
        return this.props.todos !== nextProps.todos;
    }

    render() {
        // eslint-disable-next-line
        const {todos, onToggle, onRemove} = this.props;

        // todos안에 있는 객체들을 화면에 보여주기위해 todos배열을 컴포넌트 배열로 변환해준다.(자바스크립트 배열의 내장함수 map사용)
        const todoList = todos.map(
            // todos.map((todo) => (<TodoItem {...todo} onToggle={onToggle} ~~~~)) 이런식으로 작성도 가능
            // 위와 같은 방식으로 작성하게되면, 객체의 값 모두를 props로 전달하게 된다.
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        
        return (
            <div>
                {/* <TodoItem text="룰루랄라"/>
                <TodoItem text="리액트"/>
                <TodoItem text="리액트가너무낯설어요"/> */}
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;