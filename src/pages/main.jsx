import '../App.css';
import DataSong from '../components/Tracks/DataTrack.js';
import React, { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { createCopyData, deleteAllFilters, mainListFromApi, setLoadingFromApi, setPageName} from '../store/player.slice';
import { useGetAllSongsQuery } from '../API/tracks.api';
import { useNavigate } from "react-router-dom";


export const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const namePage = 'main'

  useEffect(() => {
    dispatch(deleteAllFilters())
  }, [])
  dispatch(setPageName({namePage}))

  const { data=[], isLoading, isError, isSuccess } = useGetAllSongsQuery()
if (isLoading) {
  const dataLoading = true
  dispatch(setLoadingFromApi({dataLoading}))
  }
  if(isSuccess) {
    const dataLoading = false
    dispatch(setLoadingFromApi({dataLoading}))
    dispatch(mainListFromApi({data}))
    dispatch(createCopyData({data}))
  }
if (isError) {
  navigate('/login')
  return
}


    return (
  <DataSong />
    );
  }
