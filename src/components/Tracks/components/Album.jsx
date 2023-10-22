import { SkeletonBlock } from "skeleton-elements/react";
import * as S from "../Track.styles";

export function TrackAlbum(props) {
  const load = props.loading;
  if (!load) {
    return (
      <S.TrackAlbum>
        <S.AlbumLink>{props.item.album}</S.AlbumLink>
      </S.TrackAlbum>
    );
  }
  return (
    <S.TrackAlbum>
      <SkeletonBlock effect="fade" tag="div"></SkeletonBlock>
    </S.TrackAlbum>
  );
}