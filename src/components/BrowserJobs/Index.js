import React from 'react'
import HeroSectionBrowserJobs from './HeroSectionsubmitCV';
import JobsCategory from './JobsCatagery';
import Jobscart from './Jobscart';
import BroserMessage from './BroserMessage';

export default function BrowserComponent() {
  return (
    <>
        <HeroSectionBrowserJobs/>
        <JobsCategory/>
        <Jobscart/>
        <BroserMessage/>
    </>  
  )
}

