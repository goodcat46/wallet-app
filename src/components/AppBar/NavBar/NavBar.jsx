import React from 'react';

import sprite from '../../../assets/images/sprite.svg';

import { NavLink } from 'react-router-dom';

import { Mobile } from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={scss.navBar}>
      <ul className={scss.navList}>
        <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="/"
            end
          >
            <div className={scss.navIcon}>
              <svg className={scss.svg}>
                <use href={`${sprite}#icon-home`}></use>
              </svg>
            </div>
            <span className={scss.navText}>Home</span>
          </NavLink>
        </li>
        <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="statistics"
          >
            <div className={scss.navIcon}>
              <svg className={scss.svg}>
                <use href={`${sprite}#icon-chart`}></use>
              </svg>
            </div>
            <span className={scss.navText}>Statistics</span>
          </NavLink>
        </li>
        <Mobile>
          <li className={scss.navItem}>
            <NavLink
              className={obj =>
                obj.isActive ? scss.activeLink : scss.primaryLink
              }
              to="exchange"
            >
              <div className={scss.navIcon}>
                <svg className={scss.svg}>
                  <use href={`${sprite}#icon-dollar`}></use>
                </svg>
              </div>
              <span className={scss.navText}>Exchange</span>
            </NavLink>
          </li>
        </Mobile>
      </ul>
    </nav>
  );
};

export default NavBar;
