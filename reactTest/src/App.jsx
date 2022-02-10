import React,{useEffect, useState} from "react";
import { ColorfulMessage } from './components/ColorfulMessage'

const App = () => {
  // useStateを使うための記述
  // 配列1つ目はstateとして変数→自由に命名できる 2つ目はstateを更新していく関数setをつけるのが一般的
  // useState()の引数に初期値を設定できる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // buttonクリック時の関数
  const onClickCountUp = () => {
    setNum(num +1);
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  // useEffectを使うと引数に設定した値に変化が生じた時だけ処理を確認してくれる
  useEffect(() => {
    if(num > 0){
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[num]);

  // Jsx記法
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      {/* ColorfulMessageコンポーネントに対してcolorとmessageというメッセージを送る */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      {/* HTMLで使うイベントやクラス名はキャメルケースで記述する */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
        <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ͡° ͜ʖ ͡°)</p>}
    </>
  );
};

// App.jsファイルに記述している内容を下記の文を書くことによって、
// App関数でも使える様に記述している
export default App;
