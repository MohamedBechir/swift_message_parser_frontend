/* eslint-disable prettier/prettier */
import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import './design.css';
import { MyPieChart } from './pieChart';

export function StatisticsPage() {
  return (
    <>
      <CustomNavbar />
        <div className="container align-items-center">
          <div className="col-md-6 ml-5 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          <h3 className="ml-3 mt-4">Most Pospular Messages:</h3>
            <MyPieChart />  
          </div>
          <div className="col-md-5 ml-2 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          </div>
          <div className="col-md-6 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          </div>
          <div className="col-md-6 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          </div>
        </div>
      <Footer />
    </>
  );
}
