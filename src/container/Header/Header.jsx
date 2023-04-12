import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => {
  const title = "Chase the new flavor";

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={title} />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quaerat
          molestiae impedit dolorem, maiores suscipit magnam reprehenderit, quam
          sapiente sequi assumenda quae! Error provident rerum quae, numquam
          voluptas doloremque fugiat?
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
