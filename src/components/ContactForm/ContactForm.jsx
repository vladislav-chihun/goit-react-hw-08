import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector} from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

const contactSchema = Yup.object().shape({
    nameField: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    numberField: Yup.number().required("Required")
});

export default function ContactForm() {
    const dispatch = useDispatch();

     const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    const handleSubmit = (values,{resetForm}) => {
        const newContact = {
            name: values.nameField,
            number: values.numberField
        };
        dispatch(addContact(newContact));
        resetForm();
    };

    return (
        <Formik initialValues={{ nameField: "", numberField: "" }} validationSchema={contactSchema} onSubmit={handleSubmit}>
            <Form className={css.contactForm}>
                {isLoading && <p>Loading...</p>}
                <div className={css.contactFieldContainer}>
                    <label htmlFor="nameField" className={css.contactLabel}>Name</label>
                    <Field className={css.contactField} type="text" name="nameField" id="nameField" />
                    <ErrorMessage name="nameField" component="div" className={css.errorMessage} />
                </div>
                <div className={css.contactFieldContainer}>
                    <label htmlFor="numberField" className={css.contactLabel}>Number</label>
                    <Field className={css.contactField} type="text" name="numberField" id="numberField" />
                    <ErrorMessage name="numberField" component="div" className={css.errorMessage} />
                </div>
                <button name="AddContactField" type="submit" className={css.contactBtn}>Add contact</button>
            </Form>
        </Formik>
    );
}