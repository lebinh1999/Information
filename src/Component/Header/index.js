import React from "react";

export default function Header() {
  return (
    <header className="header">
      <p>Bệnh viện chợ rẫy</p>
      <img src={require("./../../Assets/img/ma-qr-code_1.jpg").default} alt="bệnh viện chợ rẫy" />
      <p>079048xxxxxx3433</p>
    </header>
  );
}
