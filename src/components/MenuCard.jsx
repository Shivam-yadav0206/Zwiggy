import { IMAGE_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ item }) => {
  const { name, price, imageId } = item;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img
          width={500}
          height={195}
          src={IMAGE_CDN_URL + imageId}
          alt={name}
        />
      </div>
      <div className="info">
        <div className="title">
          <h3>{name}</h3>
          <p className="price">
            Price: {price ? price / 100 : "Not Available"}
          </p>
        </div>
        <div className="btn">
          <button
            data-testid="addBtn"
            onClick={() => handleAddItem(item)}
            className="btn1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
