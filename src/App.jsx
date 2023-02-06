import {useState } from "react";
import Button from "./components/Button";
import Todolists from './components/Todolists';
import './App.css';

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [title,setTitle] = useState('')
  const [context, setContext] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contextHandler = (event) => {
    setContext(event.target.value);
  };
  const addBtn =()=>{
    //빈값일시 경고창
    if (title.trim() === "" || context.trim() === "") {
      alert('내용을 작성해주세요')
      return
    }
    const a ={
      id: todolist.length+ 1, title: title, context:context, done: false,
    }
    setTodolist([...todolist, a]);
    
  }

  //자기 번호 삭제
  const delBtn = (id) => {
    const newtodolist = todolist.filter((todolist) => todolist.id !== id);
    setTodolist(newtodolist);
  };
  //done true일때 아닐때 구분
  const changeDone = (id) => {
    setTodolist(
      todolist.map((item) => item.id === id ? { ...item, done: !item.done } : item )
    );
  };
  //새로고침막고 input값 초기화.
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTitle("");
    setContext("");
  };
  //날짜
  const day = new Date();
  let year = day.getFullYear();
  let mon = day.getMonth() + 1; 
  let date = day.getDate();


  return (
    <div className="todo-list">
      <div className="todo">
        <div className="todo_h">
          <p className="date">{year}. {mon}. {date}</p>
          <h1>TodoList</h1>
          <p className="left"> <span>{todolist.length}</span>개 남음 </p>
        </div>
        <ul className="todo_b">
          {todolist.map(function (item) {
            return (
              <Todolists item={item}  delBtn={delBtn} key={item.id} changeDone={changeDone}/>
            );
          })}
        </ul>
        
          <div className="todo_f">
            <form onSubmit={onSubmitHandler}>
              <input type="text" placeholder="제목을 적어주세요"  value={title} onChange={titleHandler}  name="title2"/>
              <input type="text"  placeholder="내용을 적어주세요" value={context} onChange={contextHandler} name="context2"/>
              <Button addBtn={addBtn}  type="submit">추가</Button>
            </form>
          </div>
      </div>
    </div>
  );
};


export default App;
