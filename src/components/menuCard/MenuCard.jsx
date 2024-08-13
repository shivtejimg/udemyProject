// import React from 'react'

import Footer from "../footer/Footer"

const MenuCard = () => {

	const foodCard = [
		{
			img:"https://swigo.dexignzone.com/tailwind/xhtml/assets/images/blog/grid2/pic1.jpg",
			label:"12 Feb 2024",
			heading:"Chill Out with These Refreshing",
			cock:"RK Gupta",
			comment:"10",
			readMore:"Read More",
		},
		{
			img:"https://swigo.dexignzone.com/tailwind/xhtml/assets/images/blog/grid2/pic1.jpg",
			label:"15 Feb 2024",
			heading:"Chill Out with These Refreshing",
			cock:"Shiv Gupta",
			comment:"15",
			readMore:"Learn More",
		},
	]
  return (
    <>
      <div>
        <h1 className='text-black text-4xl text-center my-4'>--------Food Menu----------</h1>
        <section className="content-inner  pb-10 overflow-hidden relative">
			<div className="container">
				<div className="row">
					<div className="xl:w-7/12 px-[15px] w-full">
				{foodCard && foodCard?.map((item,index) => (
					<div className="dz-card style-2 blog-half rounded-lg overflow-hidden duration-500 bg-[#2222220d] md:flex relative mb-[30px]" key={item} >
						<div className="dz-media overflow-hidden relative md:w-[270px] md:min-w-[270px] w-full md:h-auto h-[250px]">
							<a href="blog-standard.html" className="block h-full"><img src={item.img} alt="/" className="min-w-auto w-full" /></a>
							<div className="absolute top-4 left-4 z-10 bg-yellow-600 text-white rounded-md text-sm font-medium py-1.5 px-4 uppercase block transition-all duration-800">{item.label}</div>
						</div>
						<div className="dz-info flex flex-col relative p-[25px] ">
							<h4 className="text-3xl font-bold mb-[10px]"><a href="blog-standard.html">{item.heading} </a></h4>
							<div className="dz-meta mb-[15px]">
								<ul>
									<li className="dz-user">
										<a href="javascript:void(0);" className="text-black2"><i className="fa-solid fa-user text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
										By <span className="text-primary">{item.cock}</span></a>
									</li>
									<li className="dz-comment">
										<a href="javascript:void(0);" className="text-black2"><i className="fa-solid fa-message text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
										{item.comment} Comments</a>
									</li>
								</ul>
							</div>
							<div className="btn-wrapper mt-auto">
								<a href="blog-standard.html" className="btn btn-primary btn-hover-2">{ item.readMore}</a>
							</div>
						</div>
					</div>

				))}
					
				
					</div>
			
				</div>
			</div>
		</section>
      </div>
	  <Footer/>
    </>
  )
}

export default MenuCard
