import * as FilePond from 'https://cdn.jsdelivr.net/npm/filepond@4.30.6/dist/filepond.esm.min.js';
import * as FilePondPluginImagePreview from 'https://cdn.jsdelivr.net/npm/filepond-plugin-image-preview@4.6.12/dist/filepond-plugin-image-preview.esm.min.js';
import * as FilePondPluginFileValidateSize from 'https://cdn.jsdelivr.net/npm/filepond-plugin-file-validate-size@2.2.8/dist/filepond-plugin-file-validate-size.esm.min.js';
import * as FilePondPluginFileValidateType  from 'https://cdn.jsdelivr.net/npm/filepond-plugin-file-validate-type@1.2.8/dist/filepond-plugin-file-validate-type.esm.min.js';

// Регистрация плагинов
FilePond.registerPlugin(
    FilePondPluginImagePreview.default,
    FilePondPluginFileValidateSize.default,
    FilePondPluginFileValidateType.default
);

// Глобальные настройки
FilePond.setOptions({
    credits: false,
    labelIdle:
        '<div class="attach">' +
            '<div class="attach__icon">' +
                '<i class="icon">attach_file</i> ' +
            '</div>' +
            '<div class="attach__label">' +
                '<span class="link link--text-alike">Click here to upload your Logo</span>, or drag & drop' +
            '</div>' +
        '</div>'
    ,
    allowMultiple: false,
    maxFiles: 1,
    maxFileSize: '10MB',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/gif', 'application/pdf'],
});

const input = document.querySelector('[data-ref="filepond-demo"]');
const pond = FilePond.create(input);

/* Events */
pond.on('addfile', (err, file) => {
    if (err) return console.error(err);
    console.log('Added:', file.filename);
});

pond.on('removefile', (err, file) => {
    console.log('Removed:', file.filename);
});
