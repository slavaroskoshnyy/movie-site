// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const history = useNavigate();


//   const { query, push } = useRouter();

//   const redirect = String(query.redirect) || "/";

//   useEffect(() => {
//     if (user) push(redirect);
//   }, [user, redirect, push]);
};
