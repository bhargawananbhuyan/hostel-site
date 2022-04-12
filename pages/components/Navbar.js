import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import styles from '../components/Navbar.module.css'
const Navbar = () => {
  return (
   <><div className={styles.head}>
   	<header className="flex items-center justify-between text-white py-14">
					<div className="flex items-center gap-x-2.5">
						<Image src={"/logo.png"} width={60} height={60} />
						<Link href="/">
							<a className="max-w-[275px] w-full text-xl font-semibold leading-normal font-playfair">
								the hostel four of assam engineering college
							</a>
						</Link>
					</div>

					<nav className="flex gap-x-0 font-playfair lg:gap-x-12">
						<Link href="/">
							<a>home</a>
						</Link>
						<Link href="/">
							<a>events</a>
						</Link>
						<Link href="/">
							<a>about</a>
						</Link>
						<Link href="/Contact">
							<a>contact</a>
						</Link>
						<Link href="/">
							<a>alumni</a>
						</Link>
					</nav>
				</header>
   
				</div>
   
   </>
  )
}

export default Navbar