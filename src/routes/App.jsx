import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import PostlistProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [seletedTab, setSelectedTab] = useState("Home");
  return (
    <PostlistProvider>
      <div className="app-container">
        <SideBar
          selectedTab={seletedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="app-content">
          <Header></Header>
          <div className="posts">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
