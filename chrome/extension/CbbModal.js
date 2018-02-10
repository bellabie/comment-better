import React, { PropTypes, Component } from "react";
//import style from '../assets/bccModalx.css';

class CbbModal extends Component {

  constructor(props) {
    super(props);
    this.state = {activeButton: "menuAffirm"};
    this.menuSelect = this.menuSelect.bind(this);
  }

  menuSelect(tab, menuButton) {
    this.setState({activeButton: menuButton},() => console.log(this.state));
    // The line above includes a callback which "forces" the state to update
    // without the callback, it may need something like componentDidUpdate()
    var tabs = document.getElementsByClassName("menuTab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.add("deselectTab");
    };

    // this is just to confirm that my branch is working correctly

    console.log(tab);

    switch(menuButton) {
      case "menuAffirm":
        tab.classList.add("selectTab");
        tab.classList.remove("deselectTab");
      break;
      case "menuClarify":
        tab.classList.add("selectTab");
        tab.classList.remove("deselectTab");
      break;
      case "menuRequest":
        tab.classList.add("selectTab");
        tab.classList.remove("deselectTab");
      break;
      default: ;
    }
  }



  /*componentDidUpdate()
  componentWillReceiveProps(nextProps) These may be needed
  menuSelect = "#ddd",
  menuDeselect = "#F6F7F9";
  */

  render() {

    return (
       <div id="cbModal">
        <div id="menu">
          <div className="menuTab selectTab" onClick={(e) => this.menuSelect(e.target,"menuAffirm")}>
            Affirm
          </div>
          <div className="menuTab deselectTab" onClick={(e) => this.menuSelect(e.target,"menuClarify")}>
            Clarify
          </div>
          <div className="menuTab deselectTab" onClick={(e) => this.menuSelect(e.target,"menuRequest")}>
            Request
          </div>
          <div id="menuClear"></div>
        </div>

        <div id="suggestionBox">
          <Suggestions/>
        </div>
      </div>
    );
  }
}

export default CbbModal;


class Suggestions extends Component {
  <div className="suggestion1">I hear your concern about...</div>
  <div className="suggestion2">Good point.</div>
  <div className="suggestion3">I understand your point that...</div>
  <div className="suggestion4">I think we’re both saying...</div>
  <div className="suggestion5">Yes, and...</div>
  <div className="suggestion6">We both seem to care about...</div>


  render() {
    return <div>I'm B</div>;
  }
}

  /*var affirm1 = 'That\'s a good point.',
  affirm2 = 'Yes, and...',
  affirm3 = 'You\'re right.',
  affirm4 = 'I agree with you that...',
  clarify1 = 'How would you define... ?',
  clarify2 = 'What made you aware of this problem?',
  clarify3 = '',
  clarify4 = '',
  request1 = 'What are your thoughts on this article?',
  request2 = 'Want to talk about this in offline?',
  request3 = '',
  request4 = '',
  suggestion1 = affirm1,
  suggestion2 = affirm2,
  suggestion3 = affirm3,
  suggestion4 = affirm4;

  menuAffirm.onclick = function() {
  menuAffirm.style.backgroundColor = menuSelect
  menuClarify.style.backgroundColor = menuDeselect
  menuRequest.style.backgroundColor = menuDeselect},
  menuClarify.onclick = function() {
  menuAffirm.style.backgroundColor = menuDeselect
  menuClarify.style.backgroundColor = menuSelect
  menuRequest.style.backgroundColor = menuDeselect},
  menuRequest.onclick = function() {
  menuAffirm.style.backgroundColor = menuDeselect
  menuClarify.style.backgroundColor = menuDeselect
  menuRequest.style.backgroundColor = menuSelect},
      suggestion1.onclick = function() {

    document.execCommand('copy');
  }*/
