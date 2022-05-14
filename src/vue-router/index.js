import { install } from "./install";
import createMatcher from "./create-matcher";
import HashHistory from "./history/hashHistory";
import BorwserHistory from "./history/browserHistory";

class VueRouter {
  constructor(options) {
    this.matcher = createMatcher(options.routes || []);
    this.mode = options.mode || "hash";
    switch (this.mode) {
      case "hash":
        this.history = new HashHistory(this);
        break;
      case "history":
        this.history = new BorwserHistory(this);
        break;
    }
    this.beforeHooks = []
  }
  init(app) {
    const history = this.history
    let setupHashListener = ()=>{
      history.setupListener()
    }
    history.transitionTo(history.getCurrentLoaction(),setupHashListener)
    history.listen((route)=>{
      app._route = route
      console.log("🚀 ~ file: index.js ~ line 27 ~ VueRouter ~ history.listen ~ app._route", app._route)
      
    })
  }
  match(location) {
    return this.matcher.match(location)
  }
  push(location) {
    window.location.hash = location
  }
  beforeEach(fn) {
    this.beforeHooks.push(fn)
  }
}

VueRouter.install = install;

export default VueRouter;
