import Sidebar from "../components/sidebar";
import UserCard from "../components/userCard";
import Posts from "../components/posts";

function Home() {
  return (
    <>
      <div className="container home d-flex justify-content-between">
        <Sidebar />
        <Posts />
        <UserCard />
      </div>
    </>
  );
}

export default Home;
