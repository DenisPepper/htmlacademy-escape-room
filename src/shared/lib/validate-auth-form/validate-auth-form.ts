import {AuthFormType} from '../../types/auth-form-type';

const passIsValid = (password: string): boolean => /(?=\d*)(?=[a-zа-яё]*).{2,20}/gi.test(password);

const emailIsValid = (email: string): boolean => /^\S+@\S+\.\S+$/gi.test(email);

export const validateAuthForm = (AuthFormData: AuthFormType): boolean => {
  const {email, password, isChecked} = AuthFormData;
  return isChecked && emailIsValid(email) && passIsValid(password);
};
