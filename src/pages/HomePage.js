import React from 'react';
import { Slider, OurPrograme, Services, TeacherList, About } from '../compenent/index';
// import Home from '../compenent/Home'
const HomePage = () => {
    return (
        <div>
            <div>
                <Slider />
                <OurPrograme />
                <Services />
                <TeacherList />
                <About />
            </div>
        </div>
    );
}

export default HomePage;
