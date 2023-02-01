import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .max(150, 'São permitidos no máximo 150 caracteres para o título')
        .required('A postagem precisa de um título'),
    sub_title: yup
        .string()
        .max(250, 'São permitidos no máximo 250 caracteres para o título')
        .required('A postagem precisa de um sutítulo'),
    lead: yup
        .string(),
    content: yup
        .string()
        .required('A postagem precisa de um conteúdo')
});

export default function ContactForm() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            sub_title: '',
            lead: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="pl-44 pr-44 pb-28">
                <div className="flex flex-col">
                    <div className="mb-6">
                        <label>Name *</label>
                        <div className="flex gap-4 justify-between">
                            <div className="w-full">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    className="border-solid border-2 border-gray-200 w-full" />
                                <span>First Name</span>
                                {formik.touched.firstName && formik.errors.firstName}
                            </div>
                            <div className="w-full">
                                <input type="text" name="lastName" id="lastName" className="border-solid border-2 border-gray-200 w-full" />
                                <span>Last Name</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label>Email *</label>
                        <div className="w-full">
                            <input type="text" name="email" id="email" className="border-solid border-2 border-gray-200 w-full" />
                            <span>Email</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label>Subject *</label>
                        <div className="w-full">
                            <input type="text" name="subject" id="subject" className="border-solid border-2 border-gray-200 w-full" />
                            <span>Subject</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label>Need an Architect *</label>
                        <div className="flex gap-2">
                            <input type="checkbox" name="subject" id="subject" className="border-solid border-2 border-gray-200" /> Yes
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="subject" id="subject" className="border-solid border-2 border-gray-200" /> No (see sidebar for alternate contact form)
                        </div>
                    </div>
                    <div className="mb-6">
                        <label>Message *</label>
                        <span>Tell me about your project (timeline, scope, etc.)</span>
                        <div className="w-full">
                            <textarea name="message" id="message" rows={4} className="border-solid border-2 border-gray-200 w-full" />
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}