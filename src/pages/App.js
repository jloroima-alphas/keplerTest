import { store } from '../reducers'
import { Provider } from 'react-redux';
import KeplerGl from 'kepler.gl';
import '../App.css';

function App() {

  const Map = props => {
    return (
      <KeplerGl
        id="foo"
        width={500}
        mapboxApiAccessToken="pk.eyJ1IjoiYXJhbmFqaG9ubnkxMTEiLCJhIjoiY2wwMHhjNHhwMDhybTNmcGhhY2EwbHl3bCJ9.91YTLFJGdV3KJ1lUKd1X6Q"
        height={500}
        store={props.store}
      />
    )
  };


  return (
    <Provider store={store}>
      <div className="App-header">
        <Map store={store} />
      </div>
    </Provider>
  );
}

export default App;
