import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user in state", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
  }, []);

  const userEmail = useSelector((store) => {
    console.log("store", store);
    return store.user?.email;
  });
  const handleUserSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("auth in signout", auth);
      })
      .catch((error) => {});
  };
  return (
    <div className=" absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex justify-between">
      <img src={LOGO} alt="logo" className="w-44" />

      {userEmail && (
        <div className="flex justify-between" data-dropdown-toggle="dropdown" data-dropdown-trigger="hover" data-dropdown-delay="500">
          <img className="w-16 m-2 rounded-full" src={USER_ICON} alt="icon" />
          <button className="font-bold text-slate-50 my-6 mx-2" onClick={handleUserSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
