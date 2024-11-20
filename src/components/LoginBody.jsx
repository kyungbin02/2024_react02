import React, { useState } from "react";

function LoginBody() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        console.log("아이디:", username);
        console.log("비밀번호:", password);
        alert("로그인 성공!");
    };

    return (
        <div className="login-container">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    아이디:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    비밀번호:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginBody;
