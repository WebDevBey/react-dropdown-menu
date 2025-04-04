import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const menuItems = ["Home", "Settings", "Logout"];
  return (
    <div ref={dropdownRef} className="max-w-[400px] mx-auto py-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 duration-200 cursor-pointer w-full flex items-center justify-center"
      >
        <span className="uppercase font-bold">Dropdown Menu</span>
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </button>
      {isOpen && (
        <div className="mt-2 bg-white rounded-md">
          {menuItems.map((item) => (
            <a
              className="text-gray-700 block px-4 py-2 hover:bg-gray-100 duration-200 rounded-md w-full text-left"
              key={item}
              href={item}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
