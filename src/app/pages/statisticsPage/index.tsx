/* eslint-disable prettier/prettier */
import { Footer } from 'app/components/Footer';
import { CustomNavbar } from 'app/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import './design.css';
import { MyPieChart } from './pieChart';
import { useFetchMessagesPerTypeSlice } from './pieChart/slice';
import { selectState } from './pieChart/slice/selectors';
import { MyRecentlyReceived } from './recentlyReceivedMessages';
import { useFetchSentReceivedSlice } from './sentReceived/slice';
import { selectSentReceivedState } from './sentReceived/slice/selectors';

export function StatisticsPage() {
  const { actions } = useFetchMessagesPerTypeSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessagesPerType());
  let messagesPerType = useSelector(selectState);

  const { sentreceivedactions } = useFetchSentReceivedSlice();
  const sentreceiveddispatch = useDispatch();
  sentreceiveddispatch(sentreceivedactions.requestFetchSentReceived());
  let sentReceived = useSelector(selectSentReceivedState);


  let diagramNameTypes = "Diagram: Based On the Most Received Types of Messages"
  let diagramNameLastFive = "Diagram: Based On the last received Messages"

  const COLORS = ['#0088FE', '#00C49F', '#F49D37', '#FF8042', '#fb8585'];
  const COLORS_1 = ['#00C49F', '#F49D37'];
  return (
    
    <div>
 <CustomNavbar />
    <div className="contents ml-5 mr-5">
<div className="col-md-5 mr-4  quarter" style={{ backgroundColor: '#E5E5E5' }}>
<h3 className="row ml-3 mt-4">Most Pospular Messages:</h3>
    <MyPieChart data={messagesPerType} COLORS={COLORS} diagramName={diagramNameTypes} /> 
</div>
<div className="col-md-5 quarter" style={{ backgroundColor: '#E5E5E5' }}> 
<h3 className="row ml-3 mt-4">Received Versus Sent Messages:</h3>
    <MyPieChart data={sentReceived} COLORS={COLORS_1} diagramName={diagramNameLastFive}/>  
</div>
<div className="col-md-5 mt-5 quarter" style={{ backgroundColor: '#E5E5E5' }}><MyRecentlyReceived /></div>
      <Footer />
    </div>
    </div>
  );
}
