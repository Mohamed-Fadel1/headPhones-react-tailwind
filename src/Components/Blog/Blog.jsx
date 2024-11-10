import React, { useState } from "react";
import { BlogsData } from "./BlogData";
import { UpdateFollower } from "react-mouse-follower";

const Blog = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleShow = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <>
      <div className="container py-20 bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-8">Blogs</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
          {BlogsData.map((ele) => {
            const isExpanded = expandedIds.includes(ele.id);
            return (
              <UpdateFollower
              key={ele.id}
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 2,
                  followSpeed: 1,
                  scale: 5,
                  text: "read",
                  textFontSize: "3px",
                }}
              >
                <div
                  className="bg-white p-5 hover:-translate-y-3 duration-300 shadow-xl mx-4 md:mx-0"
                  key={ele.id}
                >
                  <img src={ele.img} alt="imgBlogs" />
                  <h4 className="text-xl font-bold pt-4 pb-2">{ele.title}</h4>
                  <p className="text-sm">
                    {isExpanded ? ele.sub : `${ele.sub.slice(0, 50)}...`}
                    <span
                      onClick={() => handleShow(ele.id)}
                      className="text-primary font-bold cursor-pointer"
                    >
                      {isExpanded ? "show less" : "show more"}
                    </span>
                  </p>
                </div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
