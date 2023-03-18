import { LoadingButton } from '@mui/lab';
import { Checkbox, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import * as Yup from 'yup';
import 'app/components/font.css';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const buttonStyle = {
  mb: 2, 
  mt: 3, 
  width: "100%", 
  backgroundColor: '#25D1F6',
  color: "#181818", 

  "&:hover": {
    background: "#157589"
  },
}

const CustomColorCheckbox = withStyles({
  root: {
    color: "#25D1F6",
    "&$checked": {
      color: "#25D1F6"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#181818',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  username: '',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtRegister = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      register(values.name, values.email, values.username, values.password);
      navigate('/');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (

    <JWTRegister>

      <Box position="absolute" top={3} left={38} m={2} style={{ color: 'white', zIndex: '1', fontFamily: 'Fahkwang', fontWeight: '600', fontSize: 15 }}>
        <h1>TuneFlow</h1>
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            
            <TextField
              fullWidth
              size="medium"
              type="text"
              name="name"
              label="Full Name"
              variant="outlined"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              helperText={touched.name && errors.name}
              error={Boolean(errors.name && touched.name)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                }
              }}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: '#B4B4B4',
                },
              }}
            />

            <TextField
              fullWidth
              size="medium"
              type="text"
              name="username"
              label="Username"
              variant="outlined"
              onBlur={handleBlur}
              value={values.username}
              onChange={handleChange}
              helperText={touched.username && errors.username}
              error={Boolean(errors.username && touched.username)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                }
              }}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: '#B4B4B4',
                },
              }}
            />

            <TextField
              fullWidth
              size="medium"
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              helperText={touched.email && errors.email}
              error={Boolean(errors.email && touched.email)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                }
              }}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: '#B4B4B4',
                },
              }}
            />

            <TextField
              fullWidth
              size="medium"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              helperText={touched.password && errors.password}
              error={Boolean(errors.password && touched.password)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF"
                }
              }}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: '#B4B4B4',
                },
              }}
            />

        

            <FlexBox gap={1} alignItems="center">
              <CustomColorCheckbox
                size="medium"
                name="remember"
                onChange={handleChange}

                checked={values.remember}
                sx={{ padding: 0 }}
              />

              <Paragraph fontSize={15} style={{color: 'white'}}>
                I have read and agree to the terms of service.
              </Paragraph>
            </FlexBox>

            <LoadingButton
              type="submit"
              color="primary"
              loading={loading}
              variant="contained"
              sx={buttonStyle}
            >
              Regiser
            </LoadingButton>

            <Paragraph fontSize={15} style={{color: 'white'}}>
              Already have an account?
              <NavLink
                to="/session/signin"
                style={{ color: "#25D1F6", marginLeft: 5 }}
              >
                Login
              </NavLink>
            </Paragraph>
          </form>
        )}
      </Formik>

    </JWTRegister>
  );
};

export default JwtRegister;
