import Image from "next/image";
import Link from "next/link";

function index() {
	return (
		<div className="w-screen h-screen">
			<div className="w-screen h-screen absolute top-0 left-0 z-[-1] after:content-[''] after:absolute after:w-screen after:h-screen after:top-0 after:left-0 after:bg-black after:opacity-[.65]">
				<Image src={"/hostel-hero.jpg"} layout="fill" className="object-cover" />
			</div>

			<div className="max-w-screen-xl mx-auto px-5">
				<header className="flex items-center justify-between text-white py-14">
					<div className="flex items-center gap-x-2.5">
						<Image src={"/logo.png"} width={60} height={60} />
						<Link href="/">
							<a className="max-w-[275px] w-full text-xl font-semibold leading-normal font-playfair">
								the hostel four of assam engineering college
							</a>
						</Link>
					</div>

					<nav className="flex gap-x-12 font-playfair">
						<Link href="/">
							<a>home</a>
						</Link>
						<Link href="/">
							<a>events</a>
						</Link>
						<Link href="/">
							<a>about</a>
						</Link>
						<Link href="/">
							<a>contact</a>
						</Link>
						<Link href="/">
							<a>alumni</a>
						</Link>
					</nav>
				</header>
				<div className="grid place-items-center mt-[100px] mb-[200px] font-bold font-playfair text-white">
					<div className="text-3xl leading-relaxed max-w-3xl text-center">
						Waves of hope tumbling against the young heart&apos;s shore; No feeble call
						it is, but destiny&apos;s roar; The journey from &apos;Boy&apos; to
						&apos;Man&apos;, the SYMPHONY of spring; Needs nothing, but four years in
						&apos;Four&apos;
					</div>
				</div>

				<div className="grid grid-cols-2 gap-10">
					<div className="bg-gray-100 p-10 text-lg">
						<h1 className="text-2xl font-playfair font-bold mb-8">Events</h1>
						<div className="flex flex-col gap-y-2">
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
						</div>
					</div>

					<div className="bg-gray-100 p-10 text-lg">
						<h1 className="text-2xl font-playfair font-bold mb-8">Notifications</h1>
						<div className="flex flex-col gap-y-2">
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
							<div>
								Any dummy placeholder to be considered an event for the time being
								unless events are finalized.
							</div>
						</div>
					</div>
				</div>

				<div className="mt-[200px] text-center">
					<h1 className="text-4xl font-playfair font-bold">Life at Hostel 4</h1>
					<p className="text-lg mt-10 leading-loose">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
						sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
						dolor purus non enim praesent elementum facilisis leo, vel fringilla est
						ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
						scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu
						volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
						lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis
						nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et
						odio pellentesque diam volutpat commodo sed egestas egestas fringilla
						phasellus faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit
						ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
						porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
						fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim
						lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci
						sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor
						condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices
						in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis
						donec et odio pellentesque diam volutpat commodo sed egestas egestas
						fringilla phasellus faucibus.
					</p>
				</div>

				<div
					className="grid gap-10 mt-[125px]"
					style={{
						gridTemplateRows: "300px 100px 200px",
						gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
					}}
				>
					<div
						className="bg-gray-200"
						style={{ gridRow: "1 / span 2", gridColumn: "1/ span 2" }}
					>
						<img src={"/lg-1.jpg"} className="h-full w-full object-cover" alt="" />
					</div>
					<div className="bg-gray-200" style={{ gridRow: "1", gridColumn: "3" }}>
						<img src={"/lg-2.jpg"} className="h-full w-full object-cover" alt="" />
					</div>
					<div
						className="bg-gray-200"
						style={{ gridRow: "2 / span 2", gridColumn: "3 / span 2" }}
					>
						<img src={"/lg-3.jpg"} className="h-full w-full object-cover" alt="" />
					</div>
				</div>

				<div className="my-[150px] flex items-center justify-center gap-24 px-10">
					<Image
						src={"/super.jpg"}
						width={1250}
						height={1250}
						className="flex-shrink-0"
						alt="aroop bordoloi sir"
						title="Aroop Bordoloi Sir"
					/>

					<section>
						<h1 className="text-4xl font-playfair font-bold">
							From the Superintendent
						</h1>
						<p className="text-lg leading-loose mt-8">
							A long felt need of the hostel has been fulfilled with launching of the
							hostel web page and I am immensely pleased. As the hostel is celebrating
							Diamond Jubilee this year, it has a legacy of many decades with past
							boarders in hundreds so many of which located at different places of the
							world. This web page can be a medium for communication and bring the
							family members of the hostel closure. In today&apos;s world It has
							become essential to have a digital platform. The web page can act like a
							face of the hostel. The hostel boarders not only can express themselves
							but can share their talents and activities on regular basis. I hope the
							boarders will feel encouraged to express their creativity in the web
							page. Long live Hostel 4, long live AEC.
						</p>
					</section>
				</div>

				<div className="mb-[200px]">
					<h1 className="text-4xl font-playfair font-bold">Gallery</h1>
					<div className="flex gap-8 overflow-scroll mt-14 hide-scrollbar">
						{Array.from(Array(4).keys()).map((i) => (
							<div key={i} className="w-[300px] h-[300px] bg-gray-200 flex-shrink-0">
								<img
									src={`/gal-${i + 1}.jpg`}
									className="h-full w-full object-cover"
									alt=""
								/>
							</div>
						))}
					</div>
				</div>
			</div>

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
		</div>
	);
}

export default index;
