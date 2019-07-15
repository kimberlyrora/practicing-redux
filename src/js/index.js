import store from '../store/index';
import { action } from '../actions/Action'

window.store = store;
window.addArticle =  action;