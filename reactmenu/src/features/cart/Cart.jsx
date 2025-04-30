import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import store from "../../store";
import { Form } from "react-router-dom"; // Add this import


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.name);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="rounded-md px-3 py-2 font-medium text-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-12 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
  <form method="post" action="https://johnbernad6server-b837q.ondigitalocean.app/order/new" className="inline">
    <input type="hidden" name="cart" value={JSON.stringify(cart)} />

    <button
      type="submit"
      className="rounded bg-orange-600 px-4 py-2 font-medium text-white"
    >
      Place order
    </button>
  </form>

  <button
    className="rounded bg-slate-100 px-4 py-2 font-medium text-slate-600"
    onClick={() => dispatch(clearCart())}
  >
    Clear cart
  </button>
</div>


    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default Cart;
