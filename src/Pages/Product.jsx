import React from "react";
import { useParams } from "react-router-dom";
function Products() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      Show individual
      <h1> {params.product}</h1>
      <p>Yay ! Good product here to checkout git add and git push </p>
    </div>
  );
}

export default Products;
