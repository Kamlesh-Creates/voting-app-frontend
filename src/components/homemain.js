import React, { useEffect, useState } from 'react';
import BootstrapCarousel from './slideshow';
import Cards from './cards';
import Tab from './tab';
import { fetchCandidates, fetchelectiondata } from './api';
import NoticeSlider from './slidernotice';



function Homemain() {

  const[totalcandidate,settotalcandidate]=useState(0);
  const[totalvotecount,settotalvotecount]=useState(0);
  const[activeelection,setactiveelection]=useState(0);
  useEffect(()=>{
    loadstats()
  })
  const loadstats=async()=>{
    try {
         const response=await fetchCandidates();
    const candidates=response.data;
    settotalcandidate(candidates.length);
    const votes=candidates.reduce((acc,candiate)=>acc+(candiate.votecount||0),0);
    settotalvotecount(votes)

    //fetch active elections
     const electionRes = await fetchelectiondata();
    const elections = electionRes.data;
    const activeCount = elections.filter((election) => election.isActive === true).length;
    setactiveelection(activeCount);
      
    } catch (error) {
      console.log(error)
    }
 
  }
  return (
    <>
    <NoticeSlider/>
    <BootstrapCarousel/>
    <div className="min-h-screen bg-gray-50 py-12 px-4" style={{marginTop:"13px"}}>
      
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Candidates</h3>
            <p className="text-3xl font-bold text-blue-700" style={{fontSize:"23px"}}>{totalcandidate}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Votes</h3>
            <p className="text-3xl font-bold text-blue-700" style={{fontSize:"23px"}}>{totalvotecount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-600">Active Elections</h3>
            <p className="text-3xl font-bold text-blue-700" style={{fontSize:"23px"}}>{activeelection}</p>
          </div>
        </div>
      </section>
    </div>
    <Cards/>
    <Tab/>
    </>
  );
}

export default Homemain;
