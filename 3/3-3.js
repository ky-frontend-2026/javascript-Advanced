function greet(name) {
  const userName = name ?? "게스트";
  console.log(`안녕하세요! ${userName}님!`);
}

greet("민수");
greet();
