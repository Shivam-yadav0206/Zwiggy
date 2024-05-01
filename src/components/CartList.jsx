
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
    <li className="item_wrap food">
      <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
        <img
          src={
            image
              ? image
              : "https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
          }
          alt={name}
          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
        />
      </div>

      <div className="pt-5">
        <div className="mb-2">
          <h4 className="card__title">{name}</h4>
          <div className="max-w-xs overflow-hidden">
            {/* <p className="truncate paragraph hover:line-clamp-none">
              {cuisines?.join(", ")}
            </p> */}
          </div>
          {/* <p className="paragraph">{locality}</p> */}
        </div>
        <div className="flex justify-between">
          <p className="text-secondaryColor">
            {`Price: Rs ${price ? price : 100} X ${quantity}`}
          </p>
          {quantity >= 1 && (
            <div className="flex items-center">
              <button
                onClick={() => handleRemoveOne(item)}
                id="decrement"
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300 focus:outline-none">
                -
              </button>
              <input
                style={{ width: "30px", color: "black" }}
                type="number"
                id="input"
                value={quantity}
                readOnly
                className=" w-16 px-2 py-1 text-center border border-gray-300"
              />
              <button
                onClick={() => handleAddOne(item)}
                id="increment"
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 focus:outline-none">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default CartList;
