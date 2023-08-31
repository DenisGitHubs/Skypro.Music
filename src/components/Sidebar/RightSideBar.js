/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './Sidebar.styles'

export default function RightSidebar({loading}) {
    return (
      <S.SidebarBlock>
        <S.SidebarList>
        <SidebarItemFun src="img/playlist01.png" srcAlt="img/playlistUnknown.png" loading={loading} />
        <SidebarItemFun src="img/playlist02.png" srcAlt="img/playlistUnknown.png" loading={loading} />
        <SidebarItemFun src="img/playlist03.png" srcAlt="img/playlistUnknown.png" loading={loading} />
</S.SidebarList>
</S.SidebarBlock>
    );
  }

  function SidebarItemFun(props) {
    const load = props.loading;
    const src = props.src
    const srcAlt = props.srcAlt
    return (
        <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src={load ? srcAlt : src}
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    );
  }