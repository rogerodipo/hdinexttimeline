import React, { useState } from "react";
import Link from "next/link";

interface NavProps {
  activeItem: string;
  onSelectItem: (item: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeItem, onSelectItem }) => {
  const [selectedItem, setSelectedItem] = useState(activeItem);
  const navItems = [
    { name: "Full Timeline", color: "border-hdi-purple" },
    { name: "Game-Based Learning", color: "border-hdi-orange" },
    { name: "Demand Generation", color: "border-hdi-yellow" },
    { name: "Social Franchising of Health Services", color: "border-hdi-green" },
  ];

  const handleSelectItem = (item: string) => {
    // onSelectItem(item);
    // setSelectedItem(item);
  };

  return (
    <nav className="bg-slate-50 rounded-3xl text-center p-4 font-inter py-12">
      <ul className="list-none p-0 m-0">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`inline mx-3 p-3 ${item.color} ${selectedItem === item.name ? 'border-b-4' : 'border-b-2 hover:border-b-6'} transition-all duration-300 ease-in-out`}
          >
            <span
              className={`no-underline ${selectedItem === item.name ? 'text-lg' : 'text-base hover:text-lg'} transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => handleSelectItem(item.name)}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
