import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { Main } from "../main";
import { Login } from "../login";
import { Registration } from "../reg";
import { Favorites } from "../favorites"
import { Category } from "../category";
import { ProtectedRoute } from "../protect-road";

export const AppRoutes = ({ user,
   onAuthButtonClick,
    player,
     setPlayer,
      massiveData,
       songerName,
        trackName,
         setTrackName,
          setSongerName,
          setTimeToLoadData,
          timeToLoadData,
          setAllTracks,
          error
        }) => {
  return (
    <Routes>
    <Route path="/login" element={<Login 
    user={user}
     onAuthButtonClick={onAuthButtonClick}
     setTimeToLoadData={setTimeToLoadData}
     timeToLoadData={timeToLoadData}
    />} />
    <Route path="/register" element={<Registration />} />
    <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/" element={<Main onAuthButtonClick={onAuthButtonClick}
         player={player}
         setPlayer={setPlayer}
         massiveData={massiveData}
         songerName={songerName}
         trackName={trackName}
         setTrackName={setTrackName}
         setSongerName={setSongerName}
         setAllTracks={setAllTracks}
/>} />
      </Route>

    <Route path="*" element={<NotFound />} />

    </Routes>
  );
};