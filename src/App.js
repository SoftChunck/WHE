import {Collections,ExploreAll,Footer,Header,Navbar,Roadmap,Speciality,WheClub} from './containers';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Speciality></Speciality>
        <WheClub></WheClub>
        <Collections></Collections>
        <Roadmap></Roadmap>
        <ExploreAll></ExploreAll>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
