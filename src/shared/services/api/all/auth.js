

export const TOKEN_KEY = "@xx@AS01PT";
export const REFRESH_TOKEN_KEY = "@xx@AS01PTR";
export const PROFILE = "@xx@AS01P";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getExpirationToken = () => localStorage.getItem('dtExpiracao');
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const getLoginSys = () => localStorage.getItem('login');
export const getPerfil = () => localStorage.getItem(PROFILE);

export const login = (objeto, login) => {

  localStorage.setItem("cod_usuario", objeto.codUsuario);
  localStorage.setItem("nome", objeto.nomeUsuario);
  localStorage.setItem("login", login);
  localStorage.setItem("dtExpiracao", objeto.expiration);
  localStorage.setItem("dtCriacao", objeto.created);
  localStorage.setItem(TOKEN_KEY, objeto.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, objeto.refreshToken);
  localStorage.setItem(PROFILE, objeto.perfilUsuario);
};

export const logout = () => {
  localStorage.removeItem("cod_usuario");
  localStorage.removeItem("nome");
  localStorage.removeItem("login");
  localStorage.removeItem("dtExpiracao");
  localStorage.removeItem("dtCriacao");
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(PROFILE);
}; 