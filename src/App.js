import Main from './components/Main'
import { Provider } from 'react-redux';
import storeConfigure from './storemini/configureStore';
const store=storeConfigure();
function App() {
  return (
    <Provider store={store}>
    <Main/>
    </Provider>
  );
}
export default App;

