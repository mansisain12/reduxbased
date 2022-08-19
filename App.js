import React from "react";
import Mainscreen from "./src/components/screens/main";
import store from "./src/store/store";
import { Provider } from "react-redux";

const App = () => {
  return(
    <Provider store={store}>
      <Mainscreen />
    </Provider>
  )
}
export default App;