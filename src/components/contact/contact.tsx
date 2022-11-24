import * as yup from 'yup';
import React, {useRef} from 'react';
import { useFormik  } from 'formik';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { Fade } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string()
    .min(3, 'name is to short')
    .required('name is required'),
  subject: yup
    .string()
    .min(3, 'subject is to short')
    .required('subject is required'),
  message: yup
    .string()
    .min(3, 'message is to short')
    .required('message is required'),
});
export default function Contact() {
  const form = useRef<null | HTMLFormElement>(null)
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      emailjs.sendForm('service_vfa36xg', 'template_cmjbaah', form.current!, 'ihYL9rZeSqrYOdSxo')
      .then((values) => {
          console.log(values);
      }, (error) => {
          console.log(error);
      });
      resetForm({values: {email: "", name: "", subject: "", message: ""}});
    },
    
  });

  return (
    <Fade cascade duration={3000} delay={300}>
    <section className="contact page" id="contact">
      <div className="container-head">
      <h1 >{`Contact Us`.toUpperCase()}</h1>
      <div className="underline-contact"></div>
      </div>
   <div className="footer-form">
    <form ref={form!} className="form" onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ m: 1, width: '28ch', height: '9ch' }}InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
          }}
          id="email"
          name="email"
          label="Email"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField 
          sx={{ m: 1, width: '28ch', height: '9ch' }}InputProps={{
            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
          }}
          id="name"
          name="name"
          label="name"
          type="text"
          variant="filled"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ m: 1, width: '28ch' ,height: '9ch'}}InputProps={{
            startAdornment: <InputAdornment position="start"><SubjectIcon /></InputAdornment>,
          }}
          id="subject"
          name="subject"
          label="subject"
          type="text"
          variant="filled"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextField className="form-message"
          sx={{ m: 1, width: '28ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment>,
          }}
          multiline
          // rows={3}
          // maxRows={4}
          id="message"
          name="message"
          label="message"
          type="text"
          variant="filled"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        
        <Button className="btn btn-contact" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    
   </div>
    </section></Fade>
    
  )
}