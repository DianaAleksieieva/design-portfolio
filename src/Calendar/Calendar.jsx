import './Calendar.css';
import '../App.css';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function Calendar() {
  return (
    <section className="Calendar">
      <div className="Container">
      <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        <div className="Calendar-content">
        <h2 className="Calendar-header">Wall calendar design  </h2>
        <div className='Calendar-img-wrap'>
          <img
            className="Calendar-cover-img"
            alt="Calendar example"
            src={('../img/calendar-1.jpg')}
          ></img>
          <img
            className="Calendar-img"
            alt="Calendar example"
            src={('../img/calendar-2.jpg')}
          ></img>
         </div>
       </div>
      </div>
    </section>
  );
}

export default Calendar;
