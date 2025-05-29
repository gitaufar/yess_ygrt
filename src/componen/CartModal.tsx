import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductData } from "../data/product";
import CartItems from "./CartItems";

type CartModalProp = {
  isOpen: Boolean;
  items: Map<string, ProductData>;
  closeModal: () => void;
  addCart: (item: ProductData) => void;
  removeCart: (item: ProductData) => void;
};
const CartModal = ({ isOpen, closeModal, items, addCart, removeCart }: CartModalProp) => {
  let totalPrice = 0;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed inset-0 z-50 flex justify-center bg-black/50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="py-4 rounded-md bg-white w-full m-4 h-[400px] max-h-screen overflow-y-scroll flex flex-col items-center gap-10 pl-8 pr-2.5"
            initial={{ scaleY: 0,scaleX: 0, opacity: 0 }}
            animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
            exit={{ scaleY: 0, scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-end">
              <X size={44} color="#FF6666" onClick={closeModal} className="hover:scale-110 transition-all cursor-pointer"/>
            </div>
            {Array.from(items.values()).map((item) => {
              totalPrice += item.harga * item.quantity
              return (
              <CartItems key={item.id} item={item} addCart={addCart} removeCart={removeCart} />
              )
            })}
            <div className="w-full flex justify-end text-black font-bold gap-5">
            <p className="text-2xl">Total:</p>
            <p className="text-2xl w-30">Rp.{totalPrice}</p>
            </div>
            <div className="px-12 py-5 bg-white border border-[#FF6666] text-[#FF6666] hover:text-white rounded-lg hover:bg-[#FF6666] cursor-pointer transition-all">
              <p className="text-2xl font-bold">Proceed to payment</p>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default CartModal;