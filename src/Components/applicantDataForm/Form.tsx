import { useState } from "react";
import { FaChevronDown, FaInfo } from "react-icons/fa";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import img from "../../assets/undraw_online_learning_re_qw08.svg";
import "./PhoneInput.css";
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "Brazil",
  "Japan",
  "China",
];
const Form = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setvaild] = useState(true);
  const handechange = (value: string) => {
    setPhoneNumber(value);
    if (value && PhoneNumber) {
      console.log("+" + value);
      setvaild(isPossiblePhoneNumber("+" + value));
      setvaild(isValidPhoneNumber("+" + value));
    }
  };

  return (
    <form>
      <div className="container">
        <div className="xl:px-44 my-10">
          <div className="space-y-8">
            <div className="group relative  bg-[#ddeef9]  z-0">
              <input
                type="text"
                id="name"
                required
                className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
              />
              <label
                htmlFor=""
                className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                onClick={() => {}}
              >
                First and Last Name
              </label>
            </div>
            <div className="group relative bg-[#ddeef9] z-0">
              <input
                type="email"
                required
                className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
              />
              <label
                htmlFor=""
                className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                onClick={() => {}}
              >
                Email Address
              </label>
            </div>
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="flex-[2]">
                <div className="group relative bg-[#ddeef9] z-0 flex-[2]">
                  <input
                    type="number"
                    id=""
                    // {...register("phone")}
                    className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                    required
                    onChange={(value) => handechange(value.target.value)}
                  />
                  <label
                    htmlFor=""
                    className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                    onClick={() => {}}
                  >
                    phone
                  </label>
                </div>
                {!valid && <p className="text-red-500">Wrong phone number</p>}
              </div>
              <div className="flex-1">
                <div className="group relative bg-[#ddeef9] z-0 flex-1">
                  <input
                    // {...register("eduction")}
                    type="text"
                    name="eduction"
                    id="eduction"
                    className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                    required
                  />
                  <label
                    htmlFor=""
                    className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                    onClick={() => {}}
                  >
                    Eduction
                  </label>
                </div>
              </div>
            </div>
            <div className="group relative bg-[#ddeef9] z-0">
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent border  w-full h-20 px-16 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                required
              />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 border border-[#8dcef9] text-[#8dcef9] hover:text-white hover:bg-primary hover:border-none text-xs flex justify-center items-center rounded-full">
                <FaInfo />
              </div>
              <label
                htmlFor=""
                className="absolute group-focus:bg-red-400   transition-[top,left] duration-100 left-14 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] peer-[:valid]:left-6 peer-[:focus]:left-6 "
                onClick={() => {}}
              >
                Company Name
              </label>
            </div>
            <div className="group relative bg-[#ddeef9] z-0">
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                required
              />
              <label
                htmlFor=""
                className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                onClick={() => {}}
              >
                Address Line 1
              </label>
            </div>
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="group relative bg-[#ddeef9] z-0 flex-1">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                  required
                />
                <label
                  htmlFor=""
                  className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                  onClick={() => {}}
                >
                  City
                </label>
              </div>
              <div className="group relative bg-[#ddeef9] z-0 flex-1">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border  w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                  required
                />
                <label
                  htmlFor=""
                  className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                  onClick={() => {}}
                >
                  State/Province/Region
                </label>
              </div>
              <div className="group relative  bg-[#ddeef9] z-0 flex-1">
                <input
                  type="number"
                  name=""
                  id=""
                  className="bg-transparent border appearance-none w-full h-20 px-8 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                  required
                />
                <label
                  htmlFor=""
                  className="absolute group-focus:bg-red-400   transition-[top] duration-100 left-6 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] "
                  onClick={() => {}}
                >
                  Zip/Postal Code
                </label>
              </div>
            </div>
            <div className="flex gap-7 flex-col md:flex-row">
              <div className="group relative bg-[#ddeef9] z-0 flex-[2.1]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border  w-full h-20 px-16 peer focus:bg-white valid:bg-white focus:border-primary valid:border-primary"
                  required
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 border border-[#8dcef9] text-[#8dcef9] hover:text-white hover:bg-primary hover:border-none text-xs flex justify-center items-center rounded-full">
                  <FaInfo />
                </div>
                <label
                  htmlFor=""
                  className="absolute group-focus:bg-red-400   transition-[top,left] duration-100 left-14 text-primary  -translate-y-1/2 top-1/2 peer-[:valid]:top-0 peer-[:valid]:z-10 peer-[:focus]:top-0 peer-[:focus]:z-10 peer-[:valid]:bg-white  peer-[:focus]:bg-white text-xl px-2 z-[-1] peer-[:valid]:left-6 peer-[:focus]:left-6 "
                  onClick={() => {}}
                >
                  Company No.
                </label>
              </div>
              <div className="group flex-1 relative">
                <select className="bg-[#ddeef9] appearance-none w-full selection:bg-red-700 text-xl h-20 px-8 peer focus:bg-white border focus:border-primary  selection:border-primary">
                  <option selected disabled hidden>
                    Select a country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="text-primary">
              <p>Show country on your profile and badges</p>
              <div className="space-x-4 flex my-2">
                <div className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="show"
                    id="yes"
                    className="w-5 h-5"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    type="radio"
                    checked
                    name="show"
                    id="No"
                    className="w-5 h-5 m-0 p-0"
                  />
                  <label htmlFor="No" className="m-0">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center xl:justify-between xl:items-end">
          <img src={img} alt="" className="hidden xl:block w-[400px] " />
          <input
            type="submit"
            className="bg-primary text-white px-8 py-1 active:text-white hover:text-white mb-8 cursor-pointer"
            value="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
