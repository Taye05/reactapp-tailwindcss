import React from "react";
import ImageOne from "../images/el.jpg";
import ImageTwo from "../images/ell.jpg";
import ImageThree from "../images/elll.jpg";

function Content() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">X-OUD</h2>
          <p className="mb-2">
            The fragrance for the man of Luxury... Made from the popular
            Southeastern scented resin, Oud, this perfume, X-Oud (Extra Oud) is
            a sure command for the men of class. It is: Smoky Intense Masculine
            and Irresistible. 50ml
          </p>
          <span>NGN 4,000.00</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Aroma diffuser</h2>
          <p className="mb-2">
            Reusable aroma diffuser that gently pumps out fine mist of your
            fragrance of choice. Comes with a free 6ml perfume oil.
          </p>
          <span>NGN 9,500.00</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageThree} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Perfume oils</h2>
          <p className="mb-2">
            6ml perfume oils Amazing fragrances 100% undiluted
          </p>
          <span>NGN 1,000.00</span>
        </div>
      </div>
    </>
  );
}

export default Content;
