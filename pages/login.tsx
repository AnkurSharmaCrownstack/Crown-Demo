import Image from 'next/image';
import loginImage from '../public/images/loginImage.png';
import Layout from '../components/Layout';
import LoginPage from '../components/LoginPage';
import { useRouter } from 'next/router';
import { useState } from 'react';
const contractorDetails = {
 email: 'contractor@yopmail.com',
 password: 'password',
};

const insuranceDetails = {
 email: 'insurance@yopmail.com',
 password: 'password',
};
const superAdminDetails = {
 email: 'super-admin@yopmail.com',
 password: 'password',
};
export default function Login() {
 const router = useRouter();
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isErrorMessage, setIsErrorMessage] = useState(false);
 const onSubmitLogin = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  console.log(event.target);
  //   if (values.email === superAdminDetails.email) {
  //    await router.push('super-admin');
  //   } else if (values.email === contractorDetails.email) {
  //    console.log('contractor');
  //    await router.push('contractor');
  //   } else if (values.email === insuranceDetails.email) {
  //    await router.push('insurance');
  //   } else {
  //    setIsErrorMessage(true);
  //   }
 };
 return <LoginPage />;
}
