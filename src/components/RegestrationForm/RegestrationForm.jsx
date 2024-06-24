import { Field, Form, Formik } from "formik";

export default function RegistrationForm() {
    const handleSubmit = (values, actions) => {
        console.log(values);
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
