import { BB_IMAGE_URL } from "../config";

const CategoryCard = ({ name}) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img
          width={500}
          height={195}
          src="https://www.shutterstock.com/image-vector/grocery-food-store-banner-design-260nw-2301115293.jpg"
          alt={name}
        />
      </div>
      <div className="info">
        <div className="title">
          <h3>{name}</h3>
          <p className="price">Price: 400/Kg</p>
        </div>
        <div className="btn">
          <button className="btn1">View More</button>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
