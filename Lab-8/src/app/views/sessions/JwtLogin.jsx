import { LoadingButton } from '@mui/lab';
import { Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { withStyles } from "@material-ui/core/styles";
import 'app/components/font.css';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  position: 'relative',
  color: "#FFFFFF",
  background: '#181818',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  sx: {
    borderColor: '#FFFFFF',
  },
}));

const CustomColorCheckbox = withStyles({
  root: {
    color: "#25D1F6",
    "&$checked": {
      color: "#25D1F6"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const imgStyle = {
  height: '100%',
  "@media (max-width: 1000px)": {
    display: "none"
  },
};

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#181818',
  minHeight: '100% !important',
}));

// inital login credentials
const initialValues = {
  email: 'admin@tuneflow.ca',
  password: 'dummyPass',
  remember: true,
};


// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password must be 2 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate('/');
    } catch (e) {
      setLoading(false);
    }
  };


  return (
    <JWTRoot>
      <Box position="absolute" top={3} left={38} m={2} style={{color: 'white', zIndex: '1', fontFamily: 'Fahkwang', fontWeight: '600', fontSize: 15}}>
        <h1>TuneFlow</h1>
      </Box>
      
      
      <Grid container justifyContent="center">

        <Grid item sm={6} xs={12}>

          <ContentBox>


            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema} color={"#FFFFFF"}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit} >
                  <TextField
                    fullWidth
                    size="medium"
                    type="email"
                    name="email"
                    label="Email Address"
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

                  <FlexBox justifyContent="space-between">
                    <FlexBox gap={1}>
                      <CustomColorCheckbox
                        size="medium"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph>Remember Me</Paragraph>
                    </FlexBox>

                    <NavLink
                      to="/session/forgot-password"
                      style={{ color: "#25D1F6" }}
                    >
                      Forgot password?
                    </NavLink>
                  </FlexBox>

                  <br></br>
                  <LoadingButton
                    type="submit"
                    size="medium"
                    loading={loading}
                    variant="contained"
                    sx={{ my: 2, backgroundColor: '#25D1F6', color: "#181818", width: "100%" }}
                  >
                    Login
                  </LoadingButton>

                  <Paragraph>
                    Don't have an account?
                    <NavLink
                      to="/session/signup"
                      style={{ color: "#25D1F6", marginLeft: 5 }}
                      size="medium"

                    >
                      Register
                    </NavLink>
                  </Paragraph>
                </form>
              )}
            </Formik>
          </ContentBox>
        </Grid>

        <Grid item sm={6} xs={12}>

          <img src="/assets/images/illustrations/loginCover.png" width={["100%", "20%"]} alt="" style={imgStyle}/>
        </Grid>
      </Grid>
    </JWTRoot>
  );
};

export default JwtLogin;


