import * as S from "./Track.styles";
import { useSelector } from "react-redux";
import { TrackTitle } from "./components/Title";
import { TrackName } from "./components/Name";
import { TrackSinger } from "./components/Singer";
import { TrackAlbum } from "./components/Album";
import { TrackTime } from "./components/Time";

export default function DataSong() {
  const dataDefault = useSelector((state) => state.player.dataDefault);
  return (
    <div>
      {dataDefault.map((item) => (
        <TrackExecutorAlbumTime item={item} key={item.id} />
      ))}
    </div>
  );
}

function TrackExecutorAlbumTime(props) {
  const load = useSelector((state) => state.player.loadingFromApi);
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <TrackTitle id={props.item.id} />
          <TrackName item={props.item} loading={load} />
        </S.TrackTitle>
        <TrackSinger item={props.item} loading={load} />
        <TrackAlbum item={props.item} loading={load} />
        <TrackTime item={props.item} loading={load} />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}




