const user ={
    profile:{
        // email:'test@test.com'
    }
}


const email= user?.profile?.email??'이메일 없음'

console.log(email)