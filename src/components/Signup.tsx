import React from "react";
import { Formik, Form, FormikHelpers, useFormik } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export interface RegisterValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPass: string;
}

export const Signup = () => {

    const initialFormValues: RegisterValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: "",
    };

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        email: Yup.string()
            .email('Emails is invalid')
            .max(25, "Must be 25 characters or less")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
        confirmPass: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
    });
    return (
        <Formik initialValues={initialFormValues}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
            on
        >
            {(formik) => (
                <div className="form-container">
                    <h1 className="header">Sing Up</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField
                            label="Confirm Password"
                            name="confirmPass"
                            type="password"
                        />
                        <div className="buttom-container">
                            <button className="button-register" type="submit">
                                Register
                            </button>
                            <button className="button-danger" type="reset">
                                Reset
                            </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
