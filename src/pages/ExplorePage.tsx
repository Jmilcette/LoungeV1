import React, { useState, useEffect, useRef } from "react";
import { pages } from "../App";
import "./styles/ExplorePage.css"
import 'bootstrap/dist/css/bootstrap.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { CardColumns, Collapse, ButtonGroup, NavDropdown } from "react-bootstrap";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect'

//SOME NOTES: In future instances, I would rewerite this page in funciton component form to use be able to use React Hooks' implementation more effectively and
// implement Redux's use of Reducers to call components and values from other files and pass them as objects into my DataTable
// Overall, though, I'm proud of working through understanding React Hooks enough to translate that knowledge into class component form, and working through
// bugs within the DataTable that were challenging to sort through given a lack of Typescript documentation online

interface ExplorePageProps {
    changePage: (page: pages) => void;

}

interface ExplorePageState {
    selectCategory1: any
    selectCategory2: any
    selectGrade: any
    selectSubject: any
    globalFilter:any

}
//bulding data for each table
const trendingdata = [
    { title: "Beginning Online Teaching", author: "Patricia Muchi", category:"Video", description:"I am a first-time teacher begining an online curriculum. Here are my thoughts on entering the workforce during unprecedented times", hashtags: ["#New Teacher ", "#COVID "]},
    { title: "Classroom Icebreakers", author: "Ankitha Kumar", category: "Video", description: "I feel like as an icebreaker, it might be easier for kids to find quotes to represent their own personalities/values.", hashtags: ["#Icebreaker ", "#Introductions "]},
    { title: "Kindergarten Temper Tantrums", author: "Latoya Adams", category: "Text Post", description: "Help! Could someone give advice on how to best approach handling temper tantrums?", hashtags: ["#Behavior ", "#Tantrums ", "#Kindergarten "], grade:"Kindergarten", subject:"Other"},
    { title: "Autism PD", author: "Viola Washington", category: "Text Post", description: "I've chosen important topics and gathered videos and articles from people with autism, educators, researchers, behaviorists, parents, and others to get a really well balanced view.", hashtags: ["#Autism ", "#Special Needs ", "#Resources "]},
    { title: "I am resigning tomorrow. Any Advice?", author: "Eritrea Smith", category: "Video", description: "I am at my wits end, and I have decided to choose my long-term health, sanity, and happiness over my career. Any advice on how to handle the conversation, or how to write an effective resignation letter specific to this time?", hashtags: ["#Advice ", "#Resign "]},
    { title: "My thoughts on Curving Grades/Assignments", author: "Anthony Carrick", category: "Video", description:"My thoughts on curving, especially during time of COVID.", hashtags: ["#Curve ", "#COVID ", "#Adaptable "] },
    { title: "Stimming", author: "Jermaine Cole", category: "Thread", description: "Let's talk about stimming. I'll post an article describing it. Don't try and stop it without the help of the special ed teacher. Stopping a kid from stimming can be very detrimental.", hashtags: ["#Stimming ", "#Special Ed "]},
    { title: "English Project Idea", author: "Plead Fifth", category: "Text Post", description: "I am an English Teacher and have a project idea for the beginning of the year. he idea is that the students find quotes relating to the overarching theme of the school year.", hashtags: ["#English ", "#Project Idea "], subject:"English"},
    { title: "Why Do Behaviors Happen?", author: "Jane Doe", category: "Video", description: "A great repost of a Youtube video explaining behaviors and why they occur.", hashtags: ["#Special Needs ", "#Behavior "]},
    { title: "Executive Functioning Skills", author: "Jhene Stallion", category: "Text Post", description: "Executive functioning skills are difficult for students with autism. Post a daily schedule. Always warn a couple minutes before transition. For bigger projects, break it into several chunks", hashtags: ["#Autism ", "#Executive Functioning"]},
    { title: "Engaging students online", author: "Bernice Simmons", category: "Thread", description: "With the likelihood of my district going back 100% virtually I wanted to reach out and ask if there are any tips or tricks you have for engaging students virtually?", hashtags: ["#Online Learning ", "#COVID ", "#Advice "], grade:"Other", subject:"Other"},
    { title: "Math Exercises", author: "Penny Hoffman", category: "Text Post", description: "Here are some interesting strategies to introduce counting", hashtags: ["#3rd Grade ", "#Math ", "#Counting "], grade: "Third Grade", subject:"Math"}, //TODO: For user input, add " " betweeen each word (array.join()
    { title: "7th Grade Social Studies", author: "Morris Hoover", category: "Video", description: "How to best approach social studies techniques in the classroom", hashtags: ["#7th Grade ", "#Social Studies ", "#Teaching Techniques "], grade:"Seventh Grade", subject:"Social Studies" },
    { title: "Health Science and PE", author: "Guilford County Health Teachers", category: "Group Chat", description: "Group chat focused on presenting health science to students in new and exciting ways", hashtags: ["#Health Science ", "#Physical Education "], grade:"Middle School", subject:"Science" },
    { title: "Encouraging Students' Investment", author: "Neal Gustafson", category: "Thread", description: "I’m a high school teacher at an at-risk, title 1 school. How did you or will you get your students invested in their classes?", hashtags: ["#Title I ", "#Engagement "]},
    { title: "Students on Instagram", author: "Tinashe Magodo", category: "Text Post", description: "So I have a public “teacher Instagram.” Started it to follow other teachers, ended up posting some of my lessons, and a few years later it’s become flooded by my students.", hashtags: ["#Tech ", "#Students Online ", "#Teaching Alternatives"]},
    { title: "NASA Office of STEM Engagement", author: "NASA", category: "Text Post", description: "We are educators from NASA’s Office of STEM Engagement, looking to help you bring genuine NASA mission-driven experiences to your students in the upcoming school year. ", hashtags: ["#NASA ", "#STEM "]},
    { title: "Classroom Management Tools", author: "Kerry Davis", category: "Thread", description: "Please post your favorite strategies for organized setup of a classroom", hashtags: ["#Organization ", "#Seating ", "#Setup "]},
    { title: "Social Studies Final Project", author: "Nigel Vogel", category: "Thread", description: "Final project: Having students create a list of stories from the perspective of someone living through histor.", hashtags: ["#Final Project ", "#Social Studies "]},
    { title: "Target Language Structure in Writing", author: "Crystal Welch", category:"Text Post", description:"I have to create a lesson that needs me to elicit a sentence from my students with minimal speaking (i.e. gestures, fingers to demonstrate number of words, pictures).", hashtags: ["#Target Language ", "#Essay Structure "]}

]

const recommendeddata = [
    { title: "Why Do Behaviors Happen?", author: "Jane Doe", category: "Video", description: "A great repost of a Youtube video explaining behaviors and why they occur.", hashtags: ["#Special Needs ", "#Behavior "]},
    { title: "7th Grade Social Studies", author: "Morris Hoover", category: "Video", description: "How to best approach social studies techniques in the classroom", hashtags: ["#7th Grade ", "#Social Studies ", "#Teaching Techniques "], grade:"Seventh Grade", subject:"Social Studies" },
    { title: "Engaging students online", author: "Bernice Simmons", category: "Thread", description: "With the likelihood of my district going back 100% virtually I wanted to reach out and ask if there are any tips or tricks you have for engaging students virtually?", hashtags: ["#Online Learning ", "#COVID ", "#Advice "], grade:"Other", subject:"Other"},
    { title: "English Project Idea", author: "Mako Iroh", category: "Text Post", description: "I am an English Teacher and have a project idea for the beginning of the year. he idea is that the students find quotes relating to the overarching theme of the school year.", hashtags: ["#English ", "#Project Idea "], subject:"English"},
    { title: "Social Studies Final Project", author: "Nigel Vogel", category: "Thread", description: "Final project: Having students create a list of stories from the perspective of someone living through histor.", hashtags: ["#Final Project ", "#Social Studies "]},
    { title: "Target Language Structure in Writing", author: "Crystal Welch", category:"Text Post", description:"I have to create a lesson that needs me to elicit a sentence from my students with minimal speaking (i.e. gestures, fingers to demonstrate number of words, pictures).", hashtags: ["#Target Language ", "#Essay Structure "]},
    { title: "NASA Office of STEM Engagement", author: "NASA", category: "Text Post", description: "We are educators from NASA’s Office of STEM Engagement, looking to help you bring genuine NASA mission-driven experiences to your students in the upcoming school year. ", hashtags: ["#NASA ", "#STEM "]},
    { title: "Beginning Online Teaching", author: "Patricia Muchi", category:"Video", description:"I am a first-time teacher begining an online curriculum. Here are my thoughts on entering the workforce during unprecedented times", hashtags: ["#New Teacher ", "#COVID "]},
    { title: "Students on Instagram", author: "Tinashe Magodo", category: "Text Post", description: "So I have a public “teacher Instagram.” Started it to follow other teachers, ended up posting some of my lessons, and a few years later it’s become flooded by my students.", hashtags: ["#Tech ", "#Students Online ", "#Teaching Alternatives"]},
    { title: "Math Exercises", author: "Penny Hoffman", category: "Text Post", description: "Here are some interesting strategies to introduce counting", hashtags: ["#3rd Grade ", "#Math ", "#Counting "], grade: "Third Grade", subject:"Math"}, //TODO: For user input, add " " betweeen each word (array.join()
    { title: "Health Science and PE", author: "Guilford County Health Teachers", category: "Group Chat", description: "Group chat focused on presenting health science to students in new and exciting ways", hashtags: ["#Health Science ", "#Physical Education "], grade:"Middle School", subject:"Science" },
    { title: "Kindergarten Temper Tantrums", author: "Latoya Adams", category: "Text Post", description: "Help! Could someone give advice on how to best approach handling temper tantrums?", hashtags: ["#Behavior ", "#Tantrums ", "#Kindergarten "], grade:"Kindergarten", subject:"Other"},
    { title: "Encouraging Students' Investment", author: "Neal Gustafson", category: "Thread", description: "I’m a high school teacher at an at-risk, title 1 school. How did you or will you get your students invested in their classes?", hashtags: ["#Title I ", "#Engagement "]},
    { title: "I am resigning tomorrow. Any Advice?", author: "Eritrea Smith", category: "Video", description: "I am at my wits end, and I have decided to choose my long-term health, sanity, and happiness over my career. Any advice on how to handle the conversation, or how to write an effective resignation letter specific to this time?", hashtags: ["#Advice ", "#Resign "]},
    { title: "Classroom Management Tools", author: "Kerry Davis", category: "Thread", description: "Please post your favorite strategies for organized setup of a classroom", hashtags: ["#Organization ", "#Seating ", "#Setup "]},
    { title: "Autism PD", author: "Viola Washington", category: "Text Post", description: "I've chosen important topics and gathered videos and articles from people with autism, educators, researchers, behaviorists, parents, and others to get a really well balanced view.", hashtags: ["#Autism ", "#Special Needs ", "#Resources "]},
    { title: "Executive Functioning Skills", author: "Jhene Stallion", category: "Text Post", description: "Executive functioning skills are difficult for students with autism. Post a daily schedule. Always warn a couple minutes before transition. For bigger projects, break it into several chunks", hashtags: ["#Autism ", "#Executive Functioning"]},
    { title: "Stimming", author: "Jermaine Cole", category: "Thread", description: "Let's talk about stimming. I'll post an article describing it. Don't try and stop it without the help of the special ed teacher. Stopping a kid from stimming can be very detrimental.", hashtags: ["#Stimming ", "#Special Ed "]},
    { title: "Classroom Icebreakers", author: "Ankitha Kumar", category: "Video", description: "I feel like as an icebreaker, it might be easier for kids to find quotes to represent their own personalities/values.", hashtags: ["#Icebreaker ", "#Introductions "]},
    { title: "My thoughts on Curving Grades/Assignments", author: "Anthony Carrick", category: "Video", description:"My thoughts on curving, especially during time of COVID.", hashtags: ["#Curve ", "#COVID ", "#Adaptable "] },
]

export class ExplorePage extends React.Component<ExplorePageProps, ExplorePageState>{

    private hashtagList = [
        { label: "3rd Grade Math", value: "3rd Grade Math" },
        { label: "Math ", value: "Math" },
        { label: "Counting", value: "Counting" },
        { label: "7th Grade", value: "7th Grade" },
        { label: "Social Studies", value: "Social Studies" },
        { label: "Teaching Techniques", value: "Teaching Techniques" },
        { label: "Health Science", value: "Health Science" },
        { label: "Social Studies", value: "Social Studies" },
        { label: "Behavior", value: "Behavior" },
        { label: "Tantrums", value: "Tantrums" },
        { label: "Kindergarten", value: "Kindergarten" },
    ]

    private gradeList = [
        { label: "Kindergarten", value: "Kintergarten" },
        { label: "First Grade", value: "First Grade" },
        { label: "Second Grade", value: "Second Grade" },
        { label: "Third Grade", value: "Third Grade" },
        { label: "Fourth Grade", value: "Fourth Grade" },
        { label: "Fifth Grade", value: "Fourth Garde" },
        { label: "Sixth Grade", value: "Sixth Grade" },
        { label: "Seventh Grade", value: "Seventh Grade" },
        { label: "Eighth Grade", value: "Eighth Grade" },
        { label: "Ninth Grade", value: "Ninth Grade" },
        { label: "Tenth Grade", value: "Tenth Grade" },
        { label: "Eleventh Grade", value: "Eleventh Grade" },
        { label: "Twelfth Grade", value: "Twelfth Grade" },
        { label: "Elementary School", value: "Elementary School"},
        { label: "Middle School", value: "Middle School"},
        { label: "High School", value: "High School"}
    ]

    private subjectList = [
        { label: "Math", value: "Math" },
        { label: "Science", value: "Science" },
        { label: "Social Studies", value: "Social Studies" },
        { label: "Literature", value: "Literature" },
        { label: "English", value: "English" },
        { label: "Other", value: "Other"}
    ]

    //catList used for dropdown element in DataTable
    private catList = [
        { label: 'Text Post', value: 'Text Post' },
        { label: 'Video', value: 'Video' },
        { label: 'Group Chat', value: 'Group Chat' },
        { label: 'Thread', value: 'Thread'}
    ]

    constructor(props: ExplorePageProps) {
        super(props)
        this.state = {
            selectCategory1: null,
            selectCategory2:null,
            selectGrade: null,  
            selectSubject: null,
            globalFilter: null 
            //NOTE: globalFilter defined but not use...in future would add correct method that searches through all column data to render approapriate data
            //NOTE: selectGrade and selectSubject were previously used as additional dropdowns outside of dataTable for additional filtering..but ultimately decided against this
        };
    }

    //way to use useState in class component form — gathers and sets state for selectCategory, selectGrade, etc. filters
    private setSelectCategory1 = (currentState: any) => {
        return (this.setState({ selectCategory1: currentState })) //building a new object w/ one property (selectCategory) ... this is json (js ob. notation)
    }

    private setSelectCategory2 = (currentState: any) => {
        return (this.setState({ selectCategory2: currentState })) //building a new object w/ one property (selectCategory) ... this is json (js ob. notation)
    }

    private setGlobalFilter = (currentState: any) => {
        return (this.setState({globalFilter: currentState}))
    }

    //createRef recieves underlying DOM element as its property to create an instance — useful in class components, not 
    dt1 = React.createRef<any>();
    dt2 = React.createRef<any>();
    rt = React.createRef<any>();
    gt = React.createRef<any>();
    ft = React.createRef<any>();;

    //Using createRef and setCategory to compare state of dropdown and call for all data in table with a event.value 'property'
    onCatChange1 = (event: any) => {
        this.dt1.current.filter(event.value, 'category', 'equals');
        this.setSelectCategory1(event.value);
    };

    onCatChange2 = (event: any) => {
        this.dt2.current.filter(event.value, 'category', 'equals');
        this.setSelectCategory2(event.value);
    };

    //Dropdowns that use previous methods to filter data
    //Using PrimeReact was incredibly helpful in this sense

    private categoryFilter1 = <Dropdown className="Catdropdown" style={{ width: '100%' }} placeholder="Select a Category"
         options={this.catList} onChange={this.onCatChange1}
        ref={this.dt1} appendTo={document.getElementsByTagName("BODY")[0]}/>;

    private categoryFilter2 = <Dropdown className="Catdropdown" style={{ width: '100%' }} placeholder="Select a Category"
        options={this.catList} onChange={this.onCatChange2}
       ref={this.dt2} appendTo={document.getElementsByTagName("BODY")[0]}/>;

    private columns1 = [
        { field: 'title', header: 'Title', style: { width: '14%' }, body: null, filter: false },
        { field: 'author', header: 'Author', style: { width: '13%' }, body: null, filter: false },
        { field: 'category', header: 'Category', style: { width: '23%' }, body: null, filter: true, filterElement: this.categoryFilter1 },
        { field: 'description', header: 'Description', style: { width: '40%' }, body: null, filter: true },
        { field: 'hashtags', header: 'Hashtags', style: { width: '15%' }, body: 'this is  test', filter: false },
    ]

    private columns2 = [
        { field: 'title', header: 'Title', style: { width: '14%' }, body: null, filter: false },
        { field: 'author', header: 'Author', style: { width: '13%' }, body: null, filter: false },
        { field: 'category', header: 'Category', style: { width: '23%' }, body: null, filter: true, filterElement: this.categoryFilter2 },
        { field: 'description', header: 'Description', style: { width: '40%' }, body: null, filter: true },
        { field: 'hashtags', header: 'Hashtags', style: { width: '15%' }, body: 'this is  test', filter: false }
    ]

    //dynamically building columns for each of the properties listed in my array
    private dynamicCols1 = this.columns1.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} style={col.style} filter={true} filterElement={col.filterElement} filterMatchMode="contains" />;/* filter={true} sortable filter*/

    })

    private dynamicCols2 = this.columns2.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} style={col.style} filter={true} filterElement={col.filterElement} filterMatchMode="contains" />;/* filter={true} sortable filter*/

    })

    //Export data in Table
    onExportTrending = () => {
        this.dt1.current.exportCSV();
    };

    onExportRecommended = () => {
        this.dt2.current.exportCSV();
    };

    //Create method that renders table headers
    renderTrendingHeader = () => {
        return (
            <div>
                <header className="DataTableTitle">Trending Topics </header>
                <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.onExportTrending} className="csvButton"/>
            </div> 
        )
    }

    renderRecommendedHeader = () => {
        return (
            <div>
                <header className="DataTableTitle">Recommended Topics </header>
                <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.onExportRecommended} className="csvButton"/>
            </div>
        )
    }

    //Create header objects for each table
    private trendingHeader = this.renderTrendingHeader();
    private recommendedHeader = this.renderRecommendedHeader();

    //Create Final DataTables with header and dynamic columns
    render() {
        return (
            <div className="ExplorePageBody">
                <header className="head"> Explore </header> 
                <div className="FilterBy">
                    <div className="FilterByHeader"> Find and search for posts trending in your area </div>
                </div>
                <div className="TableGrid">
                    <div className="TrendTable">
                        <DataTable header={this.trendingHeader} id="Table1" className="Table1" ref={this.dt1} value={trendingdata} responsive={true} resizableColumns={true}  scrollable={false} scrollHeight="550px" columnResizeMode="fit" paginator rows={8} >
                        {this.dynamicCols1}
                        </DataTable>
                    </div>
                    <div className="RecTable">
                        <DataTable header={this.recommendedHeader} id="Table2" className="Table2" ref={this.dt2} value={recommendeddata} responsive={true} resizableColumns={true}  scrollable={false} scrollHeight="550px" columnResizeMode="fit" paginator rows={8} >
                            {this.dynamicCols2}

                        </DataTable>
                    </div>
                </div>

            </div>


        );


    }
}

const rootElement = document.getElementById("root");
