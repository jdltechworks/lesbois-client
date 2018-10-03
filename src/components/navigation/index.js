import React, { Component } from 'react'
import jump from 'jump.js'
import map from 'lodash/map'
import Media from 'react-media'
import MobileMenu from './MobileMenu'

class Navigation extends Component {
    state = {
        isOpen: false
    }
    moveTo(href, e) {
        console.log(href)
        e.preventDefault()
        const loc = document.getElementById(href)
        jump(loc)
    }
    componentDidMount() {
        document.addEventListener(
            'scroll',
            this.scrollListener.bind(this)
        )
    }
    scrollListener(e) {
        const firstSection = document.querySelector('.section')
        const pageTarget = firstSection.offsetTop - 1

        if(pageTarget <= window.pageYOffset) {
            this.refs.navbar.classList.add('switched')

        } else if(pageTarget > window.pageYOffset) {
            this.refs.navbar.classList.remove('switched')
        }

    }
    componentWillUnmount() {
        document.removeEventListener(
            'scroll',
            this.scrollListener.bind(this)
        )
    }

    toggle(e) {
        e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const { props, moveTo, state, toggle } = this
        const { menu, screens } = props
        const { isOpen } = state
        return(
            <div ref="navbar" className="navbar-container">
                <div className="container grid-xl">
                    <header className="navbar navbar-fixed">
                        <section className="navbar-section">
                            <a href="#" className="navbar-brand mr-2">
                                <img src="/static/img/logo-lbs.png" />
                                <img src="/static/img/logo-flipped.png" />
                            </a>
                            <a href="#" onClick={toggle.bind(this)} className="show-sm btn btn-lg ml-auto"><i className="icon icon-menu"></i></a>
                        </section>

                            <Media query={{ maxWidth: screens.sm }}>
                                {matches => matches ? (
                                    <MobileMenu isOpen={isOpen} menu={menu} moveTo={moveTo} />
                                ) : (
                                    <section className="navbar-section">
                                        <ul className="navbar-menu">
                                          {map(menu, (value, key) => {
                                              const { hashTag, name } = value
                                              return(
                                                  <li key={key} className="navbar-menu-item">
                                                      <a href={hashTag} onClick={moveTo.bind(this, hashTag)}>{name.toUpperCase()}</a>
                                                  </li>
                                              )
                                          })}
                                          <li className="navbar-menu-item">
                                            <a href="/blog">BLOG</a>
                                          </li>
                                        </ul>
                                  </section>
                                )}
                            </Media>

                    </header>
                </div>
            </div>
        )
    }
}

export default Navigation
