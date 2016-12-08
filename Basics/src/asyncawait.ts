"use strict";

function getPromise(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
        resolve("Hello Amelie");
    });
}

async function afunc() {
    let res = await getPromise();
    console.log(res);
}

let res = afunc();
