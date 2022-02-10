import React,{useState} from "react";
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  // buttonクリック時の関数
  const onClickCountUp = () => {
    setNum(num +1);
  }

  // useStateを使うための記述
  // 配列1つ目はstateとして変数→自由に命名できる 2つ目はstateを更新していく関数setをつけるのが一般的
  // useState()の引数に初期値を設定できる
  const [num, setNum] = useState(0);
  // Jsx記法
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      {/* ColorfulMessageコンポーネントに対してcolorとmessageというメッセージを送る */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      {/* HTMLで使うイベントやクラス名はキャメルケースで記述する */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

const contentLadyStyle = {
  color: 'pink',
  fontSize:'18px',
}


// App.jsファイルに記述している内容を下記の文を書くことによって、
// App関数でも使える様に記述している
export default App;
