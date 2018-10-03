import React, { Component } from 'react'
import chunk from 'lodash/chunk'
import map from 'lodash/map'
class Team extends Component {
    render() {
        const { props } = this
        const groupedGallery = chunk(props.gallery, 4)
        return(
            <div id="team" className="section">
                <div className="container grid-xl">
                    <h1 className="title text-center">MEET THE TEAM</h1>
                        {map(groupedGallery, (row, key) => {
                            return(
                                <div className="columns" key={key}>
                                    {map(row, (gallery, index) => {
                                        return (
                                            <div key={index} className="section-grid column col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3">
                                                <img alt="engineering" src={gallery.image_url} className="img-responsive"/>
                                                <div className="section-content">
                                                    <h1>{gallery.title}</h1>
                                                    <p>{gallery.caption}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Team
