'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var leftButtonStyle = {
  width: "60px",
  borderRadius: "4px 0px 0px 4px"
};

var middleButtonStyle = {
  width: "60px",
  borderRadius: "0px 0px 0px 0px"
};

var rightButtonStyle = {
  width: "60px",
  borderRadius: "0px 4px 4px 0px"
};

function CounterUsingReason(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setTimer = match[1];
  var timer = match[0];
  var match$1 = React.useState((function () {
          return ;
        }));
  var setIntervalId = match$1[1];
  var intervalId = match$1[0];
  var match$2 = React.useState((function () {
          return true;
        }));
  var setStartButton = match$2[1];
  var isStartBtnEnabled = match$2[0];
  var match$3 = React.useState((function () {
          return false;
        }));
  var setPauseButton = match$3[1];
  var isPauseBtnEnabled = match$3[0];
  var match$4 = React.useState((function () {
          return false;
        }));
  var setResetButton = match$4[1];
  var isResetBtnEnabled = match$4[0];
  var buttons = function (param) {
    return React.createElement("div", undefined, React.createElement("button", {
                    style: leftButtonStyle,
                    disabled: !isStartBtnEnabled,
                    onClick: (function (_event) {
                        var id = setInterval((function (param) {
                                return Curry._1(setTimer, (function (prevTimer) {
                                              return prevTimer + 1 | 0;
                                            }));
                              }), 1000);
                        Curry._1(setIntervalId, (function (param) {
                                return Caml_option.some(id);
                              }));
                        console.log(intervalId);
                        Curry._1(setStartButton, (function (param) {
                                return false;
                              }));
                        Curry._1(setPauseButton, (function (param) {
                                return true;
                              }));
                        return Curry._1(setResetButton, (function (param) {
                                      return true;
                                    }));
                      })
                  }, "Start"), React.createElement("button", {
                    style: middleButtonStyle,
                    disabled: !isPauseBtnEnabled,
                    onClick: (function (_event) {
                        if (intervalId !== undefined) {
                          clearInterval(Caml_option.valFromOption(intervalId));
                        } else {
                          throw Caml_builtin_exceptions.not_found;
                        }
                        Curry._1(setStartButton, (function (param) {
                                return true;
                              }));
                        Curry._1(setPauseButton, (function (param) {
                                return false;
                              }));
                        return Curry._1(setResetButton, (function (param) {
                                      return true;
                                    }));
                      })
                  }, "Pause"), React.createElement("button", {
                    style: rightButtonStyle,
                    disabled: !isResetBtnEnabled,
                    onClick: (function (_event) {
                        if (intervalId !== undefined) {
                          clearInterval(Caml_option.valFromOption(intervalId));
                        } else {
                          throw Caml_builtin_exceptions.not_found;
                        }
                        Curry._1(setTimer, (function (param) {
                                return 0;
                              }));
                        Curry._1(setStartButton, (function (param) {
                                return true;
                              }));
                        Curry._1(setPauseButton, (function (param) {
                                return false;
                              }));
                        return Curry._1(setResetButton, (function (param) {
                                      return false;
                                    }));
                      })
                  }, "Reset"));
  };
  return React.createElement("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }
            }, React.createElement("div", undefined, React.createElement("span", undefined, String(timer / 60 | 0)), React.createElement("span", undefined, " min "), React.createElement("span", undefined, String(timer % 60)), React.createElement("span", undefined, " sec ")), buttons(/* () */0));
}

var make = CounterUsingReason;

exports.leftButtonStyle = leftButtonStyle;
exports.middleButtonStyle = middleButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.make = make;
/* react Not a pure module */
