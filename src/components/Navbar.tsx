import type { FC } from "react";
import { useNavigate } from "react-router";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Projecten", href: "/projects" },
  ];

  return (
    <nav className="flex h-16 items-center border-gray-200 border-b-2 px-5 lg:px-8">
      <div className="flex justify-self-start">
        <img
          className="h-8 w-auto rounded-full sm:block"
          src="/images/pfp.jpeg"
        />
        <p className="ml-4 hidden text-xl font-medium text-gray-700 sm:block">
          +*~Jennabe~*+
        </p>
      </div>
      <div className="flex grow justify-end">
        {navigation.map((item) => (
          <button
            key={item.name}
            className="mx-2 cursor-pointer rounded-md bg-white px-4 py-2 font-medium text-slate-400 hover:text-slate-600"
            onClick={() => navigate(item.href)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;