import {Form} from "react-router-dom";
import {useLocalStorage} from "./useLocalStorage";
import './forms.css';

let historyId = 0;
export async function action({request}) {
    const formData = await request.formData();
    let newForm = Object.fromEntries(formData);
    newForm = {
        ...newForm,
        id: historyId++
    }
    let history = localStorage.getItem("history");
    if (history === null) {
        history = [];
    } else {
        history = JSON.parse(history);
    }
    history.push(newForm);
    localStorage.setItem('history', JSON.stringify(history));
    return {history};
}

export default function Forms() {
    const [form, setForm] = useLocalStorage('form', {});

    return (
        <Form method='post' id='forms' onSubmit={e => {
            setForm({})
        }}>
            <label>
                <span>First name</span>
                <br/>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={form.firstName ?? ""}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
                <br/>
            </label>
            <label>
                <span>Last name</span>
                <br/>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={form.lastName ?? ""}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        })
                    }}
                />
                <br/>
            </label>
            <label>
                <span>Email</span>
                <br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email ?? ""}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }}
                />
                <br/>
            </label>
            <label>
                <span>Phone</span>
                <br/>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone ?? ""}
                    onChange={e => {
                        setForm({
                            ...form,
                            phone: e.target.value
                        })
                    }}
                />
                <br/>
            </label>
            <label>
                <span>Address</span>
                <br/>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address ?? ""}
                    onChange={e => {
                        setForm({
                            ...form,
                            address: e.target.value
                        })
                    }}
                />
            </label>
            <br/>
            <button type="submit" id="submit-button">Submit form</button>
        </Form>
    )
}