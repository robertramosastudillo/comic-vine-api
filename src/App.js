import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ComicList from "./components/ComicList";
import ComicDetail from "./components/ComicDetail";
import { ComicContext } from "./context/ComicContext";
import { useState } from "react";

function App() {

const [comicDetail, setComicDetail] = useState("");

  return (
    <ComicContext.Provider
      value={{
        comicDetail,
        setComicDetail,
      }}
    >
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={ComicList} />
            <Route exact path="/comic/:id" component={ComicDetail} />
          </Switch>
        </div>
      </Router>
    </ComicContext.Provider>
  );
}

export default App;
