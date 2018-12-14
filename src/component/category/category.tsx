import React from 'react';
import { ICategory } from '../../type/ICategory';

import "./category.sass";


const Category = (props: ICategory): JSX.Element => (<p className="leftmenu-section-category">{props.name} </p>)

export default Category;