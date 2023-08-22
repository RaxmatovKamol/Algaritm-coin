import { Layout } from "./Components/Layout/Layout";
import { Route, Routes, Link } from "react-router-dom";
import { Students } from "./Pages/Students/Students";
import { Auth } from "./Pages/Login/Auth";
import { Login } from "./Pages/Login/Login";
export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<Students />} />
          <Route path="edit-student" element={<EditStudent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

const EditStudent = () => {
  return <h1>Edit Student</h1>;
};

const NotFound = () => {
  return;
  <h1>
    404 - Not Found
    <Link to="/">Go Home</Link>
  </h1>;
};
