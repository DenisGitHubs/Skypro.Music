import '../../App.css';
import * as S from './Player.styles'
export default function Player ({ loading, text, songerName, trackName }) {
  return (
    <S.Bar>
    <S.BarContent>
      <S.BarPlayerProgress />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev>
              <S.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev" />
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
              <S.PlayerBtnPlaySvg alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play" />
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
              <S.PlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next" />
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <div className="player__btn-repeat _btn-icon">
              <S.PlayerBtnRepeatSvg alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
              </S.PlayerBtnRepeatSvg>
            </div>
            <div className="player__btn-shuffle _btn-icon">
              <S.PlayerBtnShuffleSvg alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
              </S.PlayerBtnShuffleSvg>
            </div>
          </S.PlayerControls>
          <S.PlayerTrackPlay>
            <S.TrackPlayContain>
              <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackPlaySvg>
              </S.TrackPlayImage>
              <S.TrackPlayAuthor>
                <a className={!loading ? "track-play__author-link" : "track-play__author-link skeleton-block skeleton-effect-fade"} href="http://">
                  {loading ? text : `${trackName}`}
                </a>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum>
                <a className={!loading ? "track-play__album-link" : "track-play__album-link skeleton-block skeleton-effect-fade"} href="http://">
                {loading ? text : `${songerName}`}
                </a>
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>
            <S.TrackPlayLikeDis>
              <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg" alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
              </div>
              <div className="track-play__dislike _btn-icon">
                <svg className="track-play__dislike-svg" alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </svg>
              </div>
            </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.VolumeContent>
            <S.VolumeImage>
              <S.VolumeSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
              <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
              />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.Bar>
  )
}