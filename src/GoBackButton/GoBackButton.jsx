import backIco from '../img/back-ico.svg';

function GoBackButton() {
    const goBackHandler = () => {
        window.history.back();
      };
  return (
    <button className="Secondary-button" onClick={goBackHandler}> <img width="25px" src={backIco} style={{marginRight: "10px" }}/> Go Back</button>
  );
}

export default GoBackButton;