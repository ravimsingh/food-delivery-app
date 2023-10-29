import { RES_IMG_URL } from "../utils/constants";

const ResturantCard = ({ resList }) => {
  //const { name, cloudinaryImageId, areaName, avgRating } = resList;

  return (
    <div className="res-card">
      <div className="res-image">
        <img
          className="res-image"
          src={RES_IMG_URL + resList?.info?.cloudinaryImageId}
        />
      </div>
      <div className="res-details">
        <h2>{resList?.info?.name}</h2>
        <h3>{resList?.info?.areaName}</h3>
        <p>{resList?.info?.avgRating}</p>
      </div>
    </div>
  );
};

export default ResturantCard;
