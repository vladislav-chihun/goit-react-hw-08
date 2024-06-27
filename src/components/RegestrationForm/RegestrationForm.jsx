import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegestrationForm.module.css"

export default function RegistrationForm() {
    const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
        >
            <Form autoComplete="off" className={css.registrationForm}>
                <label className={css.registrationLabel}>
                    Username
                    <Field className={css.registrationField} type="text" name="name" autoComplete="username" />
                </label>
                <label className={css.registrationLabel}>
                    Email
                    <Field className={css.registrationField} type="email" name="email" autoComplete="email" />
                </label>
                <label className={css.registrationLabel}>
                    Password
                    <Field className={css.registrationField} type="password" name="password" autoComplete="new-password" />
                </label>
                <button type="submit" className={css.registrationBtn}>Register</button>
            </Form>
        </Formik>
    );
}
