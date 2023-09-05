import { useParams } from "react-router-dom";
import { Playlists } from "../components/Sidebar/RightSideBar";

export const Category = () => {
  const params = useParams();
  const list = Playlists.find((list) => list.id === Number(params.id));
    return (
      <div>
        <h1>Category page {list.id}</h1>
      </div>
    );
  }