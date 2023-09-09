import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { Main } from "../main";
import { Login } from "../login";
import { Registration } from "../reg";
import { Favorites } from "../favorites"
import { Category } from "../category";
import { ProtectedRoute } from "../protect-road";

export const AppRoutes = ({ user, onAuthButtonClick, player, setPlayer, trackName, setTrackName, songerName, setSongerName}) => {
  return (
    <Routes>
    <Route path="/login" element={<Login user={user} onAuthButtonClick={onAuthButtonClick}/>} />
    <Route path="/register" element={<Registration />} />
    <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/" element={<Main onAuthButtonClick={onAuthButtonClick}
         player={player}
          setPlayer={setPlayer}
          trackName={trackName}
          setTrackName={setTrackName}
          songerName={songerName}
          setSongerName={setSongerName}/>} />
      </Route>

    <Route path="*" element={<NotFound />} />

    </Routes>
  );
};