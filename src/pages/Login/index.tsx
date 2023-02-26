import { Box } from "@mui/material";
import { FormEvent, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const routeQuery = new URLSearchParams(useLocation().search);

  const [showPassword, setShowPassword] = useState(false);
  const [onRequest, setOnRequest] = useState(false);
  const [step, setStep] = useState(0);
  const [forgot, setForgot] = useState(false);

  const navigate = useNavigate();

  function JwtDecode<T>(arg0: string): { permission: any } {
    throw new Error("Function not implemented.");
  }

  const postLogin = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    setOnRequest(true);
    e.preventDefault();

    // try {
    //   const { value } = await UserAPI.postLogin({
    //     userName: userRef.current?.value || "",
    //     password: passwordRef.current?.value || "",
    //     grantTypes: "password",
    //   });

    //   const { token } = value;
    //   const { permission } = JwtDecode<any>(`Bearer ${token.accessToken}`);

    //   var urlCallback = routeQuery.get("url_callback");
    //   var urlReturn = routeQuery.get("url_return") ?? "";

    //   if (urlCallback) {
    //     window.location.href = `${urlCallback}?url_return=${urlReturn}&access_token=${token.accessToken}`;
    //     return;
    //   }

    //   login(token, permission);

    //   setOnRequest(false);

    //   // setAlert({
    //   //   open: true,
    //   //   type: "success",
    //   //   message: "Login efetuado com sucesso.",
    //   //   positionX: "center",
    //   //   positionY: "top",
    //   // });

    //   setTimeout(() => {
    //     navigate("/");
    //   }, 1000);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setOnRequest(false);
    // }
  }, []);
  return <Box>page login</Box>;
}
