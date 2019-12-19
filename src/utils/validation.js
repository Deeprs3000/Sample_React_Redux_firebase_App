import * as Yup from 'yup';

const phoneRegExp = /^[0-9]{10}$/;

export const addUserSchema = Yup.object().shape({
    name: Yup.string().required('Field is required'),
    email: Yup.string().email().required('Field is required'),
    contact: Yup.string().required('Field is required').matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().required('Field is required'),
})