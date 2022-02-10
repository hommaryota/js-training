import React from 'react'

// propsという変数を指定する（名前は何でもいいけど、propsがわかりやすい）
// 引数を設定すると、他のコンポーネントから送られてきた値を受け取れる
const ColorfulMessage = (props) => {
  // 分割代入 下記を設定しないと、毎回props.childrenの様に、propsを記載しないといけない
  const {color , children}= props
  const contentStyle = {
    // propsに渡ってきている値のcolorを受け取る
    color: color,
    fontSize:'18px',
  }
  return (
    // {props.children} childrenという特別な変数ある。子要素を取得する
    <p style={contentStyle}>{children}</p>
  )
}




export default ColorfulMessage;
