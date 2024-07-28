export let resuableFunction = async (url) => {
    try{
        const fetchData = await fetch(url);
        const resultForm = await fetchData.json();
        return resultForm;
    }
    catch(err){
        console.log("some thing missing");
        throw err;
    }
}
