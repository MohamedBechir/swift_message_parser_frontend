import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';

export function HomePage() {
  return (
    <>
      <CustomNavbar />
      <div className=" row d-flex align-items-center justify-content-center mt-5">
        <h1
          className="text-center mt-5"
          style={{ fontWeight: 'bold', color: '#F49D37' }}
        >
          Welcome to Swift Message Parser:
        </h1>
        <h2 className="text-center mt-5">
          Thanks to this Web Application you will be able to send and receive
          SWIFT messages from and to other Microservices.
        </h2>
        <h3 className="text-center mt-5">
          Hope you will enjoy our navigation !
        </h3>
      </div>
      <Footer />
    </>
  );
}
