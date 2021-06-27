import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"
import "../css/App.css"
import ToolBar from "./ToolBar"
import ToolBarButton from "./ToolBarButton"
import Calendar from "./Calendar"

class App extends Component{
  constructor(){
    super()

    this.state = {

    }
  } 

  render() {
  
    return (
      <div className="white-text">
        <header>
          <div className="row">
            <ToolBar />
            <Calendar />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
