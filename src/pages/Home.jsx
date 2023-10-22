import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">{user.displayName}</p>
          <p className="text-lg text-gray">{user.email}</p>
        </div>
        {/* <h1>home pages</h1> */}
        <button onClick={handleSignOut} className="p-4 bg-pink-400 rounded md">
          Sign out
        </button>
      </div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
