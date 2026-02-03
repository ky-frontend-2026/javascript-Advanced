const student = {
  name: "Tom",
  grades: {
    math: 90,
    science: 85
  }
};

// 여기에 함수를 작성하세요.
function printGrades({
   name,
   grades:{
    math,science
   } 
}){
    console.log(`${name}의 수학 점수:${math}`)
    console.log(`${name}의 과학 점수:${science}`)
} 


printGrades(student)