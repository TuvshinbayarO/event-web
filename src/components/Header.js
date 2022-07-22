import React, { useState } from "react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-between p-6">
      <p>Logo Here</p>
      <button className="flex justify-center items-center" onClick={handleShow}>
        {show ? <FaWindowClose size={24} /> : <FaHamburger size={24} />}
      </button>

      {show ? <div>Hello</div> : null}
    </div>
  );
}
