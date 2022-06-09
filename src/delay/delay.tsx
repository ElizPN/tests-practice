export const delay = (callback: any, ms: any) => {
  const longRunningFunc = (resolve: (value: unknown) => void): void => {
    const toDoAfterTimeOut = () => {
      resolve(callback());
    };
    setTimeout(toDoAfterTimeOut, ms);
  };
  return new Promise(longRunningFunc);
};
delay(() => 5 + 5, 1000).then((res) => console.log(res));
