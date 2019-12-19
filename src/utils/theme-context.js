import React from "react";

export const ThemContext = React.createContext({
    themeColor: 'primary',
    changeTheme: () => { }
})