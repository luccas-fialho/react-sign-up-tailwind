/* eslint-disable react/prop-types */
import iconSuccess from "../../assets/icon-success.svg";

const Success = (props) => {
  return (
    <div className="p-6 lg:bg-white lg:w-1/2 lg:rounded-3xl lg:px-10 xl:px-14 xl:w-1/4">
      <img src={iconSuccess} alt="" className="mt-24 lg:mt-10"/>
      <h1 className="font-bold text-5xl mt-10 xl:text-4xl">Thanks for subscribing!</h1>
      <p className="mt-10">
        A confirmation email has been sent to <span className="font-bold">{props.email}</span>.
        Please open it and click the button inside to confirm your subscription
      </p>
      <button className="mt-40 align-bottom bg-[#292A43] text-slate-50 p-4 rounded-lg cursor-pointer font-bold w-full lg:mt-14 lg:mb-5 hover:bg-orange hover:shadow-lg hover:shadow-orange" onClick={() => props.setSuccess(!props.success)}>
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
