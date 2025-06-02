import { useCart } from "../context/CartProvider";
import type { ProductData } from "../data/product";

type CartItemsProps = {
  item: ProductData;
};

const CartItems = ({ item }: CartItemsProps) => {
  const context = useCart();
  if (!context) return null;
  const { productAdd, productMin, handleQuantityChange } = context;
  return (
    <div className="w-full flex flex-row items-center">
      <img src={item.image} className="w-[160px] h-[160px] rounded-lg" />
      <div className="flex px-5 justify-between w-full items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-[#FF6666]">{item.type}</h1>
          <h1 className="text-3xl text-[#FF6666] opacity-70">{item.nama}</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-1.5">
            <div
              onClick={() => productMin(item)}
              className={`${
                item.stock > 9 ? "opacity-50 cursor-default" : "cursor-pointer"
              } w-8 h-8 relative flex items-center rounded-full border-2 border-[#FF6666] p-1 `}
            >
              <div className="w-full h-0.5 bg-[#FF6666]" />
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(e,item)}
              min={0}
              max={10}
              className={`w-20 h-8 relative flex text-center no-spinner rounded-full border-2 border-[#FF6666]`}
            />

            <div
              onClick={() => productAdd(item)}
              className={`w-8 h-8 relative flex items-center justify-center rounded-full border-2 border-[#FF6666] ${
                item.stock < 1 ? "opacity-50 cursor-default" : "cursor-pointer"
              } `}
            >
              <div className="absolute w-5 h-0.5 bg-[#FF6666]" />
              <div className="absolute h-5 w-0.5 bg-[#FF6666]" />
            </div>
          </div>
          <p className="text-black text-xl w-20">
            Rp.{item.harga * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
