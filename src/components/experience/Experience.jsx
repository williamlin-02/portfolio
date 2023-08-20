import React from 'react'
import './experience.css'
import {useState} from 'react'
import JobDescriptions from './JobDescriptions'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('#job0')
  return (
    <section id='experience'>
      <h5>Background</h5>
      <h2>Experience</h2>

      <div className="container experience__container">

        <div className="jobs">
          <button onClick={() => setActiveTab('#job0')} className={activeTab === '#job0' ? 'active' : ''}>Akamai Technologies</button>
          <button onClick={() => setActiveTab('#job1')} className={activeTab === '#job1' ? 'active' : ''}>Haylon Technologies</button>
          <button onClick={() => setActiveTab('#job2')} className={activeTab === '#job2' ? 'active' : ''}>Major League Hacking</button>
          <button onClick={() => setActiveTab('#job3')} className={activeTab === '#job3' ? 'active' : ''}>UChicago Joseph Regenstein Library</button>
        </div>

        <div className="descriptions">
          <JobDescriptions jobTab={activeTab}/>
        </div>

      </div>
    </section>
  )
}

export default Experience