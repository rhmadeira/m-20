import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import JwtDecode from "jwt-decode";

export type AuthContextDefault = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  roles: string;
  setRoles: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  permissions: string;
  setPermissions: Dispatch<SetStateAction<string>>;
};

export const AuthContext = React.createContext<AuthContextDefault>(
  {} as AuthContextDefault
);

const STORE = {
  jwt: "jwtSecurityToken",
  permissions: "permissions",
};

const AuthProvider = ({ children }: any): JSX.Element => {
  const [token, setToken] = useState(localStorage.getItem(STORE.jwt) || "");
  const [roles, setRoles] = useState(localStorage.getItem("roles") || "");
  const [username, setUsername] = useState(
    localStorage.getItem("unique_name") || ""
  );
  const [permissions, setPermissions] = useState(
    localStorage.getItem(STORE.permissions) || ""
  );

  // Realiza o redirect caso o token não exista
  useEffect(() => {
    let { origin, pathname } = window.location;

    if (!token && pathname !== "/login-callback") {
      const baseUrl = import.meta.env.VITE_API_IDENTITY_BASE_URL;
      window.location.href = `${baseUrl}/login?url_return=${pathname}&url_callback=${origin}/login-callback`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        roles,
        setRoles,
        username,
        setUsername,
        permissions,
        setPermissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
