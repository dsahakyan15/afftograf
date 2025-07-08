import React, { useState } from "react";
import { auth, actionCodeSettings, sendSignInLinkToEmail } from "shared/api/firebase";
import styles from "./SignIn.module.css";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem("emailForSignIn", email);
            window.localStorage.setItem("nameForSignIn", name);
            setMessage("Ссылка для входа отправлена на вашу почту.");
        } catch (err: any) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className={styles.signIn}>
            <div onSubmit={handleSubmit} className={styles.signInForm}>
                <h2 className={styles.title}>Вход по ссылке</h2>
                <input
                    type="email"
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Введите email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Введите имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    disabled={loading}
                >
                    {loading ? "Отправка..." : "Получить ссылку для входа"}
                </button>
                {message && <div className="text-green-600 mt-4">{message}</div>}
                {error && <div className="text-red-600 mt-4">{error}</div>}
            </div>
        </div>
    );
};

export default SignIn;
