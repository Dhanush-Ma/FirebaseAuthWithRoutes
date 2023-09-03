import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { signout, user } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signout();
    navigate("/");
  };

  return (
    <>
      {user?.displayName && (
        <div>
          {user.displayName}
          <img src={user.photoURL} alt="" />
          {JSON.stringify(user)}
          <p onClick={handleLogout}>Logout</p>
        </div>
      )}
    </>
  );
};

export default Home;
