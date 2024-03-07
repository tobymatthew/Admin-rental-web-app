import React, { useState, useEffect } from "react";
import { login, resetSuccess } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [invalid, setInvalid] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, success, currentUser, error } = useSelector(
    (state) => state.user
  );
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the email and password to your authentication API here
    // If the authentication is successful, you can redirect the user to the home page or show a success message
    // If the authentication fails, you can show an error message

    console.log("Email:", email);
    console.log("Password:", password);
    login(dispatch, { email, password });
  };

  const { setActiveMenu, setBigNav, setSmallNav, bigNav } = useStateContext();

  useEffect(() => {
    if (success && currentUser !== null) {
      if (currentUser.msg) {
        setInvalid(currentUser.msg);
        console.log(currentUser.msg);
        resetSuccess(dispatch);
      } else if (currentUser.data.d_email !== "cynthia@getcargenie.com") {
        setAdmin(true);
      } else {
        resetSuccess(dispatch);
        navigate("/dashboard");
      }
    }
  }, [currentUser, isFetching, error, success, dispatch, navigate]);

  useEffect(() => {
    setBigNav(false);
    setSmallNav(false);
    setActiveMenu(false);
  }, [setBigNav, setSmallNav, setActiveMenu]);

  return (
    <div className="bg-primary min-h-screen p-10 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-center text-white text-3xl font-medium mb-6">
          Hello, Admin
        </h1>
        <h2 className="text-center text-white text-1xl font-medium mb-6">
          Log into your dashboard and be awesome!
        </h2>

        {admin && (
          <p className="text-center text-red text-1xl font-medium mb-6">
            User not admin
          </p>
        )}
        {invalid && (
          <p className="text-center text-red text-1xl font-medium mb-6">
            Email or password is incorrect
          </p>
        )}

        <form
          className="bg-white rounded-lg p-6 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-black font-bold text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-black text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button
            className="w-full mt-4 bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
            type="submit"
            onClick={handleSubmit}
            disabled={isFetching}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
