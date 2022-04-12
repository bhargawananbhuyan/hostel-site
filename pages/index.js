import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function index() {
	return (
		<div className="w-screen h-screen">
			<div className="w-screen h-screen absolute top-0 left-0 z-[-1] after:content-[''] after:absolute after:w-screen after:h-screen after:top-0 after:left-0 after:bg-black after:opacity-[.65]">
				<Image src={"/hostel-hero.jpg"} layout="fill" className="object-cover" />
			</div>

			<div className="max-w-screen-xl mx-auto px-5">
			<Navbar/>
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
						Life in hostel four is amazing. The four years in four really transforms a
						budding and enthusiastic boy into a responsible man ready to take on the
						challenges life poses onto him. Sports activities in the evening such as
						volleyball, cricket etc. act as necessary stress busters after long hours of
						classes and practicals. There are plenty of facilities for the boarders
						which includes table tennis room, common room with a tv for the
						entertainment, volleyball court and much more. The boarders have access to
						engage in sports activities in the nearby pyrokinesis field. In addition to
						that students can also avail the gym facilities in the hostel. Beautiful
						natural landscape surrounding the hostel is a treat to the eyes. It is a
						great place to make friends who become lifelong companions. The hostel life
						also teaches self-discipline and the value of time. It teaches one to be
						self-dependent and work hard to achieve their goals. It also inculcates the
						values of team spirit and cooperation. Endless memories and anecdotes get
						created and time flies. Finally, these memories are what every hosteller
						take away that make them nostalgic and bring a smile in their faces.
						&quot;Ye chaar(4) saal zindegi ke chaar(4) saal nahi the.. ye chaar(4) saal
						ek alag hi zindegi thi&quot;
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

		<Footer/>
		</div>
	);
}

export default index;
