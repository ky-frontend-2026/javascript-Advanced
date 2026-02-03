const colors = ['red', 'green'];

// 여기에 구조 분해 할당을 작성하세요.
const [first, second, third = 'blue'] = colors;

console.log(first);   // red
console.log(second);  // green
console.log(third);   // blue