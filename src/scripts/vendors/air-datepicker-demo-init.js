import AirDatepicker from 'https://cdn.jsdelivr.net/npm/air-datepicker@3.5.0/+esm';
import localeEn from 'https://cdn.jsdelivr.net/npm/air-datepicker@3.5.0/locale/en/+esm';

new AirDatepicker('#wedding-date', {
    locale: localeEn.default || localeEn,
    dateFormat: 'MM/dd/yyyy',
    autoClose: true,
    buttons: ['today', 'clear']
});
