import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../Assests/me.jpg';

const Portfolio = () => {
    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Developer Portfolio</span></h3>

            <div>
                <div class="avatar flex justify-center">
                    <div class="w-36 rounded-full">
                        <img src={me} alt='' />
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-2xl text-center text-indigo-900 bg-clip-text bg-gradient-to-br from-accent to-secondary mt-3 font-bold'>Mahbubur Rahman</h3>
                    <div className='flex flex-col justify-center items-center mb-6'>
                        <h3 className='text-lg text-sky-600'>mdmahbuborr462@gmail.com</h3>
                        <a href='https://www.linkedin.com/in/md-mahbubor-rahman-a2870723b/' class="text-lg btn-active btn-info btn-link">Linkedin profile</a >
                        <a href='https://mahbubur1.github.io/assinmant-1/' class="text-lg btn-active btn-info btn-link">Portfolio</ a>
                    </div>
                    <div className='flex justify-center items-center mb-10'>
                        <div class="card w-full md:w-2/4 lg:w-2/5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title">Skills</h2>
                                <div className='flex'>
                                    <p> <span className='text-md font-bold'>Expertise</span> <br />
                                        1. JavaScript <br />
                                        2. ES6 <br />
                                        3. React <br />
                                        4. HTML5 <br />
                                        5. CSS3 <br />
                                        6. Bootstrap <br />
                                        7. Tailwind
                                    </p>
                                    <p> <span className='text-md font-bold'>Comfortable</span> <br />
                                        1. Node.js <br />
                                        2. MongoDB <br />
                                        3. Firebase <br />
                                        4. Daisy-UI
                                    </p>
                                    <p> <span className='text-md font-bold'>Tools</span> <br />
                                        1. GitHub <br />
                                        2. VS Code <br />
                                        3. Figma <br />
                                        4. Chrome Dev Tools <br />
                                        5. Heroku <br />
                                        6. Netlify
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-10'>
                        <div class="card w-full md:w-2/4 lg:w-2/5 bg-gradient-to-r from-purple-500 to-pink-500 text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title">Projects</h2>
                                <div className='grid grid-cols-1'>
                                    <p> <span className='text-md font-bold'>1. Auto Showroom</span> <br />
                                        <Link className='btn-link btn-active' to='https://mads-auto-showroom.web.app/' >Live Site Link</Link> <br />
                                        <Link className='btn-link btn-active' to='https://github.com/MrMADS28289/Auto-Showroom' >Client Side GitHub Link</Link> <br />
                                        <Link className='btn-link btn-active' to='https://github.com/MrMADS28289/Auto-Showroom-Server' >Server Side GitHub Link</Link> <br />

                                        It’s a car's dealer website.
                                        For buy and sell cars.
                                        User can log in with email and Facebook.
                                    </p>
                                    <p> <span className='text-md font-bold'>2. My To-Do app</span> <br />
                                        <Link className='btn-link btn-active' to='https://mads-to-do-list.web.app/login' >Live Site Link</Link> <br />
                                        <Link className='btn-link btn-active' to='https://github.com/MrMADS28289/To-Do-List' >Client Side GitHub Link</Link> <br />
                                        <Link className='btn-link btn-active' to='https://github.com/MrMADS28289/To-Do-List-server' >Server Side GitHub Link</Link> <br />

                                        It's a To Do check list website. You can note you'r daily task, and that's secure. You need to login first of all.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;