import { useLocation, Link } from "react-router-dom";

type NavbarProps = {
  count: number,
  cartClick: () => void
};
const Navbar = ({ count, cartClick }: NavbarProps) => {
    const location = useLocation();
  return (
    <header className="w-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10),_0px_4px_6px_0px_rgba(0,0,0,0.10)] px-20 py-6 fixed top-0 z-10 bg-white">
      <nav className="flex flex-row justify-between items-center">
        <div className="text-2xl text-[#FF6666] flex flex-row gap-2">
            <img src="./svg/logo_nav.png"/>
            Yess Yogurt
        </div>
        <div className="flex flex-row gap-8 text-xl">
          <Link to="/" className={location.pathname === '/' ? 'text-[#FF6666]' : ''}>About</Link>
          <Link to="/product" className={location.pathname === '/product' ? 'text-[#FF6666]' : ''}>Products</Link>
        </div>
        <div className="cursor-pointer mr-20 w-fit relative pt-5 pr-5 flex items-center mb-3 hover:scale-110 transition-all" onClick={cartClick}>
        <img src="./svg/Frame.svg" />
        {count < 1 ? <></> : <div className="flex justify-center items-center px-4 py-1 rounded-2xl bg-[#FF6666] text-white absolute top-0 right-0">{count}</div>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
