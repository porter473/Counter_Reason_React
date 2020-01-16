// This is the ReactJS documentation's useReducer example, directly ported over
// https://reactjs.org/docs/hooks-reference.html#usereducer

// A little extra we've put, because the ReactJS example has no styling
let leftButtonStyle = ReactDOMRe.Style.make(~borderRadius="4px 0px 0px 4px", ~width="60px", ());
let middleButtonStyle = ReactDOMRe.Style.make(~borderRadius="0px 0px 0px 0px", ~width="60px", ());
let rightButtonStyle = ReactDOMRe.Style.make(~borderRadius="0px 4px 4px 0px", ~width="60px", ());

[@react.component]
let make = () => {
  let (timer, setTimer) = React.useState(() => 0);
  let (intervalId, setIntervalId) =  React.useState(() => None);
  let (isStartBtnEnabled, setStartButton) = React.useState(() => true);
  let (isPauseBtnEnabled, setPauseButton) = React.useState(() => false);
  let (isResetBtnEnabled, setResetButton) = React.useState(() => false);
  
  let handleStart = (_)=> {
    let id =
      Js.Global.setInterval(
        () => setTimer(prevTimer=> prevTimer+1),
        1000,
      );
    setIntervalId(_=> Some(id));
    Js.log(intervalId);
    setStartButton(_ =>false);
    setPauseButton(_ =>true);
    setResetButton(_ =>true);
  };

  let handlePause = (_)=> {
    switch(intervalId) {
      | None => raise(Not_found)
      | Some(intervalId) => Js.Global.clearInterval(intervalId)
    } 
    setStartButton(_ =>true);
    setPauseButton(_ =>false);
    setResetButton(_ =>true);
  };

  let handleReset = (_)=> {
    switch(intervalId) {
      | None => raise(Not_found)
      | Some(intervalId) => Js.Global.clearInterval(intervalId)
    };
    setTimer(_=> 0);
    setStartButton(_ =>true);
    setPauseButton(_ =>false);
    setResetButton(_ =>false);
  };

  let buttons = () => {
    <div>
      <button style=leftButtonStyle disabled={!isStartBtnEnabled} onClick={_event => handleStart()}>
        {React.string("Start")}
      </button>
      <button style=middleButtonStyle disabled={!isPauseBtnEnabled} onClick={_event => handlePause()}>
        {React.string("Pause")}
      </button>
      <button style=rightButtonStyle disabled={!isResetBtnEnabled} onClick={_event => handleReset()}>
        {React.string("Reset")}
      </button>
    </div>
  };
 
  <div
    style={ReactDOMRe.Style.make(~display="flex", ~alignItems="center", ~justifyContent="space-between", ())}>
    <div>
      <span>{React.string(string_of_int(timer/60))}</span>
      <span>{React.string(" min ")}</span>
      <span>{React.string(string_of_int(timer mod 60))}</span>
      <span>{React.string(" sec ")}</span>
    </div>
      {buttons()}
  </div>;
};
