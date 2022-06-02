import React, { useState, useEffect } from "react";
import SearchBar from "./components/search-bar/search-bar.component";

import { clientData } from "./data/axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchClientData = async () => {
      let response = await clientData.get("/api/search", {
        params: {
          Keyword: "html",
        },
      });
      setPosts(response.data);
    };
    fetchClientData();
  }, []);

  console.log(posts);

  // const renderPosts = posts.map((post) => {
  //   return (
  //     <div className="post-card" key={post.id}>
  //       <h2 className="post-title">{post.title}</h2>
  //       <p className="post-body">{post.body}</p>
  //       <div className="button">
  //         <div className="delete-btn">Delete</div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className="App">
      <SearchBar />
      <h2>Rendered Posts</h2>
      {/* {renderPosts} */}
    </div>
  );
};

export default App;
