import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="container">
      <div className="row justify-content-between">
        <div className='col logo'><a href="#"><img src={require("./img/logo.png")} alt="loding..."/></a></div>
        <div className='col-auto'>
          <ul className='d-flex main_menu align-items-center'>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">MINISTRY</a></li>
              <li><a href="#">SERMONS</a></li>
              <li><a href="#">PAGES</a></li>
              <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;