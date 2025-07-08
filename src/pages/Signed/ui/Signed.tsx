import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, isSignInWithEmailLink, signInWithEmailLink } from "shared/api/firebase";

const Signed: React.FC = () => {
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const doSignIn = async () => {
            try {
                const emailLink = window.location.href;
                if (isSignInWithEmailLink(auth, emailLink)) {
                    let email = window.localStorage.getItem("emailForSignIn");
                    if (!email) {
                        // Optionally, prompt user for email if not found in localStorage
                        email = window.prompt("Введите ваш email для подтверждения входа:");
                    }
                    if (!email) throw new Error("Email не найден.");
                    await signInWithEmailLink(auth, email, emailLink);
                    window.localStorage.removeItem("emailForSignIn");
                    setStatus("success");
                } else {
                    setStatus("error");
                    setError("Ссылка для входа недействительна.");
                }
            } catch (err: any) {
                setStatus("error");
                setError(err.message);
            }
        };
        doSignIn();
    }, [location]);

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div>Проверка ссылки...</div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-600">
                    Ошибка входа: {error}
                    <button className="ml-4 underline" onClick={() => navigate("/")}>Попробовать снова</button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <div className="text-3xl mb-4">✅</div>
                <div className="text-xl font-bold">Вы успешно вошли!</div>
            </div>
        </div>
    );
};

export default Signed;
