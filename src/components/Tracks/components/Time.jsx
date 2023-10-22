import * as S from "../Track.styles";
import { TrackLikes } from "./Likes";

export function TrackTime(props) {
    const item = props.item
    const load = props.loading;
    const min = parseInt(props.item.duration_in_seconds / 60);
    const sec = time();
    function time() {
      const time = props.item.duration_in_seconds % 60;
      if (time < 9) {
        return `0${time}`;
      } else {
        return time;
      }
    }
  
    return (
      <div className="track__time">
        <TrackLikes item={item}/>
        <S.TrackTimeText>{load ? "0:00" : `${min}:${sec}`}</S.TrackTimeText>
      </div>
    );
  }

