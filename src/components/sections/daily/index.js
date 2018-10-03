import React, { Component } from 'react'
import chunk from 'lodash/chunk'
import map from 'lodash/map'

class Daily extends Component {
    render() {
        const { props } = this
        const groupedGallery = chunk(props.gallery, 4)
        return (
            <div id="daily" className="section">
                <div className="container grid-lg">
                    <h1 className="title text-center">{props.heading.toUpperCase()}</h1>
                        {map(groupedGallery, (row, key) => {
                            return(
                                <div className="columns col-gapless" key={key}>
                                    {map(row, (gallery, index) => {
                                        return (
                                            <div key={index} className="column col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3">
                                                <img alt="engineering" src={gallery.image_url} className="img-responsive"/>
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

export default Daily
