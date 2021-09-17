/* eslint-disable prettier/prettier */
import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import './design.css';
import { MyPieChart } from './pieChart';

export function StatisticsPage() {
  return (
    <>
      <CustomNavbar />
      <div className="container">
        <div className="col-md-6 quarter shadow ml-3" style={{ backgroundColor: '#E5E5E5' }}>
        <h3 className="ml-3 mt-4">Most Pospular Messages:</h3>
          <MyPieChart />
        </div>
        <div className="col-md-6 quarter" style={{ backgroundColor: 'red' }}>
        </div>
        <div className="col-md-6 quarter" style={{ backgroundColor: 'yellow' }}>
        </div>
        <div className="col-md-6 quarter" style={{ backgroundColor: 'green' }}>
        </div>
      </div>
      <Footer />
    </>
  );
}
