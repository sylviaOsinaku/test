import React from "react";
import { useParams } from "react-router-dom";
function Products() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      Show individual
      <h1> {params.product}</h1>
    </div>
  );
}

export default Products;
