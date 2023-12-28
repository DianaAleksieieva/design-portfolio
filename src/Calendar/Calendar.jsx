import './Calendar.css';
import '../App.css';

function Calendar() {
  return (
    <section className="Calendar">
      <div className="Container">
        
        <h2 className="Calendar-header">Wall calendar design  </h2>
        <div className='Calendar-img-wrap'>
          <img
            className="Calendar-img"
            alt="Calendar example"
            src={require('../img/calendar-1.jpg')}
          ></img>
          <img
            className="Calendar-img-2"
            alt="Calendar example"
            src={require('../img/calendar-2.jpg')}
          ></img>
         
       </div>
      </div>
    </section>
  );
}

export default Calendar;
