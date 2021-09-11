/**
 * Messagess Page
 */

import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';

export function MessagePage() {
  return (
    <>
      <div className="mb-5">
        <CustomNavbar />
      </div>
      <div className="mt-5 d-flex justify-content-center"></div>
      <Footer />
    </>
  );
}
