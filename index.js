import { createStore } from "https://unpkg.com/redux@4.0.5/es/redux.mjs";
const BUTTON_CLICKED = "BUTTON_CLICKED";
const DIV_VISIBLE = "DIV_VISIBLE";
const initialState = {
    buttonClicked: "no",
    divVisible: "no"
}
function rootReducer(state = initialState,action) {
    switch(action.type) {
        case BUTTON_CLICKED:
            return {...state, buttonClicked: 'yes'}
        case DIV_VISIBLE:
            return Object.assign({},state,{divVisible: 'yes'})
        default:
            return state
    }
}
function buttonClicked(payload) {
    return {
      type: BUTTON_CLICKED,
      payload
    };
  }
  function divVisible() {
    return {
      type: DIV_VISIBLE
    };
  }
const store = createStore(rootReducer);
const button = document.getElementById("my-button");
button.addEventListener('click', function() {
    store.dispatch(buttonClicked(this));
    store.dispatch(divVisible());
})
store.subscribe(function(){
    if (store.getState().divVisible === "yes") {
        const div = document.getElementById("my-div");
        div.style.display = "block";
    }
})
