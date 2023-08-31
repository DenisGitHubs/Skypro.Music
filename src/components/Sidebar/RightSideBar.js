/* eslint-disable jsx-a11y/anchor-is-valid */
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
  export default function RightSidebar({ loading }) {
    const load = loading;
    return (
      <S.SidebarBlock>
        <S.SidebarList>
        {Playlists.map(playlist => (
      <S.SidebarItem key={playlist.id}>
      <S.NewSidebarLink to={`/category/${playlist.id}`}>
        <S.SidebarImg
          src={load ? playlist.srcAlt : playlist.src}
          alt="playlist"
        />
      </S.NewSidebarLink>
    </S.SidebarItem>
        ))}
        </S.SidebarList>
</S.SidebarBlock>
    );
  }

  // function SidebarItemFun(props) {
  //   const load = props.loading;
  //   const src = props.src
  //   const srcAlt = props.srcAlt
  //   return (
  //       <S.SidebarItem>
  //       <S.NewSidebarLink to={`/category/${props.id}`}>
  //         <S.SidebarImg
  //           src={load ? srcAlt : src}
  //           alt="day's playlist"
  //         />
  //       </S.NewSidebarLink>
  //     </S.SidebarItem>
  //   );
  // }

  // export default function RightSidebar({loading}) {
//     return (
//       <S.SidebarBlock>
//         <S.SidebarList>
//         <SidebarItemFun src="img/playlist01.png" srcAlt="img/playlistUnknown.png" loading={loading} id="1"/>
//         <SidebarItemFun src="img/playlist02.png" srcAlt="img/playlistUnknown.png" loading={loading} id="2"/>
//         <SidebarItemFun src="img/playlist03.png" srcAlt="img/playlistUnknown.png" loading={loading} id="3"/>
// </S.SidebarList>
// </S.SidebarBlock>
//     );
//   }

