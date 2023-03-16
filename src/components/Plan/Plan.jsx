import React from 'react'
import { Foot } from '../ui/Foot/Foot'
import { Menu } from '../ui/Menu/Menu'
import { PlanHelp } from './PlanHelp'
import './Plan.css';
import { Link } from 'react-router-dom';

export const Plan = () => {
  return (
    <>
        <Menu />
        <div className='plan-title'>
            <h1>Plan</h1>
            <p>What you need befor your travel.</p>
        </div>

        <PlanHelp />

        <div className='plan-explore-all'>
            <h2>Explore the world with Air Inter Ex's diverse range of destinations.</h2>
            <div className='plan-explore'>
                <div className='plan-explore-u'>
                    <img src='https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1366691/3905965/PSTSHB100005S__66294.1542143153.jpg?c=2'/>
                    <h4>Discover more of Eberswalde</h4>
                    <Link to='/'>Explore</Link>
                </div>
                <div className='plan-explore-u'>
                    <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/64/6b/plaza-general-manuel.jpg?w=700&h=500&s=1'/>
                    <h4>Discover more of Burzaco</h4>
                    <Link to='/'>Explore</Link>
                </div>
            </div>
        </div>

        <Foot />
    </>
  )
}
