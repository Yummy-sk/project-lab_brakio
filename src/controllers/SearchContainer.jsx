import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
import SideBar from './SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from './ContentContainer';
import { setKeyword } from '../../Modules/keyword';
import { initCardData } from '../../Modules/cardData';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { closeToggle, openToggle } from '../../Modules/toggle';

const NavBar = React.memo(() => {
    const { isToggle } = useSelector(state => state.toggle);
    const [input, setInput] = useState('');

    const handleKeyword = async e => {
        e.preventDefault();
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    return (
        <div className="nav-wrapper">
            <div className="menu-container">
                <form className="search-form" onSubmit={e => handleKeyword(e)}>
                    <input type="text" className="keyword-input" placeholder="키워드를 입력해주세요" onChange={e => onChange(e)} value={input} />
                </form>
            </div>

            <div id={isToggle ? 'content-wrapper' : 'content-wrapper content-wrapper-disabled'}>
                <ContentContainer />
            </div>
        </div>
    );
});

export default NavBar;
