import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import UserView from "./components/user-view";
import { ThemContext } from "./utils/theme-context";
import { userActions } from "./actions"
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState('primary');
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(userActions.fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemContext.Provider value={{ themeColor: theme, changeTheme: setTheme }}>
        <UserView />
      </ThemContext.Provider>
    </BrowserRouter>
  );
}
