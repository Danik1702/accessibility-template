import { useState } from 'react';
import { TextInput } from '../index';
import { HEADER_NAVIGATION_ITEMS_LIST } from '../../constants';
import { LogoIcon, SearchIcon } from '../../assets/icons';

import './header.styles.scss';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('hi there');
  }

  const headerNavListItems = HEADER_NAVIGATION_ITEMS_LIST.map(item => {
    const { id, url, title, icon } = item;

    if (!url) {
      return (
        <li key={id} className="header-navigation-item">
          <button type="button" className="header-navigation-button button vertical-centralize-children">
            <p className="text-link">{title}</p>
            <div className="arrow-down-wrap">
              {icon}
            </div>
          </button>
        </li>
      );
    }

    return (
      <li key={id} className="header-navigation-item vertical-centralize-children">
        <a href={url} className="navigation-item-link text-link">{title}</a>
        <span className="navigation-item-separator text-link" />
      </li>
    );
  });

  return (
    <header id="header" className="vertical-centralize-children">
      <nav className="header-navigation vertical-centralize-children">
        <div className="header-logo">
          <a href="#home" aria-label="App Home Page">
            <LogoIcon />
          </a>
        </div>

        <div>
          <ul className="header-navigation-list">
            {headerNavListItems}
          </ul>
        </div>
      </nav>

      <section className="header-search">
        <form onSubmit={handleFormSubmit}>
          <TextInput
            value={searchValue}
            onChange={handleSearchValueChange}
            placeholder="Search this site"
            isSearch
            name="search"
            height={48}
          >
            <div className="submit-button-wrapper">
              <button type="submit" aria-label="Submit search" className="submit-button vertical-centralize-children">
                <SearchIcon />
              </button>
            </div>
          </TextInput>
        </form>
      </section>
    </header>
  );
};