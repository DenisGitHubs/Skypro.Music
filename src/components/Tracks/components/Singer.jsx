import { SkeletonBlock } from "skeleton-elements/react";
import * as S from "../Track.styles";
export function TrackSinger(props) {
    const load = props.loading;
  
    if (!load) {
      return (
        <S.TrackAuthor>
          <S.TrackAuthorLink>{props.item.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
      );
    }
    return (
      <S.TrackAuthor>
        <SkeletonBlock effect="fade" tag="div"></SkeletonBlock>
      </S.TrackAuthor>
    );
  }