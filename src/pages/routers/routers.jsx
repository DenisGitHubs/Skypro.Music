import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { Main } from "../main";
import { Favorites } from "../favorites"
import { Category } from "../category";
import { ProtectedRoute } from "../protect-road";
import {ParentAuth} from "../authpage/ParentAuthPage";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";



export const AppRoutes = ({bearer, setBearer, myFavorite, setMyFavorite, ...childRest}) => {
const [page, setPage] = useState('main')
  return (
    <>
    <Routes>
        <Route element={<ProtectedRoute bearer={Boolean(bearer)} />}>
        <Route path="/" element={<Layout {...childRest} setBearer={setBearer} page={page} />}>
          <Route path="favorites" element={<Favorites myFavorite={myFavorite} setMyFavorite={setMyFavorite} setBearer={setBearer} {...childRest} setPage={setPage}/>} />
          <Route path="category/:id" element={<Category />} />
          <Route index element={<Main setPage={setPage} setBearer={setBearer} {...childRest}/>} />
          </Route>
        </Route>
        <Route
        path="/login"
        element={<ParentAuth  isloginmode={true} setBearer={setBearer} ></ParentAuth>}
      ></Route>

      <Route
        path="/register"
        element={<ParentAuth  isloginmode={false} setBearer={setBearer.setBearer}></ParentAuth>}
      ></Route>
        <Route path="*" element={<NotFound />} />

      </Routes></>

  );
};
