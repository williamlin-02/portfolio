import React from 'react'

const descriptions = [
    {
        company: 'Haylon Technologies', 
        title: 'Software Engineer', 
        description: ['Spearheaded a React web app to create, run, and display various battery simulations through API calls',
                      '(Expected) Will implement a back-end battery simulation platform in Python to generate electric current data and emulate a battery management system',]
    },
    {
        company: 'Major League Hacking', 
        title: 'Production Engineering Fellow (powered by Meta)', 
        description: ['Created an open-source personal portfolio website template with 500+ lines of code, containing both frontend and backend components such as Python, Flask, Javascript, Jinja, MySQL, Nginx, and unittest',
                      'Automated testing and deployment workflows using CI/CD through Github Actions to increase efficiency by 80%',
                      'Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana',
                      'Completed 12 weeks of structured curriculum-based learning covering core Production Engineering topics, supplemented with events / workshops hosted by industry experts']
    },
    {
        company: 'UChicago Joseph Regenstein Library', 
        title: 'Library Computing Assistant', 
        description: ['Managed a technical troubleshooting platform to receive and resolve over 5 tickets daily from staff, decreasing the number of blockers and increasing system uptime by 10%',
                      'Regulated the maintenance and upgrade of 110 computers to facilitate better workflow and increased productivity']
    }
]

const JobDescriptions = (props) => {
    let jobIndex = parseInt(props.jobTab.charAt(props.jobTab.length - 1))
    return (
        <div>
            <h3>{descriptions[jobIndex].company}</h3>
            <h5><em>{descriptions[jobIndex].title}</em></h5> <br></br>
            <h5>{descriptions[jobIndex].description.map(function(d, idx){
                    return (<li className='bulletpoints' key={idx}>> {d}</li>) }) }
            </h5>
        </div>
    )
}

export default JobDescriptions