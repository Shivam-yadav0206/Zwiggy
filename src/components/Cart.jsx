import { useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Pay from '../assets/pay.png'


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
            <h1 className="cont">Cart Items</h1>
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
        {cartItems?.map((item,index) => (
          <CartList key={index} item={item} />
        ))}
      </div>
      { cartItems?.length > 0 &&

      
        <div className="cont">

          <button onClick={() => handleEmptyCart()} className="button-9">
            Empty Cart
          </button>
          <button className="button-9" role="button" onClick={()=> handlePayment()}>
            Pay Now
            <img src={Pay} alt="Pay Now" />
          </button>
        </div>
      }
    </>
  );
}

export default Cart;
