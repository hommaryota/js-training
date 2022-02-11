import React, {useState} from "react";
import "./style.css";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodo} from "./components/IncompleteTodo";
import {CompleteTodo} from "./components/CompleteTodo";

export const App = () => {
  // TODOを入力した際の値を決める。
  // 入力内容によって変わるが、まずはから文字
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  // todoTextによってから文字を初期値としているため、文字入力しても空に上書きされる。
  // onChange={onChangeTodoText}によって、変更があった際にevent引数をsetTodoText()に渡す
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // スプレッド構文にて新しい配列を生成
    const newTodo = [...incompleteTodo, todoText];
    // setIncompleteTodoに引数として渡す
    setIncompleteTodo(newTodo);
    setTodoText("");
  };

  // indexで順番を読み込んでいる
  const onClickDelete = (index) => {
    // incompleteTodoを配列にする
    const newTodo = [...incompleteTodo];
    // 配列にしたincompleteTodoのindex番号（クリックされた要素の番号）を1つ削除する
    newTodo.splice(index, 1);
    // 削除したことをsetIncompleteTodoに入力しなおす
    setIncompleteTodo(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    setIncompleteTodo(newIncompleteTodo);

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setCompleteTodo(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    setCompleteTodo(newCompleteTodo);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodo.length >= 5} />

      {incompleteTodo.length >= 5 && <p style={{color: "red"}}>登録できるTODO5個までです。TODOを消化して下さい</p>}
      <IncompleteTodo todo={incompleteTodo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />

      <CompleteTodo todo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
