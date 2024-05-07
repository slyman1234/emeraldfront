import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Lofo from "../img/bitcoin.png";
import ethimg from "../img/eth.png";
import bnbimg from "../img/bnb.png";
import xrpimg from "../img/xrp.png";

function Jumbutron() {
  const [cryptoRates, setCryptoRates] = useState({
    Bitcoin: { usd: null, image: Lofo }, // Add the image file names here
    Ethereum: { usd: null, image: ethimg },
    BnB: { usd: null, image: bnbimg },
    Ripple: { usd: null, image: xrpimg },
  });

  useEffect(() => {
    const fetchCryptoRates = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple&vs_currencies=usd"
        );
        if (response && response.data) {
          const updatedCryptoRates = {};
          Object.keys(response.data).forEach((crypto) => {
            const abbreviations = {
              bitcoin: "Bitcoin",
              ethereum: "Ethereum",
              binancecoin: "BnB",
              ripple: "Ripple",
            };
            const abbreviation = abbreviations[crypto];
            if (abbreviation) {
              updatedCryptoRates[abbreviation] = {
                usd: response.data[crypto].usd,
                image: cryptoRates[abbreviation].image,
              };
            }
          });
          setCryptoRates(updatedCryptoRates);
        } else {
          console.error("Invalid response data:", response);
        }
      } catch (error) {
        console.error("Error fetching cryptocurrency rates:", error);
      }
    };

    // Fetch cryptocurrency rates on component mount
    fetchCryptoRates();

    // Fetch cryptocurrency rates every 60 seconds (optional)
    const intervalId = setInterval(fetchCryptoRates, 60000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="h-[800px] bg-[#00001A] px-20 flex justify-center items-center">
      <div className="mt-[-200px] mr-[150px]">
        <p className="text-[42px]">
          <font className="text-[#D4F5F9] font-istok-web font-[700]">Buy </font>{" "}
          <font className="text-[#fff]  font-istok-web font-[700]">& </font>
          <font className="text-[#F2C493] font-istok-web font-[700]">Invest </font>
        </p>
        <p className="text-[#fff]  font-istok-web   text-[42px] font-[700]">
          Crypto Tokens
        </p>
        <p className="text-[#fff]  font-istok-web   text-[42px] font-[700]">Easily</p>
        <p className="text-[#fff] font-istok-web   text-[12px] font-[500]">
          Emerald Capital is a crypto investment platform that enables both{" "}
          <br /> Crypto newbies and pros to invest and, maintain and grow a
          portfolio
          <br /> of digital assets.
        </p>
        <div className="w-60 grid  font-istok-web h-[50px] mt-[10px] rounded-[15px]  place-items-center bg-[#0096C7] text-[18px] font-[500] font-[istok] text-[#00001A] px-4 py-4">
          <Link to="#" className="font-istok-web">Get Started </Link>
        </div>
      </div>

      <div className="mr-[100px] grid  place-items-center  mt-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-[#0096C7] via-[#E8EEF1] to-[#F2C493] rounded-lg shadow-lg">
        {Object.keys(cryptoRates).map(
          (crypto) =>
            // Check if the rate data is available
            cryptoRates[crypto] &&
            cryptoRates[crypto].usd && (
              <div
                key={crypto}
                className="flex items-center justify-between w-72 px-6"
              >
                <div className="  w-20">
                  {cryptoRates[crypto].image && (
                    <img
                      src={cryptoRates[crypto].image} // Assuming images are stored in a folder named 'images'
                      alt={crypto}
                      className="w-[40px] h-[40x] mr-2"
                    />
                  )}
                </div>
                <div className="  w-20">
                  <p className="text-[14px] text-left font-[istok] font-[900] text-[#000]">
                    {crypto}
                  </p>
                </div>
                <div className="  w-30">
                  <p className="text-[16px] font-[istok] font-[500] text-[#4AE115]">
                    ${cryptoRates[crypto].usd}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Jumbutron;
