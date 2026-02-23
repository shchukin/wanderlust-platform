import { sidebarToggler } from './components/sidebar-toggler.js';
import { nav } from './components/nav.js';
import { create } from './components/create.js';
import { user } from './components/user.js';
import { search } from './components/search.js';
import { sort } from './components/sort.js';
import { input } from './components/input.js';
import { message } from './components/message.js';
import { enter } from './components/enter.js';
import { dropdown } from './components/dropdown.js';
import { copy } from './components/copy.js';

import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js';

document.addEventListener('DOMContentLoaded', () => {
    sidebarToggler();
    nav();
    create();
    user();
    search();
    sort();
    input();
    message();
    enter();
    dropdown();
    copy();
});


const MySwal = Swal.mixin({
    customClass: {
        confirmButton: 'button button--height-44px',
        cancelButton: 'button button--height-44px button--light-gray-outline',
        denyButton: 'button button--height-44px button--red',
        title: 'title title--24px'
    },
    buttonsStyling: false
});

document.addEventListener('DOMContentLoaded', () => {
    MySwal.fire({
        icon: "question",
        title: "Do you want to save the changes?",
        text: "You won't be able to revert this!",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
            MySwal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            MySwal.fire("Changes are not saved", "", "info");
        }
    });
});
