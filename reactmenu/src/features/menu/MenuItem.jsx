import { formatCurrency } from "../../utils/helpers.js";
import { useSelector, useDispatch } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice.js";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";

export const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, name, unitprice, ingredients, soldout, imageurl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const addToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitprice,
      totalPrice: unitprice * 1,
    };
    dispatch(addItem(newItem));
  };
  
  return (
    <div className="rounded-lg bg-white p-2 text-center shadow transition-all hover:shadow-lg">
      <img
        src={imageurl}
        alt={name}
        className="mx-auto mb-2 w-24 rounded-full"
      />
      <div className="mb-2">
        <h3 className="font-medium">{name}</h3>

        {soldout ? (
          <p className="text-gray-400">Sold Out!</p>
        ) : (
          <p className="text-orange-600">{formatCurrency(unitprice)}</p>
        )}

        <p className="line-clamp-1 text-sm opacity-50">
          {ingredients?.join(", ")}
        </p>
      </div>

      {isInCart && (
        <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />
      )}

      {!soldout && !isInCart && (
        <button
          className="mt-2 w-full rounded bg-gray-50 py-1 text-gray-600 transition-all hover:bg-gray-100"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
