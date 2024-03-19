import { IMAGE_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ item }) => {
  const { id, name, price, imageId } = item;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(
      addItem({
        id: id,
        name: name,
        price: price / 100,
        image: imageId
          ? IMAGE_CDN_URL + imageId
          : "https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg",
        quantity: 1,
      })
    );
  };
  //console.log(item)
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img
          width={500}
          height={195}
          src={
            imageId
              ? IMAGE_CDN_URL + imageId
              : "https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
          }
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
