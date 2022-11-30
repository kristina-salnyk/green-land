import * as Yup from 'yup';

export const ValidationSchema = {
  name: Yup.string().required('Name is required'),
  login: Yup.string()
    .required('E-mail or phone number is required')
    .test(
      'login-validation',
      'Enter valid e-mail or phone number',
      function (value) {
        const emailRegex =
          /^([a-zA-Z\d_.-])+@(([a-zA-Z\d-])+\.)+([a-zA-Z\d]{2,4})+$/;
        const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/;
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        return !(!isValidEmail && !isValidPhone);
      }
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 char'),
  phone: Yup.string().test(
    'phone-validation',
    'Enter valid phone number',
    function (value) {
      if (value === '') {
        return true;
      }
      const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/;
      let isValidPhone = phoneRegex.test(value);
      return !!isValidPhone;
    }
  ),
  email: Yup.string().test(
    'email-validation',
    'Enter valid e-mail',
    function (value) {
      if (value === '') {
        return true;
      }
      const emailRegex =
        /^([a-zA-Z\d_.-])+@(([a-zA-Z\d-])+\.)+([a-zA-Z\d]{2,4})+$/;
      let isValidEmail = emailRegex.test(value);
      return !!isValidEmail;
    }
  ),
};
