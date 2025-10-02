// Lab Test 1 (Comp3123) - Tyson Ward-Dicks
// 101501186
// Question 2

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message: "delayed success!"});
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("delayed exception!"));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.log({error: err.message}));

rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.log({error: err.message}));