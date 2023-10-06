import { useEffect } from "react";
import { DataMyFavorites } from "../components/Tracks/DataMyFavorites";
import { useGetLikeSongsQuery } from "../Api/User.API";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataFavorite } from "../store/player.slice";
export const Favorites = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
useEffect(() => {
  props.setPage('favorites')
}, [])
  useEffect(() => {

    props.setLoading.setLoading(true);
    const timer = setTimeout(() => {
      props.setLoading.setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);



// const {data = [], isLoading, isError } = useGetFavorSongsQuery()

const answer = JSON.parse(localStorage.getItem('Active')).Access

const Mass = {
    Authorization: `Bearer ${answer}`,
    "content-type": "application/json",
}

const { data=[], isLoading, isError } = useGetLikeSongsQuery(Mass)
if (isLoading) return <h1>Loading...</h1>
if (isError) {
  navigate('/login')
  return
}
dispatch(dataFavorite({data}))


    const restToDataSong = {
      data: {data},
      isPlaying: props.isPlaying.isPlaying, 
      setTrackName: props.setTrackName.setTrackName,
      setSongerName: props.setSongerName.setSongerName,
      setSong: props.setSong.setSong,
      setDuration: props.setDuration.setDuration,
      setIsPlaying: props.setIsPlaying.setIsPlaying,
      song: props.song.song,
      loading: props.loading.loading
    }
    return (
      <DataMyFavorites
        {...restToDataSong}
     />
        );
  }
