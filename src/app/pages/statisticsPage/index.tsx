/* eslint-disable prettier/prettier */
import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import './design.css';
import { MyPieChart } from './pieChart';
import { MyRecentlyReceived } from './recentlyReceivedMessages';

export function StatisticsPage() {
  return (
    <>
      <CustomNavbar />
          <div className="col-md-5 ml-5 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          <MyRecentlyReceived />
          </div>
          <div className="col-md-5 mr-5 ml-5 quarter shadow" style={{ backgroundColor: '#E5E5E5' }}>
          <h3 className="row ml-3 mt-4">Most Pospular Messages:</h3>
          <MyPieChart />  
          </div>
      <Footer />
    </>
  );
}
