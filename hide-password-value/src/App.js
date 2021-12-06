import "./App.css";
import { useFormik } from "formik";

function App() {
    const handleSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(formik.values);
            }}
        >
            <input
                name="email"
                type="email"
                placeholder="email"
                {...formik.getFieldProps("email")}
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
