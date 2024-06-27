import { Formik,Field,Form } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css"

export const LoginPage = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        
    dispatch(logIn(values))
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
            <Form autoComplete="off" className={css.loginForm}>
                <label className={css.loginLabel}>
                    Email
                    <Field className={css.loginField} type="email" name="email" autoComplete="email" />
                </label>
                <label className={css.loginLabel}>
                    Password
                    <Field className={css.loginField} type="password" name="password" autoComplete="current-password" />
                </label>
                <button type="submit" className={css.loginBtn}>
                    Log in
                </button>
            </Form>
        </Formik>
    );
};