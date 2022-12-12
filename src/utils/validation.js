import * as Yup from 'yup';

export const ValidationSchema = {
  name: Yup.string()
    .required('Name is required')
    .test(
      'name-validation',
      'Name must contain one word and be capitalized',
      function (value) {
        const nameRegex = /^[A-Z][a-z]*$/;
        return nameRegex.test(value);
      }
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 char'),
  phone: Yup.string()
    .required('Phone number is required')
    .test(
      'phone-validation',
      'Phone number must start with + and contain 12 digits',
      function (value) {
        // const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/;
        const phoneRegex = /^\+\d{12}$/;
        return phoneRegex.test(value);
      }
    ),
  email: Yup.string()
    .required('Email is required')
    .test(
      'email-validation',
      'Email must contain only latin letters, numbers, @ and dots',
      function (value) {
        const emailRegex =
          /^([\da-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$/;
        return emailRegex.test(value);
      }
    ),
};
