import Navigation from "./app/navigation/navigation";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
