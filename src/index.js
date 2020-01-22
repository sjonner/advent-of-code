import glob from 'glob';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';

import './styles.css';
// import Day2 from './day02/Day2';

const days = glob
  .sync('src/day*/Day*.jsx')
  .map(path => path.replace('src/', './'));

const DayLoader = slug =>
  lazy(() => import(`./day${slug.padStart(2, '0')}/Day${slug}.jsx`));

const Day = ({ match }) => {
  const { slug } = useParams();
  const Comp = DayLoader(slug);

  return <Comp />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="Navigation">
          {days.map(path => {
            const day = Number(/\d+/.exec(path)[0]);
            return (
              <NavLink key={day} to={`/day/${day}`}>
                {day}
              </NavLink>
            );
          })}
        </nav>

        <div className="Content">
          <Suspense fallback={'loading...'}>
            <Switch>
              <Route path="/day/:slug" component={Day} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
