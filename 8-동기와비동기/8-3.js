const fetchData=new Promise((resolve)=>{

    setTimeout(()=>{
        resolve('데이터 로드 완료')
    },3000)
})

console.log('데이터 요청중...')

fetchData.then((msg)=>console.log(msg))