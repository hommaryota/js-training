import React from "react";
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  // buttonクリック時の関数
  const onClickButton = () => alert();

  // cssの変数定義
  const contentStyle = {
    color: 'blue',
    fontSize:'18px',
  }

  // Jsx記法
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      {/* ColorfulMessageコンポーネントに対してcolorとmessageというメッセージを送る */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      {/* HTMLで使うイベントやクラス名はキャメルケースで記述する */}
      <button onClick={onClickButton}>ボタン</button>
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
