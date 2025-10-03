import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
        <header className="navbar">
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg ">
        <div className="flex items-center gap-6 mx-10">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <p className="text-[#C40233] text-[20px] font-bold">Ahlam's Portfolio</p>
        </div>

        <div className="navlinks flex gap-15 text-[14px] mx-10">
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive
          ? "text-[#C40233] underline"
          : "text-white hover:text-gray-700"
           } >
          Home</NavLink>
 
          <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive
            ? "text-[#C40233] underline"
            : "text-white hover:text-gray-700"
            }>
            About me </NavLink>

          <NavLink 
          to="/contact"
          className={({ isActive }) =>
          isActive
          ? "text-[#C40233] underline"
          : "text-white hover:text-gray-700"
          }>
          Contact </NavLink>

          <NavLink 
          to="/services"
          className={({ isActive }) =>
          isActive
          ? "text-[#C40233] underline"
          : "text-white hover:text-gray-700"
          }>
          Services</NavLink>
      </div>
      </nav>
    </header>
  );
}

export default NavBar