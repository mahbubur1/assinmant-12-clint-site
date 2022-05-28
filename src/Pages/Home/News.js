import React from 'react';


const News = () => {
    return (

        <section className='mt-36 bg-white'>
            <h3 className='text-2xl text-center font-bold my-4'><span className=' border-b-2 border-primary'>Latest Product</span></h3>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pt-10'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <span className="indicator-item badge badge-primary">new</span>
                    <figure><img className='h-56' src="https://i.ibb.co/gVr9RXZ/post-2.jpg" alt="Movie" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">TIRE INFLATION GUN WITH PRESSURE GAUGE</h2>
                        <p>Easy-to-use combined unit with inflation gun, 15" flexible rubber hose with lever style chuck, rubber protected 2-1/2" diameter pressure gauge (pressure range of 10 - 170 PSI) and a quick connect 1/4" NPT air inlet</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <span className="indicator-item badge badge-primary">new</span>
                    <figure><img className='h-56' src="https://i.ibb.co/hghtsxH/middle-8500-AM-1.jpg" alt="Movie" /></figure>
                    <div className="card-body w-2/4">
                        <h2 className="card-title">550 CFM HIGH VELOCITY AIR MOVERt</h2>
                        <p>Powerful 550 CFM Air Mover, ideal for creating air circulation to dry floors, carpets, walls or ceilings
                      3 speed switch for airflow control
                       Comes with two on-board 120V outlets to connect up to 3 Air Movers together for bigger jobs
                       Stackable design with interlocking intake guards for stacking purposes and for easy storage</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;