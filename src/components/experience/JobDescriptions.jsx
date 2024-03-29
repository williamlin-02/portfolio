import React from 'react'

const descriptions = [
    {
        company: 'Akamai Technologies', 
        title: 'Software Engineering Intern', 
        description: ['Spearheaded the development of an application to control log distribution flow and monitor delivery status to enhance existing systems, forecasted to reduce disk usage by up to 40% and lower operational overhead by replacing manual load balancing with automation',
                      'Conducted comprehensive benchmark tests against relational (RDMS) and distributed database systems, evaluating their performance, scalability, and reliability to guide the selection of an optimized database solution',
                      'Devised and implemented a range of sophisticated internal C++ tests utilizing the Google Test framework, and seamlessly integrated them into the log delivery application for enhanced quality assurance',
                      'Collaborated with cross-functional teams to proactively remodel and improve the design of the application, resolve blocking issues, and document processes to facilitate knowledge transfer']
    },
    {
        company: 'Haylon Technologies', 
        title: 'Software Engineering Intern', 
        description: ['Designed and built a React web app to create, run, and display various battery simulations through API calls',
                      'Optimized user experience through actively enhancing the user interface with the MUI component library']
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