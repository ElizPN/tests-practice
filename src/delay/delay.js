export const delay = (callback, ms) => {
  const longRunningFunc = (resolve) => {
    const toDoAfterTimeOut = () => {
      resolve(callback());
    };
    setTimeout(toDoAfterTimeOut, ms);
  };
  return new Promise(longRunningFunc);
};
delay(() => 5 + 5, 1000).then((res) => console.log(res));
