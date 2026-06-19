import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Loading from "../Loading/Loading";

const Cards = ({ start, end }) => {
  const [products, setProudcts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((food) => setProudcts(food.recipes.slice(start, end)))
      .then(() => setLoading(false))
      .catch((err) => setLoading(false));
  }, []);
  let show = products.map((product, i) => {
    if (!loading) {
      return (
        <Card
        key={i}
          item={product}
        />
      );
    }
  });
  return loading ? (
    <Loading />
  ) : (
    <div className="w-5/6 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? <Loading /> : show}
    </div>
  );
};

export default Cards;
