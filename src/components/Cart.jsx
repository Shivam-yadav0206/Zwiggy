import { useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        {cartItems?.length > 0 ? (
          <>
            <h1 className="cart">Cart Items</h1>
            <button onClick={() => handleEmptyCart()} className="btn">
              Empty Cart
            </button>
          </>
        ) : (
          <div
            style={{
              marginTop: "-5rem",
              marginBottom: "-5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh", // Ensure the container takes at least the full height of the viewport
            }}>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
              alt="No Item Found"
            />
            <p class="text-blk heading">No Item Found</p>
          </div>
        )}
      </div>
      <div className="menu-list">
        {cartItems?.map((item) => (
          <CartList key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Cart;
