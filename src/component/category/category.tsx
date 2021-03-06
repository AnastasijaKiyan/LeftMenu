import React, { Component } from 'react';
import "./category.sass";
import List from '../list/list';
import { IState } from '../../type/IState';
import * as Reducer from '../../reducer/reducer'

import './category.sass';


interface IProps {
    id: number,
    name: string
}


export default class Category extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    press(id: number, e: React.MouseEvent<HTMLElement>) {
        if (Reducer.condition.selectedCategoryId != id) {
            Reducer.condition.selectedCategoryId = id;
        } else {
            Reducer.condition.selectedCategoryId = null;
        }
        const action = { type: "setSelectedCategotyId" };
        Reducer.store.dispatch(action);
    }

    render() {
        return (
            <section className="leftmenu-category">
                <div onClick={(e) => this.press(this.props.id, e)}>
                <div className="leftmenu-category-image" />
                    <h1 className="leftmenu-category-title" >
                        {this.props.name}
                    </h1>
                </div>
                <List
                    key={this.props.id}
                    categoryId={this.props.id}
                />
            </section>
        )
    }
}