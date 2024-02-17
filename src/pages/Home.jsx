import Sidebar from "../components/sidebar";
import UserCard from "../components/userCard";
import Posts from "../components/posts";
import AddPostModal from "../components/addPostModal";
import PostDetailModal from "../components/postDetailModal";

function Home() {
  return (
    <>
      <div className="container home d-flex justify-content-between">
        <Sidebar />
        <Posts />
        <UserCard />

        <AddPostModal />
        <PostDetailModal />
      </div>
    </>
  );
}

export default Home;
