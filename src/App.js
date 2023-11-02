import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About"

//layouts
import RootLayout from "./pages/layouts/RootLayout";
import Help from "./pages/layouts/Help";
import Faq from "./pages/layouts/Faq";
import ContactUs from "./pages/layouts/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
