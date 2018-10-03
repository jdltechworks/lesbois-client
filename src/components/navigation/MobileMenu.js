import React from 'react'
import map from 'lodash/map'
import { Transition } from 'react-transition-group'

const MobileMenu = ({isOpen, menu, moveTo}) => {
    return(
        <Transition
            isOpen={isOpen}
            timeout={{enter: 0, exit: 100}}
            unmountOnExit>
            {(state) => (
              <div className="navbar-section">
                  <ul className="navbar-menu">
                      {map(menu, (value, key) => {
                          const { hashTag, name } = value
                          return(
                              <li key={key} className="navbar-menu-item">
                                  <a href={hashTag} onClick={moveTo.bind(this, hashTag)}>{name.toUpperCase()}</a>
                              </li>
                          )
                      })}
                  </ul>
              </div>
            )}

        </Transition>
    )
}

export default MobileMenu
