const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Promise");
            resolve("First result");
        }, 1000);
    });
};

const secondPromise = (resultFromFirst) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Promise, received:", resultFromFirst);
            resolve("Second result");
        }, 1000);
    });
};

const thirdPromise = (resultFromSecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third Promise, received:", resultFromSecond);
            resolve("Third result");
        }, 1000);
    });
};

const fourthPromise = (resultFromThird) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fourth Promise, received:", resultFromThird);
            resolve("Fourth result");
        }, 1000);
    });
};

// firstPromise()
//     .then(result => {
//         return secondPromise(result)
//             .then(result => {
//                 return thirdPromise(result)
//                     .then(result => {
//                         return fourthPromise(result)
//                             .then(result => {
//                                 console.log("Final result:", result);
//                             })
//                             .catch(err => {
//                                 console.error("Error in fourthPromise:", err);
//                             });
//                     })
//                     .catch(err => {
//                         console.error("Error in thirdPromise:", err);
//                     });
//             })
//             .catch(err => {
//                 console.error("Error in secondPromise:", err);
//             });
//     })
//     .catch(err => {
//         console.error("Error in firstPromise:", err);
//     });


//through asyn and await
let intailzePromise = async function promiseVal (){
    try{
        let firstPromiseIntalize = await firstPromise();
        let secondPromiseIntalize = await secondPromise(firstPromiseIntalize);
        let thirdPromiseIntalize = await thirdPromise(secondPromiseIntalize);
        let fourthPromiseIntalize = await fourthPromise(thirdPromiseIntalize);
    }
    catch(err){
        console.log("please check something missing");
    }
}
intailzePromise();