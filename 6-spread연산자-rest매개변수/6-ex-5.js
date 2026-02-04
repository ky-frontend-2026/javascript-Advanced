function averageExceptFirst(first, ...numbers) {
  const sum = numbers.reduce((a, c) => a + c, 0);
  // 첫 번째 인자는 제외하고
  return sum / numbers.length;
  // 나머지 숫자의 평균을 반환하세요
}

console.log(averageExceptFirst(10, 20, 30, 40));
