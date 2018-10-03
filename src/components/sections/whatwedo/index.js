import React, { Component } from 'react'

class WhatWeDo extends Component {
    render() {
        const { props } = this
        return(
            <div id="what-we-do" className="section">
                <div className="container grid-lg">
                    <h1 className="title text-center">{props.heading.toUpperCase()}</h1>
                    <div className="columns">
                        {props.gallery.map((gallery, index) => {
                            return (<div key={index} className="column col-lg-4 col-md-12 col-sm-12 col-xs-12 section-grid-centered">
                                <img alt="engineering" src={gallery.image_url} />
                                <h3>{gallery.title}</h3>
                                <p>
                                    {gallery.caption}
                                </p>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatWeDo
