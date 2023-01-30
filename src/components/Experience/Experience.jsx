import React from "react";
import {AiFillCheckCircle} from "react-icons/ai";
import "./Experience.css";
function Experience() {
  return (
    <section id='experience'>
    <h5>Minhas Competências</h5>
    <h2>Expêriencias</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">2.5+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">2.5+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">2+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>Javascript</h4>
              <small className="text-light">2.5+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>React</h4>
              <small className="text-light">1+ Ano</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>Vue</h4>
              <small className="text-light">1+ Ano</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend</h3>
        <div className="experience__content">
        <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>PHP</h4>
              <small className="text-light">2.5+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">2.5+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>MySQL</h4>
              <small className="text-light">2+ Anos</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>Node JS</h4>
              <small className="text-light">1+ Ano</small>
            </div>
          </article>
          <article className="experience__details">
            <AiFillCheckCircle className="experience__details__icon"/>
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">1+ Ano</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Experience;
