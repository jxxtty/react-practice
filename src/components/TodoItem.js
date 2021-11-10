import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component{
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle이 실행되지 않게(해당 DOM에 onToggle까지 있어서 이게 없으면 이벤트가 확산되어 onRemove -> onToggle이렇게 실행됨)
                    onRemove(id);}}>&times;
                </div>
            
                {/* checked 값에 따라 className에 checked라는 문자열을 넣는다.  */}
                <div className={`todo-text ${checked ? 'checked' : ''}`}>  
                    <div>{text}</div>
                </div>
                
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        )
    }
}

export default TodoItem;