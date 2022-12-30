import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!!</h4>
          Are you sure yo want to continue
        </div>
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetails
            author=" Maxwell john"
            timeAgo="Today at 6:00pm"
            text="Learnt alot thanks"
            image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetails
            author="juliana Gothar"
            timeAgo="Today at 8:09pm"
            text="Interestibg piece"
            image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetails
            author="white Broom"
            timeAgo="Today at 7:31pm"
            text="Awesome write up bro"
            image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
