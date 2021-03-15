import 'babel-polyfill';
import Navbar from './Navbar';
import Searchbar from "./Searchbar";
import Api from "./Api";
import Hashtag from './Hashtag';

new Navbar();
new Searchbar();
new Api().randomGifs();
new Hashtag();