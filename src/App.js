import './App.css';
import NavbarEKB from "./main/navbar/NavbarEKB";
import FooterEKB from "./main/footer/FooterEKB";
import CategoriesEKB from "./main/categories/CategoriesEKB";
import SearchEKB from "./main/search/SearchEKB";

function App() {
  return (
      <>
        <NavbarEKB />
        <SearchEKB />
        <CategoriesEKB />
        <FooterEKB />
      </>
  );
}

export default App;
