import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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
            <Form autoComplete="off">
                <label>
                    Username
                    <Field type="text" name="name" autoComplete="username" />
                </label>
                <label>
                    Email
                    <Field type="email" name="email" autoComplete="email" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" autoComplete="new-password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}
