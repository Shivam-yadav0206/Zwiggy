import { IMAGE_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { removeItem, removeOneQuantity, addItem } from "../utils/cartSlice";
const CartList = ({ item }) => {
  const { id, name, price, image, quantity } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleRemoveOne = (item) => {
    dispatch(removeOneQuantity(item));
  };

  const handleAddOne = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="cart-card">
      <div className="menu-card-image">
        <img
          width={500}
          height={195}
          src={
            image? image : "https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
          }
          alt={name}
        />
      </div>
      <div className="info">
        <div className="title">
          <h3>{name}</h3>
          <p className="price">
            {`Price: Rs ${price ? price : "Not Available"} X ${quantity}`}
          </p>
          <p className="price">{`Quantity: ${quantity}`}</p>
        </div>
        <div className="btn">
          {quantity >= 1 && (
            <div>
              <button onClick={() => handleRemoveOne(item)} id="decrement">
                -
              </button>
              <input style={{width:"50px" }}type="number" id="input" value={quantity} readOnly />
              <button onClick={() => handleAddOne(item)} id="increment">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;

//  : (
//             <button onClick={() => handleRemoveItem(item)} className="btn1">
//               Remove
//             </button>
//           )