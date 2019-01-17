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

promiseResolved().then(r => {
  console.log(r);
});

promiseReject().catch(err => {
  console.log(err);
});
