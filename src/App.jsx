import './App.css'
import React from 'react'
import { jobs } from './thisData.js'
import JobListing from './JobListing.jsx'

function App() {
  return (
    <React.Fragment>
      <section className='searchBar'>Search</section>
      <section className='jobSection'>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))
        ) : (
          <p>Inga jobb tillgängliga</p>
        )}
      </section>
    </React.Fragment>
  );
}

export default App