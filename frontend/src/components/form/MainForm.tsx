import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

const MainForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const sendData = async () => {
    if (email.length === 0 || username.length === 0) {
      cogoToast.info("Username or email field empty");
    } else {
      try {
        const response = await axios.post(`${window.location.href}api/invite`, {
          email: email,
          username: username,
        });

        if (response.data.status === 201) {
          cogoToast.success("Invitation sent!");
          setEmail("");
          setUsername("");
        }
        if (response.data.status === 404) {
          cogoToast.error("User not found");
        }
        if (response.data.status === 400) {
          cogoToast.error("Invitation failed");
        }
        if (response.data.status === 429) {
          cogoToast.error("Too many requests.Try again in 1 minute");
        }
      } catch (error) {
        cogoToast.error("Something wrong");
      }
    }
  };

  //${window.location.href}

  return (
    <div className="mt-4 ml-2 mr-2 ">
      <input
        type="text"
        placeholder="Github E-mail"
        className="bg-white bg-opacity-50 w-full text-2xl pt-2 pb-2 pl-2 shadow-lg rounded-lg border border-opacity-50 border-light-cherry text-gray-500 focus:outline-none  focus:border-blue-300 "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Github Username"
        className="mt-2 bg-white bg-opacity-50 w-full text-2xl pt-2 pb-2 pl-2 shadow-lg rounded-lg border border-opacity-50 border-light-cherry text-gray-500  focus:outline-none  focus:border-blue-300"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-2 w-32 rounded-md shadow-lg text-white font-bold mt-4 lg:float-right xl:float-none"
        onClick={sendData}
      >
        Submit
      </button>
    </div>
  );
};

export default MainForm;
