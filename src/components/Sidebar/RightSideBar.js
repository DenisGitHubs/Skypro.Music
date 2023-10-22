/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';
import * as S from './Sidebar.styles';


export const Playlists = [
  {
    id: 1,
    src: "img/playlist01.png",
    srcAlt: "img/playlistUnknown.png"
  },
  {
  id: 2,
  src: "img/playlist02.png",
  srcAlt: "img/playlistUnknown.png"
  },
  {
  id: 3,
  src: "img/playlist03.png",
  srcAlt: "img/playlistUnknown.png"
  }
]
  export default function RightSidebar() {
    const loadingFromApi = useSelector(state => state.player.loadingFromApi)
    return (
      <S.SidebarBlock>
        <S.SidebarList>
        {Playlists.map(playlist => (
      <S.SidebarItem key={playlist.id}>
      <S.NewSidebarLink to={`${playlist.id}`}>
        <S.SidebarImg
          src={loadingFromApi ? playlist.srcAlt : playlist.src}
          alt="playlist"
        />
      </S.NewSidebarLink>
    </S.SidebarItem>
        ))}
        </S.SidebarList>
</S.SidebarBlock>
    );
  }


