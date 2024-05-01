import { useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Pay from "../assets/pay.png";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handlePayment = () => {
    try {
      fetch("https://zwiggy-backend-tau.vercel.app/stripe-checkout", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          items: cartItems,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Check if the response contains a URL property
          if (data && data.url) {
            // Redirect to the URL returned by the server
            dispatch(clearCart());
            window.location.href = data.url;
          } else {
            console.error("Invalid response from server:", data);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error parsing cartItems:", error);
    }
  };

  console.log(cartItems);
  return (
    <>
      <div>
        {cartItems?.length > 0 ? (
          <>
            <div
              className="container"
              style={{
                marginTop: "5rem",
              }}>
              <div className="flex justify-between">
                <h2
                  class="section__title"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  Cart items
                </h2>
                <div className="flex ">
                  <button
                    onClick={() => handleEmptyCart()}
                    className="btn btn-primary mr-2">
                    Empty Cart
                  </button>
                  <button
                    className="btn btn-primary flex items-center"
                    role="button"
                    onClick={() => handlePayment()}>
                    Pay Now
                    <img src={Pay} alt="Pay Now" className="ml-2" />
                  </button>
                </div>
              </div>

              <div class="separator mx-auto"></div>
              <div className="menu__items">
                <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                  {cartItems?.map((item, index) => (
                    <CartList key={index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
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
    </>
  );
}

export default Cart;
