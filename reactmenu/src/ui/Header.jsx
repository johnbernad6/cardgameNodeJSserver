import { LuPizza } from "react-icons/lu";
import { LuScrollText } from "react-icons/lu"

import { Link } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="mx-auto mb-4 flex max-w-screen-xl items-center justify-between p-4">
      <Link to="/" className="flex w-16 items-center gap-2 sm:w-1/4">
        <LuPizza className="h-8 w-8 text-orange-600" />
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold">QR Waiterless Restaurant</h1>
          <Username />
        </div>
      </Link>
      <div className="w-full text-center sm:w-1/2">
        <SearchOrder />
      </div>
      <div className="flex w-16 items-center justify-end gap-2 sm:w-1/4">
        <CartOverview />
     <Link to="/order/:orderId" className="flex w-16 items-center gap-2 sm:w-1/4">
        <LuScrollText className="h-8 w-8 text-orange-600" />
      </Link>
      </div>
    </header>
  );
};

export default Header;
