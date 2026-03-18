import * as FilePond from 'https://cdn.jsdelivr.net/npm/filepond@4.30.6/+esm';
import FilePondPluginImagePreview from 'https://cdn.jsdelivr.net/npm/filepond-plugin-image-preview@4.6.11/+esm';
import FilePondPluginFileValidateType from 'https://cdn.jsdelivr.net/npm/filepond-plugin-file-validate-type@1.2.8/+esm';

FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
);

const inputElement = document.querySelector('.my-pond');

const pond = FilePond.create(inputElement, {
    credits: false,
    labelIdle:
        '<div class="attach">' +
            '<div class="attach__icon">' +
                '<i class="icon">attach_file</i> ' +
            '</div>' +
            '<div class="attach__label">' +
                'Click here to upload your Logo, or drag & drop' +
            '</div>' +
        '</div>'
    ,
    acceptedFileTypes: ['image/*'], // Валидация типов
    allowMultiple: true,
    imagePreviewHeight: 170,

    server: {
        url: '/api',
        process: {
            url: '/upload',
            method: 'POST',
            onload: (response) => {
                console.log('Server response:', response);
                return response.key;
            }
        },
        revert: '/undo-upload'
    }
});

pond.on('processfile', (error, file) => {
    if (!error) {
        console.log('File processed successfully:', file.filename);
    }
});
