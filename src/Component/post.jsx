import "../styles/post.css";
import { useEffect, useState } from "react";
import Card from "./card";

const Post = () => {
  const [items, setItem] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/api/users/product");
      const json = await response.json();

      if (response.ok) {
        setItem(json.item);
        setCount((prev) => prev + 1);
      }
    }

    fetchProduct();
  }, [count]);
  return (
    <div
      className="postParentDiv"
      style={{ width: "1200px", margin: "0 auto" }}
    >
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {items
            ? items.map((item) => {
                return (
                  <Card item={item} key={item._id}/>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Post;
