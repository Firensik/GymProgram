import React from "react";

const Featurebox = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />{" "}
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          recusandae illo quaerat. Vero quam tenetur omnis aperiam, fugit minima
          quo minus porro, maiores aspernatur voluptas repellat ipsam
          consequatur qui eligendi?
        </p>
      </div>
    </div>
  );
};

export default Featurebox;
