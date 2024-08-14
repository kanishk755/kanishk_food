import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../State/Authentication/Action";
// import './LoginForm.css'; // Import your CSS file here

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Login form values:", values);
    dispatch(loginUser({ data: values, navigate }));
  };

  return (
    <Container component="main" maxWidth="xs" className="login-container">
      <CssBaseline />
      <div>
        <Typography className="text-center text-black" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              id="email"
              autoComplete="email"
              className="input-field"
              InputLabelProps={{
                className: 'input-label'
              }}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="input-field"
              InputLabelProps={{
                className: 'input-label'
              }}
              helperText={<ErrorMessage name="password" />}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="primary-button"
            >
              Login
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" className="text-black">
          Don't have an account?{" "}
          <Button onClick={() => navigate("/account/register")} className="text-black">
            Register
          </Button>
        </Typography>
      </div>
    </Container>
  );
};

export default LoginForm;
