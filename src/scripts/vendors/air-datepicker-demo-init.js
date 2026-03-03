document.addEventListener('DOMContentLoaded', () => {

    /* If there will be webpack/vite, you can import localeEn like so:
       import localeEn from 'air-datepicker/locale/en';
     */

    const localeEn = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    };

    new AirDatepicker('#date-start', {
        locale: localeEn,
        dateFormat: 'MM/dd/yyyy',
        autoClose: true,
        buttons: ['today', 'clear']
    });
});
