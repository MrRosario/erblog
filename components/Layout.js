
 import Navbar from './Header';
 import Footer from './Footer';

 const Layout = ({ children }) => {

  return (
    <div>
       <Navbar />
        { children }
       <Footer />
    </div>
  )
}

export default Layout;