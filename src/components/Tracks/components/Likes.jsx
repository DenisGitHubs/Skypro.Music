import { useEffect, useState } from "react";
import { useGetLikeSongsQuery, usePostDisLikeMutation, usePostLikeMutation} from "../../../API/tracks.api";
import { GetNewTokens } from "../../../API/user.api";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../../store/player.slice";
import * as S from "../Track.styles";
const userName = JSON.parse(localStorage.getItem('userName'))

export function TrackLikes (props) {
    const noLike = <use xlinkHref="img/icon/sprite.svg#icon-like" />;
    const likeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
  >
    <path
      d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
      fill="#B672FF"
    />
    <path
      d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
      stroke="#B672FF"
    />
  </svg>
);
const answer = JSON.parse(localStorage.getItem("Access"));
const Mass = {
    Authorization: `Bearer ${answer}`,
    "content-type": "application/json",
}
    const [disData, { error, isError, isSuccess }] = usePostDisLikeMutation();
    const [Likedata, { error: createError, isError: createNewError, isSuccess: likeOnSuccess }] = usePostLikeMutation();
    const { data=[], isSuccess: likeSongIsSuccess, isError: likeSongIsError, error: likeSongError, refetch } = useGetLikeSongsQuery(Mass)
    const id = props.item.id;
    const item = props.item;
    const [button, setButton] = useState(false);
    const load = useSelector((state) => state.player.loadingFromApi);
    const dispatch = useDispatch();
    useEffect(() => {
      if(likeSongIsError) {
        if(likeSongError.status === 401){
          refreshToken()
          refetch()
        }
      }
    }, [isError, error]);
    useEffect(() => {
        if (isError) {
          if (error.status === 401) {
            RefreshToken();
          }
        }
      }, [isError, error]);
      useEffect(() => {

        if (createNewError) {
          if (createError.status === 401) {
            RefreshToken();
          }
        }
      }, [createNewError, createError]);
useEffect(() => {
  let result = data.find(e => e.name === item.name)
  if(result === undefined){
    setButton(false)
  }
  if(result){
    setButton(true)
  }
}, [load, isSuccess, likeOnSuccess, likeSongIsSuccess, data])

  async function refreshToken() {
  const refresh = JSON.parse(localStorage.getItem('Refresh'));
  const user = await GetNewTokens({refresh})
  dispatch(changeUser({user}))
}

      const handleLike = async () => {
        const answer = JSON.parse(localStorage.getItem("Access"));
        const access = [
          { Authorization: `Bearer ${answer}`, "content-type": "application/json" },
          { id: id },
        ];
        await Likedata(access);
        setButton(true)
      };

      const handleDisLike = async () => {
        const answer = JSON.parse(localStorage.getItem("Access"));
        const access = [
          { Authorization: `Bearer ${answer}`, "content-type": "application/json" },
          { id: id },
        ];
        await disData(access);
        setButton(false)
      };


    const toggleLike = async () => {
        if (button) {
          handleDisLike();
        }
        if (!button) {
          handleLike();
        }
      };
      async function RefreshToken() {
        const refresh = JSON.parse(localStorage.getItem("Refresh"));
        const user = await GetNewTokens({ refresh });
        dispatch(changeUser({ user }));
        if (createNewError) {
            handleLike();
          }
          if (isError) {
            handleDisLike();
          }
      }
    return (
        <S.TrackTimeSvg alt="time" onClick={load ? null : toggleLike}>
        {button ? likeIcon : noLike}
      </S.TrackTimeSvg>
    )
  }











