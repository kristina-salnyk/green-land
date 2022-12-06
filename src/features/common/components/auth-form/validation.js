import * as Yup from 'yup';

export const ValidationSchema = {
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 char'),
  phone: Yup.string().required('Phone number is required').test(
    'phone-validation',
    'Enter valid phone number in the format +XXXXXXXXXXXX',
    function (value) {
      // if (value === '') {
      //   return true;
      // }
      // const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/;
      const phoneRegex = /^\+\d{12}$/;
      return phoneRegex.test(value);
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
      return emailRegex.test(value);
    }
  ),
};
