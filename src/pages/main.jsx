import '../App.css';
import DataSong from '../components/Tracks/DataTrack.js';
import React, { useEffect } from "react";
import { getAllTracks } from '../Api/Tracks.API';
import { useDispatch} from 'react-redux';
import { dataSongs,} from '../store/player.slice';


export const Main = ({ 
  setNewError, 
  isPlaying, 
  setTrackName,
  setSongerName,
  setSong,
  setDuration,
  setIsPlaying,
  song,
  loading,
  setLoading,
  setPage,
 }) => {
  setPage('main')

const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        getAllTracks().then((tracks) => {
          dispatch(dataSongs({tracks}))
        })
  
      } catch (error) {
        setNewError(error.message)
      }
  
    }
  fetchData()
  }, []);

    

    useEffect(() => {
      setLoading.setLoading(true);
      const timer = setTimeout(() => {
        setLoading.setLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);


    const restToDataSong = {
      isPlaying: {isPlaying}, 
      setTrackName: {setTrackName},
      setSongerName: {setSongerName},
      setSong: {setSong},
      setDuration: {setDuration},
      setIsPlaying: {setIsPlaying},
      song: {song},
      
    }
    return (
  <DataSong 
    loading={loading.loading}
    {...restToDataSong}
 />
    );
  }
