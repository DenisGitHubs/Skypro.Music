import { useDispatch, useSelector } from 'react-redux';
import * as S from '../Track.styles'
import { activeNewPlaylist, setFlagPlayer, setSongIsPlaying, shuffle, togglePlayer } from '../../../store/player.slice';
import {SkeletonBlock} from 'skeleton-elements/react';
export function TrackName(props) {
    const dispatch = useDispatch()
    const Isshuffle = useSelector(state => state.player.isShuffle)
    const data = useSelector(state => state.player.dataDefault)
  const load = props.loading;
  
  const toggleShuff = () => Isshuffle ? dispatch(shuffle({data})) : dispatch(activeNewPlaylist())
  
  
  function HandleChoiceSong(props) {
    const handleSong = props.item
    dispatch(setSongIsPlaying({handleSong}))
    dispatch(setFlagPlayer())
  
  }
  
  if (!load) {
    const dataTogglePlayer = true
    return (<div>
      <S.TrackTitleLink onClick={() =>{HandleChoiceSong(props); dispatch(togglePlayer({dataTogglePlayer})); toggleShuff()}}>{props.item.name}
      <S.TrackTitleSpan> </S.TrackTitleSpan>
      </S.TrackTitleLink>
    </div>
    )
  }
      return (
      <SkeletonBlock effect="fade" tag="div">
      <S.TrackTitleLink href="http://">
      <S.TrackTitleSpan></S.TrackTitleSpan>
      </S.TrackTitleLink>
      </SkeletonBlock>
    )
  }