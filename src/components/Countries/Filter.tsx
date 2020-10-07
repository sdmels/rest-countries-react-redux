import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import './Filter.scss';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Filter = () => {
  const filterRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState();

  useEffect(() => {
    if (!filterRef.current) {
      return;
    }

    const handleClickOutside = (event) => {
      if (!filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [filterRef, setIsOpen]);

  const toggleOpen = () => setIsOpen((open) => !open);

  const onRegionSelected = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? `open` : ``}`} ref={filterRef}>
      <div className="dropdown__header" onClick={toggleOpen}>
        <span>{selectedRegion || 'Filter by Region'}</span>
        <FaAngleDown size={16} className={`dropdown__icon ${isOpen ? `open` : ``}`} />
      </div>
      {isOpen && (
        <ul className="dropdown__list">
          {REGIONS.map((region) => (
            <li
              className="dropdown__listitem"
              key={region.toLocaleLowerCase()}
              onClick={() => onRegionSelected(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
