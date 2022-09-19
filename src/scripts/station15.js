async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(userList) {
  return new Promise(function(resolve){
    setTimeout(function(){resolve(userList.map(buildFullName))}, 3000)
  })
}

function buildFullName(data) {
  // Station14の問題はこちらです。想定する答えをここを書いてください。
  // 氏名がわかるようにしつつ、半角スペースで繋いでください。
  // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること
  let first = data.first_name
  let family = data.family_name
  data.full_name = family + ' ' + first
  return data
}