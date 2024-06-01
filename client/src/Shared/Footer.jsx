import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-red-200/20 text-xl">
  <aside>
    <img src="https://thumbs.dreamstime.com/b/restaurant-abstract-emblem-image-illustration-design-84981561.jpg" alt="Logo" className='h-20 w-20 cursor-pointer rounded-lg ' />
  </aside> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl text-[#f54748]">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </>
  )
}

export default Footer