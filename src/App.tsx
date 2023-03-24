// ___React_______________________________________________________________________________________________________________
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// ___Recoil______________________________________________________________________________________________________________
import { RecoilRoot } from 'recoil';
// ___Components__________________________________________________________________________________________________________
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import PageNotFound from './components/pages/PageNotFound';
// ___Styles______________________________________________________________________________________________________________
import GlobalStyles from './GlobalStyles';

// ___Router______________________________________________________________________________________________________________
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Header /> }>
      <Route path="home" element={ <Home /> } />
      <Route path="favorites" element={ <Favorites /> } />
      <Route path="*" element={ <PageNotFound /> } />
    </Route>
  )
)


// ___Component___________________________________________________________________________________________________________
function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <RouterProvider router={ router } />
    </RecoilRoot>
  );
}

export default App;

