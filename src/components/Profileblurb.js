import React from 'react'
import BYUIMG from '../assets/BYUIS.jpg'
import AWS from '../assets/AWS.png'

function profileblurb() {
    return (
        <>
    <h1 className='text-center pt-5 text-5xl'>Welcome</h1>
    <div className="content flex py-2">
    <img src={AWS} alt="Best Major Ever" className="w-96 h-96 p-12 pt-20 flex .object-scale-down"/>
    <div>
         <p className="item-body text-justify text-2xl p-12">
            I am in the Master of Information Systems program with an expected graduation date of April 2023. This summer I will be working at Amazon Web Services in Arlington, VA as a Solutions Architect intern! I look forward to this opportunity to enhance my leadership and technical skills at the industry leader in cloud computing. My coursework focuses primarily on software engineering, DevOps, and cyber security. My coursework and internship have given me extensive experience building web applications with anumber of languages and technologies including C#/ASP.net, Python/Django, and Javascript/Typescript/React. I have experience deploying applications with AWS.
        </p>
    
    </div>
       
    <img src={BYUIMG} alt="Best Major Ever" className="w-96 h-96 p-12 pt-20 flex .object-scale-down"/>
    </div>
    
    </>
    )
}

export default profileblurb