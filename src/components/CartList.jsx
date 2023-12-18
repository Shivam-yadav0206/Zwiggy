import { IMAGE_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const CartList = ({ item }) => {
    const {name, price, imageId}= item;
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
      dispatch(removeItem(item));
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
            <button onClick={() => handleRemoveItem(item)} className="btn1">
              Remove
            </button>
          </div>
        </div>
      </div>
    );
}

export default CartList;