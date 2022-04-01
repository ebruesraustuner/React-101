//import react and reactdom
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from './ApprovalCard'
//a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                       warning
                    </h4>
                    <p> arre you sure ??</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="sam" time="today at 4:45pm" comment="thats commetn" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail author="jane" time="yesterday at 4:45pm" comment="niceee" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
};

//onthe screeeeenn
ReactDOM.render(<App />, document.querySelector("#root"));
