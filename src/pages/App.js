import React from "react";
import { connect } from "react-redux";
import KeplerGl from "kepler.gl";
import store from "../store/store";
function App(props) {
  return (
    <KeplerGl
      id="map"
      width={1200}
      mapboxApiAccessToken="pk.eyJ1IjoiYXJhbmFqaG9ubnkxMTEiLCJhIjoiY2wwMHhjNHhwMDhybTNmcGhhY2EwbHl3bCJ9.91YTLFJGdV3KJ1lUKd1X6Q"
      height={800}
      store={store}
      getState={(state) => state.demo.keplerGl}
    />
  );
}

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
