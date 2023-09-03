import React, { useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.displayName) {
      navigate("/home", { replace: true });
    }
  }, [user]);

  return (
    <>
      {!user && <div onClick={handleSignInWithGoogle}>Login with google</div>}
    </>
  );
};

export default Login;
