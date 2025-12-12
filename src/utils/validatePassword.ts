export const validatePassword = (_: any, value: string) => {
  const strongRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/;

  if (!strongRegex.test(value)) {
    return Promise.reject();
  }

  return Promise.resolve();
};
