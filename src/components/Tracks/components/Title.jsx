import { useSelector } from "react-redux"
import * as S from '../Track.styles'
export function TrackTitle(props) {
  
    const songIsPlaying= useSelector(state => state.player.songIsPlaying)
    const playMusic= useSelector(state => state.player.playMusic)
    const bubbleNot= useSelector(state => state.player.bubbleNot)
    const bubbleActive = useSelector(state => state.player.bubbleActive)
    const bubbleStop = useSelector(state => state.player.bubbleStopActive)
  
    const toggleTitle = !songIsPlaying.id ? bubbleNot : songIsPlaying.id === props.id ? playMusic ? bubbleActive : bubbleStop : bubbleNot
      return (
          <S.TrackTitleImg id={props.id} >
            {toggleTitle}
        </S.TrackTitleImg>
      )
  }