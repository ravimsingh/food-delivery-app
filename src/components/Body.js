import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //console.log("rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const resList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturantList(resList);
    setFilteredResturant(resList);
  };

  if (filteredResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            let ans = resturantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            ans.length === 0
              ? alert("not found any resturant with search text")
              : setFilteredResturant(ans);
          }}
        >
          search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filtered = resturantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturant(filtered);
          }}
        >
          Click to filter resturant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant, index) => {
          return <ResturantCard key={resturant.info.id} resList={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
