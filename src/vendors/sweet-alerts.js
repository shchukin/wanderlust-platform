import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js';

/* Use our buttons and headings: */
const AppSwal = Swal.mixin({
    customClass: {
        confirmButton: 'button button--height-44px',
        cancelButton: 'button button--height-44px button--light-gray-outline',
        denyButton: 'button button--height-44px button--red',
        title: 'title title--24px',
    },
    buttonsStyling: false
});

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#sweet-alert-demo').addEventListener('click', () => {

        AppSwal.fire({
            icon: "question",
            title: "Do you want to save the changes?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                AppSwal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                AppSwal.fire("Changes are not saved", "", "info");
            }
        });
    });

});
