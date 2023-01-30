import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/perfil1-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Olá meu nome é</h5>
        <h1>Luiz Fernando</h1>
        <h5 className='text-light'>Fullstack Dev</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scrol__down'>
          Rolar para baixo
        </a>
      </div>
    </header>
  );
}

export default Header;
