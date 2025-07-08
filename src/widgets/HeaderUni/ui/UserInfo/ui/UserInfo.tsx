import React, { useEffect, useState } from "react";
import { auth } from "shared/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { MdLogout } from "react-icons/md";
import type { User } from "firebase/auth";
import styles from "./UserInfo.module.css";
import { PiShoppingCartSimple } from "react-icons/pi";

const UserInfo: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await auth.signOut();
    };

    if (user) {
        // Show user's email or displayName
        const localName = window.localStorage.getItem("nameForSignIn");
        const displayName = user.displayName || localName || user.email;
        return (
            <div className={styles.userInfo}>

                <button title="Cart" className={styles.cart}>
                    <PiShoppingCartSimple />
                </button>
                <span className={styles.displayName}>{displayName}</span>
                <button onClick={handleSignOut} className={styles.logout}>
                    <MdLogout />
                </button>
            </div>
        );
    } else {
        // Not signed in
        return (
            <div className={styles.signIn}>
                <a href="/SignIn">Личные данные</a>
            </div>
        );
    }
};

export default UserInfo;
