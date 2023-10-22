
import { useGetLikeSongsQuery } from "../API/tracks.api";
import { useDispatch } from "react-redux";
import { changeUser, dataFavorite, setLoadingFromApi, setPageName } from "../store/player.slice";
import DataSong from "../components/Tracks/DataTrack";
import { useEffect } from "react";
import { GetNewTokens } from "../API/user.api";

export const Favorites = () => {
  
  const dispatch = useDispatch()
  const namePage = 'favorites'
  const answer = JSON.parse(localStorage.getItem('Access'))
  const Mass = {
    Authorization: `Bearer ${answer}`,
    "content-type": "application/json",
}
dispatch(setPageName({namePage}))
const { data=[], isLoading, isError, isSuccess, error, refetch } = useGetLikeSongsQuery(Mass)
if (isLoading) {
  const dataLoading = true
  dispatch(setLoadingFromApi({dataLoading}))
  }
  if(isSuccess) {
    const dataLoading = false
    dispatch(setLoadingFromApi({dataLoading}))
    dispatch(dataFavorite({data}))
  }
  useEffect(() => {
    
    if(isError) {
      if(error.status === 401){
        refreshToken()
        refetch()
      }
    }
  }, [isError, error]);

  

  async function refreshToken() {
    const refresh = JSON.parse(localStorage.getItem('Refresh'));
    const user = await GetNewTokens({refresh})
    dispatch(changeUser({user}))
  }

    return (
      <DataSong />
        );
  }
