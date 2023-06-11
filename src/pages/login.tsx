import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div>
      <p>Sign with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
