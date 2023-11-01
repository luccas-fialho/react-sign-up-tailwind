/* eslint-disable react/prop-types */

const InputError = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="email" className="text-sm font-bold">
          Email address
        </label>
        <span className="text-sm font-bold text-red-500">
          Valid email required
        </span>
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        className="border border-solid border-red-500 bg-red-100 placeholder-red-500 p-4 rounded-lg mt-2 w-full text-red-500 outline-red-500"
        onChange={(event) => props.setNewEmail(event.target.value)}
      />
    </div>
  );
};

export default InputError;
