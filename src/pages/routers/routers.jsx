import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { ParentAuth } from "../authpage/ParentAuthPage";
import { ProtectedRoute } from "../protect-road";
import { Layout } from "../../components/Layout/Layout";
import { Main } from "../main";
import { Favorites } from "../favorites"
import { Category } from "../category";
export const AppRoutes = () => {

  return (
    <>
    <Routes>
        <Route element={<ProtectedRoute  />}>
        <Route path="/" element={<Layout />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Category />} />
          <Route index element={<Main />} />
          </Route>
        </Route>

        <Route path="/login" element={<ParentAuth />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      
      </>

  );
};
