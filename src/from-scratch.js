const resolvedWrapper = (value) => {
  return Promise.resolve(value);

};
  // resolvedWrapper(10).then(console.log)
  // resolvedWrapper('hello').then(console.log)
  // resolvedWrapper('hello').then(console.log)


const rejectedWrapper = (errorMessage) => {
  const newError = new Error(errorMessage)
  return Promise.reject(newError)
  // return promise.reject(new Error(errorMessage))
};

const handleResolvedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value)
    return value.toUpperCase();
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
  .then((value) => {
    console.log(value)
    return value.toUpperCase()
  })
  .catch((error) => {
    console.error(`Your error message was: ${error.message}`)
      return null;
    })
  };
 

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
  



module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
