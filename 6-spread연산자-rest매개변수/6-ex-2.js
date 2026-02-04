function multiplyAll(...numbers) {
  // 여기에 로직 작성
    return numbers.reduce((a,c)=>a*c,1)

}

console.log(multiplyAll(2, 3, 4));  // 결과: 24
