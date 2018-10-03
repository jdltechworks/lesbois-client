import React, { Component } from 'react'
import Jumbotron from '../components/jumbotron'
import Navigation from '../components/navigation'
import WhatWeDo from '../components/sections/whatwedo'
import About from '../components/sections/about'
import Team from '../components/sections/team'
import Partners from '../components/sections/partners'
import Daily from '../components/sections/daily'
import Footer from '../components/footer'
import Overlay from '../components/overlay'
import Contact from '../components/forms/Contact'

const menuSettings = [
    {
        name: 'home',
        hashTag: 'jumbotron'
    },
    {
        name: 'what we do',
        hashTag: 'what-we-do'
    },
    {
        name: 'about',
        hashTag: 'about'
    },
    {
        name: 'team',
        hashTag: 'team'
    },
    {
        name: 'partners',
        hashTag: 'partners',
    },
    {
        name: 'daily',
        hashTag: 'daily'
    }
]



const UseSectionProps = (props) => {
    const sections = [
        WhatWeDo,
        About,
        Team,
        Partners,
        Daily
    ]

    return sections.map((WrappedComponent, index) => {
        return(<WrappedComponent {...props.sections[index]} key={index} />)
    })
}

class Home extends Component {
    render() {
        const { props } = this
        const { screens } = props
        return(
            <div className="home">
                <Navigation
                    screens={screens}
                    menu={menuSettings} />
                <Jumbotron actions={props.actions} info={props.page_info} />

                { props.sections ? <UseSectionProps sections={props.sections} /> : null }

                <Footer actions={props.actions}/>

                <Overlay modal={props.Modal}>
                    <Contact close={props.actions.Modal.close} sendMail={props.actions.Mail.sendMail} token={props.token}/>
                </Overlay>
            </div>
        )
    }
}

export default Home
