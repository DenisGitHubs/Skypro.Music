import { useParams } from "react-router-dom";
import { Playlists } from "../components/Sidebar/RightSideBar";
import { useGetAllSongsQuery } from "../API/tracks.api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryCreateList, setLoadingFromApi, setPageName } from "../store/player.slice";
import DataSong from "../components/Tracks/DataTrack";
import { useEffect, useState } from "react";
import '../App.css';
import React from "react";


export const Category = () => {
  const navigate = useNavigate()
  const params = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(null)
  const [searchGenre, setSearchGenre] = useState(null)
  let namePage = page
  const list = Playlists.find((list) => list.id === Number(params.id));
  const { data=[], isLoading, isError, isSuccess } = useGetAllSongsQuery()
  useEffect(() => {
    if(list.id === 1){setPage('rock'); setSearchGenre("Рок музыка")}
    if(list.id === 2){setPage('classic'); setSearchGenre("Классическая музыка")}
    if(list.id === 3){setPage('electro'); setSearchGenre("Электронная музыка")}
  }, [list])


  if (isLoading) {
    const dataLoading = true
    dispatch(setLoadingFromApi({dataLoading}))
    }
    if(isSuccess) {
      const dataLoading = false
      dispatch(setLoadingFromApi({dataLoading}))
      searchCategorySongs()
    }
  if (isError) {
    navigate('/login')
    return
  }
  dispatch(setPageName({namePage}))
  function searchCategorySongs () {
      const dataCategory = data.filter(Song => Song.genre === searchGenre);
      dispatch(categoryCreateList({dataCategory}))
    }
    return <DataSong />
  }



  