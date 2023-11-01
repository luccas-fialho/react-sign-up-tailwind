/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import signUpImgMb from "../../assets/illustration-sign-up-mobile.svg";
import signUpImgDesktop from "../../assets/illustration-sign-up-desktop.svg";
import iconList from "../../assets/icon-list.svg";
import InputError from "../InputError/InputError";
import { useState } from "react";

const Form = (props) => {
  let [newEmail, setNewEmail] = useState("");
  let [isValidEmail, setIsValidEmail] = useState(true);

  const isEmail = (email) => {
    let regex =
      /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
    return regex.test(email);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (isEmail(newEmail)) {
      setIsValidEmail(true);
      props.setEmail(newEmail);
      props.setSuccess(!props.success);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="lg:w-3/4 lg:h-4/6 lg:flex lg:bg-white lg:p-5 lg:rounded-3xl xl:w-3/5" >
      <img className="w-full lg:hidden" src={signUpImgMb} alt="" />
      <div className="p-6 lg:w-1/2 lg:px-10 lg:py-4 xl:pr-0 xl:mr-4">
        <h1 className="text-4xl font-bold lg:text-4xl lg:mt-10 xl:text-5xl">Stay updated!</h1>
        <p className="mt-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex content-start mt-4 align-top">
          <img src={iconList} alt="" />
          <p className="ml-5">Product discovery and building what matters</p>
        </div>
        <div className="flex mt-4">
          <img src={iconList} alt="" />
          <p className="ml-5">Measuring to ensure updates are a success</p>
        </div>
        <div className="flex mt-4">
          <img src={iconList} alt="" />
          <p className="ml-5">And much more!</p>
        </div>
        <form action="submit" method="post" className="mt-10 flex flex-col lg:mt-6">
          {isValidEmail ? (
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
                className="border border-solid border-slate-950 p-4 rounded-lg mt-2"
                onChange={(event) => setNewEmail(event.target.value)}
              />
            </div>
          ) : (
            <InputError setNewEmail={setNewEmail}></InputError>
          )}

          <button
            className="mt-6 bg-[#292A43] text-slate-50 p-4 rounded-lg cursor-pointer font-bold"
            onClick={(event) => handleClick(event)}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="ml-auto">
        <img className="hidden lg:block h-full" src={signUpImgDesktop} alt="" />
      </div>
    </div>
  );
};

export default Form;
