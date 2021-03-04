import React from "react";
import { Route, Link } from "react-router-dom";

export default function Rooms({ match }) {
  return (
    <div>
      <h2>Here is rooms</h2>
      <Link to={`${match.url}/blueRoom`}>blue rooms</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>green rooms</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h3>select rooms</h3>} />
    </div>
  );
}

function Room({ match }) {
  return <h2>{`${match.params.roomId} selected room`}</h2>;
}
