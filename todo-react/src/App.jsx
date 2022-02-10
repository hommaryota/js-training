import React, { useState } from "react";
import "./style.css"

export const App = () => {
  // TODOを入力した際の値を決める。
  // 入力内容によって変わるが、まずはから文字
  const [todoText,setTodoText] = useState("");

  const [incompleteTodo,setIncompleteTodo] =useState([]);
  const [completeTodo,setCompleteTodo] = useState([]);

  // todoTextによってから文字を初期値としているため、文字入力しても空に上書きされる。
  // onChange={onChangeTodoText}によって、変更があった際にevent引数をsetTodoText()に渡す
  const onChangeTodoText = event => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    // スプレッド構文にて新しい配列を生成
    const newTodo = [...incompleteTodo,todoText];
    // setIncompleteTodoに引数として渡す
    setIncompleteTodo(newTodo);
    setTodoText('');
  }

  // indexで順番を読み込んでいる
  const onClickDelete = (index) => {
    // incompleteTodoを配列にする
    const newTodo = [...incompleteTodo]
    // 配列にしたincompleteTodoのindex番号（クリックされた要素の番号）を1つ削除する
    newTodo.splice(index, 1);
    // 削除したことをsetIncompleteTodoに入力しなおす
    setIncompleteTodo(newTodo);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo]
    newIncompleteTodo.splice(index, 1);
    setIncompleteTodo(newIncompleteTodo);

    const newCompleteTodo = [...completeTodo,incompleteTodo[index]]
    setCompleteTodo(newCompleteTodo)
  }

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo,]
    newCompleteTodo.splice(index, 1);
    setCompleteTodo(newCompleteTodo)

    const newIncompleteTodo = [...incompleteTodo,completeTodo[index]]
    setIncompleteTodo(newIncompleteTodo)
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 2つ目の引数にindexを記述すると、順番を読み込める */}
          {incompleteTodo.map((todo,index) => {
            return (
              <li key={todo} className="list-row">
                <div>{ todo}</div>
                <button onClick={()=>onClickComplete(index)}>完了</button>
                {/* onClick={()=> onClickDelete(index)}にアロー関数を設定しないとレンダリングされた時によみこまれてしまう */}
                <button onClick={()=> onClickDelete(index)}>削除</button>
              </li>
            )
          })}

        </ul>
      </div>


      <div className="complete-area">
        <p className="title">完了tのTODO</p>
        <ul>
          {completeTodo.map((todo,index) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button onClick={()=>onClickBack(index)}>戻す</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
