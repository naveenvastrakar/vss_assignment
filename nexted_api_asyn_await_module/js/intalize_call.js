import {resuableFunction} from "./module.js"
let intalizeModule = async ()=>{
    try{
        let firstApi = await resuableFunction('https://dummyjson.com/users');
        console.log("find ",firstApi)
        let secondApi = await resuableFunction('https://dummyjson.com/user/login');
        console.log('found',secondApi)
    }
    catch(err){
        console.log("issue find");
    }

}
intalizeModule();