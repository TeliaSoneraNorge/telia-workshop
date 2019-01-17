const promiseResolved = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('DONE');
    }, 2000);
  });
};

const promiseReject = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Something went wrong');
    }, 3000);
  });
};

async function testAsyncAwait() {
  try {
    const result = await promiseResolved();
    console.log(result);
    const anotherResult = await promiseReject();
    return anotherResult;
  } catch (e) {
    console.log(e);
  }
}

testAsyncAwait();
