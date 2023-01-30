import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { IoIosCodeWorking } from "react-icons/io";
function About() {
  return (
    <section id='about'>
      <h5>Conheça Mais</h5>
      <h2>Sobre</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon' />
              <h5>Experiência</h5>
              <small>2+ Anos de Desenvolvimento</small>
            </article>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon' />
              <h5>Experiência</h5>
              <small>2+ Anos de Desenvolvimento</small>
            </article>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon' />
              <h5>Experiência</h5>
              <small>2+ Anos de Desenvolvimento</small>
            </article>
          </div>
          <p>
            Totam rem aperiam. Itaque earum rerum hic tenetur a sapiente
            delectus. Fugiat quo voluptas nulla pariatur? Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Fale Comigo
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
