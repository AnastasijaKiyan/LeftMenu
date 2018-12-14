import React from "react";
import { IItem } from "../../type/IItem";
import { ICategory } from '../../type/ICategory';
import List from "../list/list";
import datacategorys from "../../data/datacategory";
import { ISection } from '../../type/ISection';
// import { IState } from '';

// const Section = (props?: ISection): JSX.Element | null => {
const Section = (): JSX.Element => {
  return (
    <section>
{/* 
      {datacategorys.map(
        (category: ICategory): JSX.Element => {
          return (
            <List
              key={category.id}
              category={category.name}
              item={this.state.item.filter(
                (item: IItem) => item.field === category.id
              )}
            />
          );
        }
      )} */}
    </section>
  );
};

export default Section;
