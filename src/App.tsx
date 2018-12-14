import React, { Component } from "react";
import LeftMenu from './component/leftmenu/leftmenu';
import { IState } from './type/IState';


  class App extends Component<{}, IState> {
    // state: IState = Controller.store.getState();
    // unsubscribe = () => { };
  
    // componentDidMount(): void {
    //   this.unsubscribe = Controller.store.subscribe(() => {
    //     this.setState(Controller.store.getState())
    //   });
    // }
  
    // componentWillUnmount(): void {
    //   this.unsubscribe();
    // }

  render(): JSX.Element {
    return (
      <LeftMenu />
    );
  }
}

export default App;
