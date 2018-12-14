import React, { createElement } from 'react';
import "./title.sass";

const Title = (): JSX.Element | null => {
    
    return (
        <section className="leftmenu-title">
            <img className="leftmenu-title-logo" src="logo.png"/>
            <div className="leftmenu-title-text">
            ADVERTISUNG MODULE
            </div>
        </section>
    )
}

export default Title;