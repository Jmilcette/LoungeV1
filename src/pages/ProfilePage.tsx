import React from "react";
import { pages } from "../App";
import { Container, Jumbotron, Button, Figure, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import { ProfileUpdate } from '../components/updateProfile';
import PicCard from '../components/picCard';
import TextCard from '../components/textCard';

interface ProfilePageProps {
    changePage: (page: pages) => void;
}


export class ProfilePage extends React.Component<ProfilePageProps> {
    render() {


        return (
            <div className="topBlock">
                {/* Main Container of the two; left container */}
                <Jumbotron>
                    {/* Container consisting of the main user info and edit button */}
                    <div className="Avi" >
                        <div>
                            <img className="Placeholder" src={"https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"} />
                        </div>
                        <div className="info">
                            <h1>   </h1>
                            <h1 className="blackText" >Mandy Brown</h1>
                            <hr className="solid"></hr>
                            <p className="redText">Connections : 350</p>
                            <p className="blackText">
                                Middle School Teacher | Social Studies
                            </p>
                            <hr className="solid"></hr>

                            {/* Importing update component */}
                            <ProfileUpdate />
                        </div>
                    </div>

                    {/* Container for Experience cards */}
                    <div className="experience" >
                        <h1 className="blackText">Experience</h1>
                        <hr className="solid"></hr>
                        <div className="experienceCard">
                            <div className="eTitle blackText">University of Rhode Island</div>
                            <div className="eJob">Bachelors in Social Sciences</div>
                            <div className="eDescription">Sep 2015 – May 2019 <br /> South Kingstown, Rhode Island </div>
                        </div>

                        <div className="experienceCard">
                            <div className="eTitle blackText">Blackstone Valley Prep Mayoral Academy</div>
                            <div className="eJob">English Teacher</div>
                            <div className="eDescription">Jan 2020 – Present | 8 months</div>
                        </div>

                        <div className="experienceCard">
                            <div className="eTitle blackText">Teacher Assistant</div>
                            <div className="eJob">Breakthrough Collaborative </div>
                            <div className="eDescription"></div>
                        </div>

                        <div className="experienceCard">
                            <div className="eTitle blackText"> Teach For America Company NameTeach For America</div>
                            <div className="eJob"></div>
                            <div className="eDescription"></div>
                        </div>
                    </div>
                </Jumbotron>

                {/* Container for cards/Posted content */}
                <div className="Posts" >
                    <p className="blackText">Your Activity</p>
                    <div className="d-flex flex-column mt-2 mb-4" style={{ width: "30rem" }}>
                        <TextCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Music Friday"
                            text="To make Fridays more fun for the students and a day they look forward to, I like to reward them for a good week by playing background music while they are working. I even let them choose what songs they want to hear that day as long as they are clean."
                            hashtags="#fun #games #test #kahoot"
                            name="Mandy"
                        ></TextCard>
                        <PicCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Classroom Setup"
                            image="https://ncte.org/wp-content/uploads/2018/09/Classroom-community-1024x683.jpg"
                            description="This is my classroom setup for seminars"
                            hashtags="#classroom #setup #organization #seminar #students"
                            name="Mandy"
                        ></PicCard>
                        <PicCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Getting Students Attention"
                            image="https://debbiediller.files.wordpress.com/2009/09/using-tambourine-to-get-stu.jpg?w=225&h=300"
                            description="I am able to get my students' attention by using a tambourine"
                            hashtags="#attention #classroom #noise #focus"
                            name="Mandy"
                        ></PicCard>
                        <TextCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Bathroom Rule"
                            text="I like using the 'Bathroom Rule' in my classroom, which is a rule that does not let any of my students go to the bathroom during the first or last 10 minutes of class because those time periods are when the most key information is being given out."
                            hashtags="#fun #games #test #kahoot"
                            name="Mandy"
                        ></TextCard>
                        <PicCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Desk Setup"
                            image="https://i.pinimg.com/originals/18/7a/f5/187af56528232bcece19a15e57e20a0f.jpg"
                            description="This is how I organize my desk."
                            hashtags="#classroom #setup #organization #desk #teacher"
                            name="Mandy"
                        ></PicCard>
                        <TextCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Virtual Field Trips"
                            text="In light of the coronavirus, in-person field trips in most parts of the country will be cancelled. To make up for this, I am being creative by making a virtual field trip for them. There are plenty of interactive virtual field trip websites that make it seem like you are there in person! You should try them out!"
                            hashtags="#virtual #fieldtrip #internet #stayayhome #coronavirus"
                            name="Mandy"
                        ></TextCard>
                        <PicCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Duct Tape Pencil Pouch"
                            image="https://www.booksourcebanter.com/wp-content/uploads/Duct-Tape-pensils.jpg"
                            description="I used duct tape to make a pencil pouch so that no more pencils roll on the floor and get lost!"
                            hashtags="#desk #tape #pencils #students #organization"
                            name="Mandy"
                        ></PicCard>
                        <TextCard
                            profile="https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-Why-would-I-visit-twice-in-one-day.jpg"
                            title="Fun Ways to Test Understanding"
                            text="My favorite ways to test my students' understanding of any topic is to use Kahoot, Quizzizz, or Quizlet Live."
                            hashtags="#fun #games #test #kahoot"
                            name="Mandy"
                        ></TextCard>
                    </div>

                </div>

            </div>

        );


    }
}
