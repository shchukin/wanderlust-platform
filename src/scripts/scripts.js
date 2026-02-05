import { sidebarToggler } from './components/sidebar-toggler.js';
import { nav } from './components/nav.js';
import { create } from './components/create.js';
import { user } from './components/user.js';
import { search } from './components/search.js';
import { sort } from './components/sort.js';
import { input } from './components/input.js';

document.addEventListener('DOMContentLoaded', () => {
    sidebarToggler();
    nav();
    create();
    user();
    search();
    sort();
    input();
});
