const validcheck =`{
    "name":"ann",
    "age":"12",
    "address":{
    "city":"Malappuram"
    },"state":"kerala"
}`


function safeParse(jsonString){
    try{
        const parse = JSON.parse(jsonString)
        return parse 
    }catch(error){
        return `error :${error}`
    }
}

console.log(safeParse(validcheck))