// regular expression that matches letters, numbers and full stop
export const isValidUserName = (userName) => {
  const regex = /^[a-zA-Z0-9.]+$/;
  return regex.test(userName);
};
