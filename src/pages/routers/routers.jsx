import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { Main } from "../main";
import { Favorites } from "../favorites"
import { Category } from "../category";
import { ProtectedRoute } from "../protect-road";
import {ParentAuth} from "../authpage/ParentAuthPage";



export const AppRoutes = ({
  bearer,
   onAuthButtonClick,
       songerName,
        trackName,
         setTrackName,
          setSongerName,
          isPlaying,
          setIsPlaying,
          song,
          setSong,
          duration,
          setDuration,
          changeDuration,
          setChangeDuration,
          setIsLoop,
          isLoop,
          setBearer

        }) => {

  return (
    <>
    <Routes>
        <Route element={<ProtectedRoute bearer={Boolean(bearer)} />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/" element={<Main onAuthButtonClick={onAuthButtonClick}
          setBearer={setBearer}
            songerName={songerName}
            trackName={trackName}
            setTrackName={setTrackName}
            setSongerName={setSongerName}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            song={song}
            setSong={setSong}
            duration={duration}
            setDuration={setDuration}
            changeDuration={changeDuration}
            setChangeDuration={setChangeDuration}
            setIsLoop={setIsLoop}
            isLoop={isLoop} />} />
        </Route>
        <Route
        path="/login"
        element={<ParentAuth  isloginmode={true} setBearer={setBearer} ></ParentAuth>}
      ></Route>

      <Route
        path="/register"
        element={<ParentAuth  isloginmode={false} setBearer={setBearer}></ParentAuth>}
      ></Route>
        <Route path="*" element={<NotFound />} />

      </Routes></>

  );
};
