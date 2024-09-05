const isEmailValid = Email => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return regEx.test(Email) && Email.length > 0;
};

const isMobileNumberValid = MobileNumber => {
  const regEx = /^([0|\+[0-9]{1,5})?([5-9][0-9]{9})$/;
  return regEx.test(MobileNumber) && MobileNumber.length > 9;
};

const isPasswordValid = Password => {
  const regEx =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return regEx.test(Password) && Password.length > 0;
};

const isSamePasswords = (Password, ConfirmPassword) =>
  Password === ConfirmPassword;

const isNameValid = pin => pin.length > 3;

const isPinValid = pin => pin.length === 4;

const isSamePin = (pin, confirmPin) =>
  isPinValid(pin) && isPinValid(confirmPin) && pin === confirmPin;

const validateEmail = email => {
  if (email.length === 0) return 'Email is required';
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!regEx.test(email)) return 'Please enter a valid email address';
  return null;
};

const validatePassword = (password, confirmPassword) => {
  if (password.length === 0) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (!/[A-Z]/.test(password))
    return 'Password must contain at least one uppercase letter';
  if (!/[a-z]/.test(password))
    return 'Password must contain at least one lowercase letter';
  if (!/\d/.test(password)) return 'Password must contain at least one digit';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return 'Password must contain at least one special character';
  if (confirmPassword && !isSamePasswords(password, confirmPassword))
    return 'Confirm password should be same as password';
};

const Validation = {
  isEmailValid,
  isMobileNumberValid,
  isPasswordValid,
  isSamePasswords,
  isPinValid,
  isNameValid,
  isSamePin,
  validatePassword,
};

export default Validation;
