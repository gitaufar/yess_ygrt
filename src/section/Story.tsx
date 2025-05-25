export const Story = () => {
  return (
    <section className="w-full flex justify-center px-25 gap-14 flex-row">
      <img src="./png/story_illustration.png" className="w-1/2 h-auto"/>
      <div className="flex flex-col gap-4 text-justify text-[#6C7A89]">
        <h3 className="text-[#2C3E50] text-3xl">Our Story</h3>
        <p>
          Bermula dari semangat untuk menghadirkan produk susu berkualitas, PT.
          Bogor Sari Nutrisi berdiri di Ciawi, Bogor, sebagai usaha mikro yang
          mengkhususkan diri dalam pengolahan susu segar menjadi yoghurt yang
          lezat dan menyehatkan. Kami menghadirkan Yess Yoghurt, minuman
          fermentasi dengan inovasi unik berupa tambahan jelly yang memberikan
          sensasi berbeda dan disukai oleh berbagai kalangan konsumen.
        </p>
        <p>
          Dengan komitmen terhadap kualitas, kami memastikan setiap botol Yess
          Yoghurt diproduksi dengan sistem pencampuran dan homogenisasi yang
          terstandarisasi, serta mengikuti standar higienitas dan keamanan
          pangan. Semua bahan baku telah tersertifikasi halal dan diawasi oleh
          BPOM RI.
        </p>
        <p>
          Kami percaya bahwa yoghurt bukan hanya sekadar minuman, tapi juga
          bagian dari gaya hidup sehat. Maka dari itu, kami terus berinovasi
          demi memberikan cita rasa dan manfaat terbaik untuk masyarakat
          Indonesia.
        </p>
        <div className="flex flex-row gap-20">
          <div className="flex flex-row gap-2 items-center">
            <img src="./svg/natural_icon.svg" />
            Natural Ingredients
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src="./svg/love_icon.svg" />
            Handmade with Love
          </div>
        </div>
      </div>
    </section>
  );
};
