import Sidebar from "../components/sidebar";
import UserCard from "../components/userCard";
import Posts from "../components/posts";
import AddPostModal from "../components/addPostModal";
import PostDetailModal from "../components/postDetailModal";
import EditPostModal from "../components/editPostModal";
import EditCommentModal from "../components/editCommentModal";
import DeleteModal from "../components/deleteModal";

function Home() {
  return (
    <>
      <div className="container home d-flex justify-content-between">
        <Sidebar />
        <Posts />
        <UserCard />

        <AddPostModal />
        <PostDetailModal />
        <EditPostModal />
        <EditCommentModal />
        <DeleteModal />
      </div>
    </>
  );
}

export default Home;
