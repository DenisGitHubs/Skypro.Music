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
    player,
     setPlayer,
      massiveData,
       songerName,
        trackName,
         setTrackName,
          setSongerName,
          setAllTracks,
          isPlaying,
          setIsPlaying,
          song,
          setSong,
          allTracks,
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
            player={player}
            setPlayer={setPlayer}
            massiveData={massiveData}
            songerName={songerName}
            trackName={trackName}
            setTrackName={setTrackName}
            setSongerName={setSongerName}
            setAllTracks={setAllTracks}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            song={song}
            setSong={setSong}
            allTracks={allTracks}
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
