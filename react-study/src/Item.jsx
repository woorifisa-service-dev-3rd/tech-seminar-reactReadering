import React from "react";

const Item = ({ data }) => {
  console.log("item rendered");
  return <li>{data}</li>;
};

export default Item;
