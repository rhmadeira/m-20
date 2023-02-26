import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import JwtDecode from "jwt-decode";
// import { env } from '../environment/env';

export type AuthContextDefault = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  roles: string;
  setRoles: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  permissions: string;
  setPermissions: Dispatch<SetStateAction<string>>;
  webSocket: WebSocket | null;
};

export const AuthContext = React.createContext<AuthContextDefault>(
  {} as AuthContextDefault
);

const STORE = {
  jwt: "jwtSecurityToken",
  permissions: "permissions",
};

const AuthProvider = ({ children }: any): JSX.Element => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
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
      const baseUrl = process.env.REACT_APP_IDENTITY_BASE_URL;
      window.location.href = `${baseUrl}/login?url_return=${pathname}&url_callback=${origin}/login-callback`;
    }
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     const { id } = JwtDecode<any>(`Bearer ${token}`);

  //     const url = env.api.url.replace("https", "wss").replace(/api$/, "ws");
  //     const ws = new WebSocket(url + "?userId=" + id);

  //     ws.onopen = (_) => {
  //       ws.onmessage = (ev) => console.log("Mensagem recebida: ", ev.data);
  //       setWebSocket(ws);
  //     };

  //     ws.onerror = (ev) => {
  //       console.error("Falha ao conectar ao websocket", ev);
  //     };

  //     ws.onclose = (_) => setWebSocket(null);
  //   }
  // }, [token]);

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
        webSocket,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
