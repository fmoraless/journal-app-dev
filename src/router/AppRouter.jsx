import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui";
import { useEffect, useId } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // observable
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName } = user;
      dispatch(login(uid, email, displayName));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}
      {/* Login y registro */}
      {/*  <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* Journal app */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
