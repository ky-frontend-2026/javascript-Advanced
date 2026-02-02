const response ={
    data:{
        items:['아이템1','아이템2']
    }
}

const firstItemName = response?.data?.items?.[0]??'아이템 없음'


console.log(firstItemName)