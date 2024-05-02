import Content from 'components/Content'
import Bottombar from 'components/Bottombar'
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='wrapper'>

          <Switch>
          
          </Switch>
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
