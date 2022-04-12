import React from 'react'

import Link from "next/link";
const Footer = () => {
  return (
    <>
    	<footer className="bg-[#212121] text-white py-20">
				<div className="max-w-screen-xl mx-auto px-14 grid grid-cols-3">
					<div>
						<h2 className="text-2xl font-playfair font-bold">Quick links</h2>
						<div className="flex flex-col gap-y-3.5 text-lg mt-8 text-gray-300">
							<Link href="/">
								<a>About</a>
							</Link>
							<Link href="/">
								<a>Contact</a>
							</Link>
							<Link href="/">
								<a>Events</a>
							</Link>
							<Link href="/">
								<a>Alumni</a>
							</Link>
							<Link href="/">
								<a>Boarders</a>
							</Link>
							<Link href="/">
								<a>Dev team</a>
							</Link>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-playfair font-bold">External links</h2>
						<div className="flex flex-col gap-y-3.5 text-lg mt-8 text-gray-300">
							<Link href="/">
								<a>AEC</a>
							</Link>
							<Link href="/">
								<a>ASTU</a>
							</Link>
							<Link href="/">
								<a>DTE</a>
							</Link>
							<Link href="/">
								<a>MHRD</a>
							</Link>
							<Link href="/">
								<a>Swayam</a>
							</Link>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-playfair font-bold mb-8">Address</h2>
						<p className="text-lg leading-loose text-gray-300">
							Hostel 4,Assam Engineering College, Guwahati-13, Assam
						</p>
						<iframe
							className="mt-8"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.637253509666!2d91.65498061495357!3d26.143367983465048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a45d990ff9cf5%3A0xb62320ed69385b6f!2sAEC%20Hostel%204%20road!5e0!3m2!1sen!2sin!4v1648189549691!5m2!1sen!2sin"
							width="450"
							height="300"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
				<div className="text-center mt-14">
					Made with ❤️ and 🚬 at Hostel 4, Assam Engineering College
				</div>
			</footer>
    
    </>
  )
}

export default Footer