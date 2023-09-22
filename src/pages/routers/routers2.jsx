import { Routes, Route } from "react-router-dom";
import { NotFound } from "../not-found";
import { Main } from "../main";
import { Favorites } from "../favorites"
import { Category } from "../category";
import { ProtectedRoute } from "../protect-road";
import AuthPage from "../authpage/AuthPage";
import { ActiveUserContext } from "../../context/login.context";
import { useContext, useState } from "react";
import { dataUser } from "../../context/login.context";


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
          error,
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
          setEmail,
          setPassword,
          setRepeatPassword

        }) => {

  return (
    <><Routes>

      <Route
        path="/login"
        element={<ActiveUserContext.Provider value= {dataUser} ><AuthPage isLoginMode={true}
        setEmail={setEmail}
        setPassword={setPassword}
        setRepeatPassword={setRepeatPassword} ></AuthPage></ActiveUserContext.Provider>}
      ></Route>

      <Route
        path="/register"
        element={<ActiveUserContext.Provider value={dataUser} ><AuthPage isLoginMode={false}
          setEmail={setEmail}
          setPassword={setPassword}
          setRepeatPassword={setRepeatPassword}></AuthPage></ActiveUserContext.Provider>}
      ></Route>

    </Routes><Routes>
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

        <Route path="*" element={<NotFound />} />

      </Routes></>

  );
};

/* <Route path="/login" element={<Login 
  user={user}
   onAuthButtonClick={onAuthButtonClick}
   setTimeToLoadData={setTimeToLoadData}
   timeToLoadData={timeToLoadData}
  />} />
  <Route path="/register" element={<Registration />} /> */