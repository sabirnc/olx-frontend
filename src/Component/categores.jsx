import "../styles/catogaries.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
const Catogaries = () => {
  const [category, setCategory] = useState(false);
  const [motions, setMotion] = useState(0);

  function handleCategory() {
    setMotion((motion) => motion + 180);
    setCategory((prev) => !prev);
  }

  return (
    <div className="cat">
      <div className="catergories">
        <div className="head-sec" onClick={handleCategory}>
          <h2 className="head">All catogaries</h2>
          <motion.div animate={{ rotate: motions }}>
            <MdOutlineKeyboardArrowUp className="icon" />
          </motion.div>
        </div>
        <ul className="catergories-items">
          <li>Car</li>
          <li>Motorcycle</li>
          <li>For sale:Houses & Apartment</li>
          <li>Scooter</li>
          <li>Commercial and other Vehicles</li>
          <li>For Rent:Houses & Apartment</li>
        </ul>
      </div>
      <div className="all-item" style={{ display: category ? "flex" : "none" }}>
        <div className="all-item-con">
          <h2>OLX Autos</h2>
          <ul>
            <li>For sale</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
          </ul>
        </div>
        <div className="all-item-con">
          <h2>Jobs</h2>
          <ul>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
          </ul>
        </div>
        <div className="all-item-con">
          <h2>Electronics & appliances</h2>
          <ul>
            <li>TVs and video</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
            <li>Data Entry</li>
          </ul>
        </div>
      </div>
      <img
        src="https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png"
        alt=""
        className="adv"
      />
    </div>
  );
};

export default Catogaries;
