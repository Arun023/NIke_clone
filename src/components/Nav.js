import { headerLogo } from "./../assets/images";
import { hamburger } from "./../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((links) => (
            <li key={links?.id}>
              <a
                href={links?.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {links?.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden relative max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
          {/* <ul className="flex-1 absolute top-[50%] -left-full flex flex-col justify-center items-start gap-16 ">
            {navLinks.map((links) => (
              <li key={links?.id}>
                <a
                  href={links?.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray">
                  {links?.label}
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
