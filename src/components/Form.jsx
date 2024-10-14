import { useState } from "react";


const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        setFlag(true);
    };


    return (
        <div
            style={{
                flex: 4,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {(flag)&&<div style={{color: "green", marginBottom: 10}}>
                Message sent successfully.
            </div>}
            <input
                style={{ padding: 10, marginBottom: 20, width: "500px" }}
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                style={{ padding: 10, marginBottom: 20, width: "500px" }}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                style={{ padding: 10, marginBottom: 20, width: "500px", height: "300px" }}
                type="text"
                value={message}
                placeholder="Write your message here"
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
                Submit
            </button>
        </div>
    );
};

export default Login;