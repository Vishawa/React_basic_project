import React from "react";

const curryear = new Date().getFullYear();
function Footer() {
  return (
    <>
      <footer>Copyright @ {curryear}</footer>
    </>
  );
}
export default Footer;
