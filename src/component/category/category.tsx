import React, { Component } from 'react';
import "./category.sass";
import List from '../list/list';
import { IState } from '../../type/IState';
import * as Reducer from '../../reducer/reducer'


interface IProps {
    id: number,
    name: string
}


class Category extends React.Component<IProps, IState> {
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
            <section className="category">
                <h1 className="title" onClick={(e) => this.press(this.props.id, e)}>
                    {this.props.name}
                </h1>
                <List
                    key={this.props.id}
                    categoryId={this.props.id}
                />
            </section>
        )
    }
}

export default Category;