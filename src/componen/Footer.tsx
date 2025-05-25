import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFDEDE] justify-center items-center flex py-20 flex-col text-[#34495E] gap-12">
      <h1 className="text-[#2C3E50] text-2xl">Contact Us</h1>
      <div className="flex flex-row gap-5">
        <FooterCard image="./svg/call_icon.svg" text="0812-1932-2236" />
        <FooterCard
          image="./svg/mail_icon.svg"
          text="bogorsarinutrisi22@gmail.com"
        />
        <FooterCard
          image="./svg/location_icon.svg"
          text="Kavling Aulia No. 09 Rt001/Rw001 Ciawi-Bogor"
        />
      </div>
      <div className="flex flex-row gap-8">
        <img src="./svg/instagram_icon.svg" className="w-auto h-[30px]" />
        <img src="./svg/facebook_icon.svg" className="w-auto h-[30px]" />
        <img src="./svg/whatsapp_icon.svg" className="w-auto h-[30px]" />
      </div>
    </footer>
  );
};

export default Footer;
