import React, { useEffect, useRef, useState } from 'react';
import { Fade } from "react-awesome-reveal";


export default function Card (props : {img : any; title: string; text: string}) {
  const point: React.RefObject<HTMLDivElement> = React.createRef();
  const nodeRef : React.RefObject<HTMLDivElement> = useRef(null);
  const {img, title, text} = props;
  const [show, setShow] = useState(false);
  useEffect(() => {

    const checkClickOff = ()  => {
      setShow(false);
    }
    const checkClickOn = () => {
      setShow(true);
    }
    const buttonRef = point.current;
    buttonRef?.addEventListener("mouseout", () =>{checkClickOff()})
    buttonRef?.addEventListener("click",() =>{checkClickOn()});
    buttonRef?.addEventListener("mouseover",() =>{checkClickOn()});

    return () => {
      buttonRef?.removeEventListener("click",() =>{checkClickOn()});
      buttonRef?.addEventListener("mouseover", () =>{checkClickOn()});
      buttonRef?.addEventListener("mouseout", () =>{checkClickOff()})
    }
  },[point, show]);
  
    return (
      <Fade cascade duration={3000} delay={200}>
      <article className="card">
        <h2 className="card-title">{title}</h2>
        <img className="card-image" src={img} width="300" height="300" alt="image" />
        <div className="card-body">
          <div className="text">
            <h2>{title}</h2>
            <p>{text}</p></div>
          </div>
      </article>
      </Fade>
    )
}