import "../styles/post.css";
import { AiOutlineHeart } from "react-icons/ai";
const Card = ({item}) => {
  return (
    <div className="card">
      <div className="favorite">
        <AiOutlineHeart />
      </div>
      <div className="image">
        <img src={`./${item.image}`} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {item.price}</p>
        <span className="kilometer">{item.category}</span>
        <p className="name">{item.name}</p>
      </div>
      <div className="date">
        <span>FEB</span>
        <span>10/5/2021</span>
      </div>
    </div>
  );
};

export default Card
