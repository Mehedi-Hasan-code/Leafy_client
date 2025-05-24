import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Forget = () => {
  useDocumentTitle('Forget Password')
  const { forgetPassword } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    forgetPassword(email)
      .then(() => window.open("https://gmail.com", "_blank"))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <div className="w-11/12 mx-auto grow">
      <div className="border p-4 md:p-6 w-fit mx-auto my-20">
        <form onSubmit={handleSubmit} className="space-y-3">
          <h1 className="text-4xl font-bold">Forget Password ?</h1>
          <label className="label">Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your Email"
            defaultValue={emailFromLogin}
            required
          />
          <button type="submit" className="btn btn-primary text-white">
            Reset Password
          </button>
          {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Forget;
