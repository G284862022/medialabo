let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  if(kaisu===3){
    console.log('4回回答済みです。')
    let s6 = document.querySelector('#result');
      s6.textContent = '答えは'+kotae+'でした。既にゲームは終わっています。';
  }else{
    kaisu=kaisu+1
    let i=document.querySelector('input[number="kaito"]');
    let kaito = i.value;
    let yoso = Number(kaito);
    let s1 = document.querySelector('span#kaisu');
    s1.textContent = kaisu;
    let s2 = document.querySelector('span#answer');
    s2.textContent = yoso;
    if(kotae===yoso){
  // kotae と yoso が一致するかどうか調べて結果を出力
      console.log('正解です.おめでとう！');
      let s3 = document.querySelector('#result');
      s3.textContent = '正解です。おめでとう！';
    }else if(kotae<yoso){
      console.log('まちがい.答えはもっと小さいですよ');
      let s4 = document.querySelector('#result');
      s4.textContent = 'まちがい。答えはもっと小さいですよ';
    }else{
      console.log('まちがい.答えはもっと大きいですよ');
      let s5 = document.querySelector('#result');
      s5.textContent = 'まちがい。答えはもっと大きいですよ';
    }
  }
}