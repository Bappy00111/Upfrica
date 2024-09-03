import React from 'react'
import Categore from './Categore'
import LightningSection from './LightningSection'
import ArrivalsSection from './ArrivalsSection'
import ContentSection from './ContentSection'
import Qussen from './Qussen'

export default function Home() {
  return (
    <div className='space-y-5'>
        <Categore/>
        <LightningSection/>
        <ArrivalsSection/>
        <ContentSection/>
        <LightningSection/>
        <ArrivalsSection/>
        <LightningSection/>
        <Qussen/>
    </div>
  )
}
