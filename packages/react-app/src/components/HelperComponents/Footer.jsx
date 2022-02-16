import { Button, Col, Image, Row, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/talent-logo.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";

function Footer() {
  const [show, setShow] = useState(false);

  return (
    <footer className="mt-16 mx-4 sm:mx-8 md:mx-10 xl:mx-20 overflow-hidden">
      <div className="rounded-2xl bg-none lg:bg-white px-0 lg:px-32 py-10 flex flex-col space-y-10">
        <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
          <img src={logo} width={270} height={65}></img>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="relative">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer" onClick={() => setShow(!show)}>
                English
                <div>
                  {
                    show ? (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                      </svg>
                    ) : (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                      </svg>
                    )
                  }
                </div>
              </button>
              {
                show && (
                  <div className="absolute w-64 mt-2 px-4 bg-white shadow rounded" id="dropdown">
                    <div className="flex items-center justify-between m-4">
                      <p id="insta3" tabindex="0" className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">English</p>
                    </div>
                    <div className="flex items-center justify-between m-4">
                      <p id="insta3" tabindex="0" className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">French</p>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="flex flex-row items-center">
              <img className="mx-2" src={twitter} alt="twitter logo" width={40} height={40} layout="fixed" />
              <img src={discord} alt="discord logo" width={40} height={40} layout="fixed" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-left">
          <div className="hidden lg:flex flex-row space-x-16">
            <div className="flex flex-col space-y-4">
              <div className="text-2xl font-bold border-b pb-4">TALENTDAO</div>
              <div className="text-lg font-semibold">ABOUT</div>
              <div className="text-lg font-semibold">CONTACT US</div>
              <div className="text-lg font-semibold">SUBSCRIBE</div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-2xl font-bold border-b pb-4">COMMUNITY</div>
              <div className="text-lg font-semibold">TOKEN</div>
              <div className="text-lg font-semibold">GOVERNANCE</div>
              <div className="text-lg font-semibold">SUGGEST FEATURE</div>
            </div>
          </div>
          <div className="rounded-2xl bg-gray px-8 flex flex-col space-y-4 justify-center">
            <div className="text-xl font-bold">LET'S GET STARTED</div>
            <div className="text-lg">Explore the journal of decentralized work</div>
            <div className="flex flex-row items-center space-x-4">
              <div className="rounded-full bg-primary text-white text-xl px-4 py-2">CONTACT US</div>
              <div className="rounded-full bg-primary text-white text-xl px-4 py-2">JOIN US</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-8 lg:px-32 py-10">
        <div className="text-lg text-primary">© TALENTDAO ALL RIGHTS RESERVED</div>
        <div className="flex flex-row items-center space-x-4">
          <div className="text-lg text-primary">TERMS</div>
          <div className="text-lg text-primary">PRIVACY POLICY</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
