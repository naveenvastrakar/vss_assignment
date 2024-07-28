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

const fifthPromise = (resultFromFourth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fifth Promise, received:", resultFromFourth);
            resolve("Fifth result");
        }, 1000);
    });
};

const sixthPromise = (resultFromFifth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sixth Promise, received:", resultFromFifth);
            resolve("Sixth result");
        }, 1000);
    });
};

// firstPromise()
//     .then(result => {
//         secondPromise(result)
//             .then(result => {
//                 thirdPromise(result)
//                     .then(result => {
//                         fourthPromise(result)
//                             .then(result => {
//                                 fifthPromise(result)
//                                     .then(result => {
//                                         sixthPromise(result)
//                                             .then(result => {
//                                                 console.log("Final result:", result);
//                                             })
//                                             .catch(err => {
//                                                 console.error("Error in sixthPromise:", err);
//                                             });
//                                     })
//                                     .catch(err => {
//                                         console.error("Error in fifthPromise:", err);
//                                     });
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


//resolve through asyn and await

let intalizeFunction = async function handelCallBack(){
    try{
        let firstPromiseIntalize = await firstPromise();
        let secondPromiseIntalize = await secondPromise(firstPromiseIntalize);
        let thirdPromiseIntalize = await thirdPromise(secondPromiseIntalize);
        let fourthPromiseIntalize = await fourthPromise(thirdPromiseIntalize);
        let fifthPromiseIntalize = await fifthPromise(fourthPromiseIntalize);
        let sixthPromiseIntalize = await sixthPromise(fifthPromiseIntalize);
    }
    catch(err){
        console.log("find some error")
    }
}
intalizeFunction();