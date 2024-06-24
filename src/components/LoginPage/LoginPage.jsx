import { Formik,Field,Form } from "formik";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        
    dispatch(logIn(values))
      .unwrap()
    actions.resetForm();
  };


   return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
        >
            <Form autoComplete="off">
                <label>
                    Email
                    <Field type="email" name="email" autoComplete="email" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" autoComplete="current-password" />
                </label>
                <button type="submit">
                    Log in
                </button>
            </Form>
        </Formik>
    );
};