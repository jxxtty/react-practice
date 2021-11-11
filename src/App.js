import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component{
  id = 3

  state = { // input값 + todos배열(기본 아이템 3개)
    input: '',
    todos: [
      // todos객체를 구분하기 위해 id값을 지정, 데이터가 추가될 때마다 this.id값이 1씩 올라가도록 설정
      {id: 0, text: '리액트 소개', checked: false},
      {id: 1, text: '리액트 소개', checked: true},
      {id: 2, text: '리액트 소개', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // input을 비우고
      todos: todos.concat({ // concat을 사용하여 배열에 추가
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter라면 handleCreate호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    // 아래와 같이 작성하는 방법도 있음! (nextTodos~setState 대체)
    // this.setState({
    //   todos: [
    //     ...todos.slice(0, index),
    //     {
    //       ...selected,
    //       checked: !selected.checked
    //     },
    //     ...todos.slice(index+1, todos.length)
    //   ]
    // });

    const nextTodos = [...todos]; // 배열 복사(shallow clone)

    // 기존의 값들을 복사하고, checked 값을 덮어쓴다 -> 전개해서 기존의 것들을 재사용한다.
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }


  render(){
    const { input, todos } = this.state;
    const { // 비구조화할당
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate}/>
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;