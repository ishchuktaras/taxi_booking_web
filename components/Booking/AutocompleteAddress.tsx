import React from "react";

function AutocompleteAddress() {
  return (
    <div className="mt-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Where From?
        </label>
        <input
          type="text"
          className="bg-white p-1 border-[2px] w-full rounded-md outline-none focus:border-yellow-600"
          name=""
          id=""
        />
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
          Where To?
        </label>
        <input
          type="text"
          className="bg-white p-1 border-[2px] w-full rounded-md outline-none focus:border-yellow-600"
          name=""
          id=""
        />
      </div>
    </div>
    
  );
}

export default AutocompleteAddress;
