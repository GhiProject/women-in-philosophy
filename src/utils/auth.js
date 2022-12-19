import React, { useState } from "react"

const KEY = "password"
const PASSWORD = "wip"
const AuthPage = () => {
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        window.localStorage.setItem(KEY, password)
        window.location.reload();
    };

    return (
        <form onSubmit={onSubmit} style={{ "margin": "1em" }}>
            <input
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter password"
            />

            <button
                type="submit"
            >
                Enter
            </button>
        </form>
    );
}

function withAuth(comp) {
    const storedPass = (typeof window !== "undefined") ? (window.localStorage.getItem(KEY) || new URLSearchParams(document.location.search).get(KEY)) : ""
    return storedPass === PASSWORD ? comp : AuthPage
}

export default withAuth