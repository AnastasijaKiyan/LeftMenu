import React from "react";
import { ICategory } from "../../type/ICategory";
import Category from "../category/category";
import { condition, store } from '../../reducer/reducer'
import { IState } from "../../type/IState";

const Section = (): JSX.Element => {
  const state: IState = store.getState();
  return (
    <section>
      {
        state.categories.map(
          (category): JSX.Element => {
            return (
              <Category key={category.id} name={category.name} id={category.id} />
            )
          }
        )
      }
    </section>
  );
};

export default Section;
