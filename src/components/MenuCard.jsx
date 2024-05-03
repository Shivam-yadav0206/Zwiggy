import { IMAGE_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { sr } from "../utils/helper";
import { useEffect } from "react";

const ItemCard = ({ item }) => {
  const { id, name, price, imageId } = item;
  const cart = useSelector((store) => store.cart.items);
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
  const itemInCart = cart.find((cartItem) => cartItem.id === id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;

  useEffect(() => {
    sr.reveal(".menu__items", { origin: "left" });

    //Clean up ScrollReveal instance on component unmount
    return () => {
      sr.destroy();
    };
  }, []);

  //console.log(item)
  return (
    <li className="item_wrap food">
      <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
        <img
          src={
            imageId
              ? IMAGE_CDN_URL + imageId
              : "https://www.food4fuel.com/wp-content/uploads/woocommerce-placeholder-600x600.png"
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
            Price: {price ? price / 100 : "Not Available"}
          </p>
          <button
            data-testid="addBtn"
            onClick={() => handleAddItem(item)}
            className="btn btn-primary">
            Add to Cart {quantityInCart > 0? `(${quantityInCart})`: null}
          </button>
        </div>
      </div>
    </li>
  );
};
export default ItemCard;