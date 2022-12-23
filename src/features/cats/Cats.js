import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  const renderCats = catPics.entities.map((cat) => (
    <CatList url={cat.url} key={cat.id} alt="cat-pic" />
  ));
  return (
    <div>
      <h1>CatBook</h1>
      {catPics.status === "loading" ? "Loading" : renderCats}

      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
