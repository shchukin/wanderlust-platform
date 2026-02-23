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
    const testBtn = document.querySelector('#sweet-alert-demo');
    if (testBtn) {
        testBtn.addEventListener('click', () => {
            MySwal.fire({
                title: "Do you want to save?",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            });
        });
    }
});
