import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email).then(() => {
        alert(
          "we have send you a reset password email. check your inbox. It may take 5 min."
        );
      });
    },
    [email]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Forgot password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <input
          type="submit"
          value="Send reset password email"
          className="p-4 bg-pink-700 rounded-md"
        />
        <Link to="/sign_in">Back to sign in</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
