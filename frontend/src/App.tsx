// Routes
import { Routes, Route } from "react-router";

// Style
import "./App.css";

// Composants
import "./components/Header";
import RecentAds from "./components/RecentAds";
// import AdsByCategoryPage from "./pages/AdsByCategoryPage";
import AdsByCategory from "./components/AdsByCategory";

// Pages
import Layout from "./pages/Layout";
import About from "./pages/About";
import AdDetails from "./pages/AdDetails";
import NewAdForm from "./pages/NewAd";
import CategoryBo from "./pages/CategoryBo";
import { ToastContainer } from "react-toastify";
import SearchResult from "./pages/SearchResult";

const App = function () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RecentAds />} />
        <Route path="about" element={<About />} />
        <Route path="ad/:id" element={<AdDetails />} />
        <Route path="ad/new" element={<NewAdForm />} />
        <Route path="ads/category/:categoryId" element={<AdsByCategory />} />
        <Route path="category" element={<CategoryBo />} />
        <Route path="search" element={<SearchResult />} />
      </Route>
    </Routes>
    <ToastContainer />
    </>
  );
};

export default App;