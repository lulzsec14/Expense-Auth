// src/views/profile.js

import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import MainApp from './MainApp/MainApp'

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  // useEffect(() => {
  //   localStorage.setItem("uid", user.sub);
  // }, []);

  return (
    <div>
      <MainApp />
    </div>
  );
};

export default Profile;
