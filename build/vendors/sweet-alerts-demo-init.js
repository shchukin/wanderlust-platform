document.addEventListener('DOMContentLoaded', () => {

    if (!window.Swal) {
        return;
    }

    const MySwal = Swal.mixin({
        customClass: {
            confirmButton: 'button button--height-44px',
            cancelButton: 'button button--height-44px button--light-gray-outline',
            denyButton: 'button button--height-44px button--red',
            title: 'title title--24px'
        },
        buttonsStyling: false
    });

    const alertBtn = document.querySelector('#sweet-alert-demo');
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            MySwal.fire({
                title: "Do you want to save the changes?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: "Don't save",
                cancelButtonText: "Cancel"
            });
        });
    }
});
