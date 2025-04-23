import { useState } from "react";

function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [saran, setSaran] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Saran:", saran);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nama Lengkap</label>
                <input type="text" value={username} className="form-control" id="exampleFormControlInput1" onChange={(event) => setUsername(event.target.value)}
                placeholder="Nama Lengkap Anda" />    
            </div>
            <div className="mb-3">
                <label className="form-label">Alamat Email</label>
                <input type="text" value={email} className="form-control" id="exampleFormControlInput1" onChange={(event) => setEmail(event.target.value)}
                placeholder="Name@example.com" />    
            </div>
            <div className="mb-3">
                <label className="form-label">Masukkan Saran</label>
                <textarea type="text" value={saran} className="form-control" id="exampleFormControlInput1" onChange={(event) => setSaran(event.target.value)}>
                </textarea>   
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Contact;