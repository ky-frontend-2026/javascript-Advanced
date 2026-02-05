

const loadUserData=async()=>{
    console.log('사용자 데이터를 불러오는 중.....')

    const result=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('user loaded')
        },1500)
    })
    console.log(`결과값: ${result}`)

}




loadUserData();