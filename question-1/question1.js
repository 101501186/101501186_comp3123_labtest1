// Lab Test 1 (Comp3123) - Tyson Ward-Dicks
// 101501186
// Question 1

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("The input must be an array");
            return;
        }

        const result = mixedArray
            .filter(item => typeof item === "string")
            .map(str => str.toLowerCase());

        if (result.length === 0) {
            reject("No string elements found");
        } else {
            resolve(result);
        }    
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(res => console.log(res));