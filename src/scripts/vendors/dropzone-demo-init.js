import Dropzone from 'https://cdn.jsdelivr.net/npm/dropzone@5.9.3/+esm';

// Отключаем авто-поиск всех элементов с классом .dropzone
Dropzone.autoDiscover = false;

document.addEventListener("DOMContentLoaded", () => {
    // Инициализация на конкретном элементе
    const myDropzone = new Dropzone("#my-great-dropzone", {
        url: "/file/post", // URL для обработки upload
        paramName: "file", // Имя параметра, под которым файл уходит на сервер
        maxFilesize: 2, // MB
        acceptedFiles: "image/*", // Принимать только изображения
        addRemoveLinks: true, // Показать ссылку для удаления файла из превью
        dictDefaultMessage: "Drop files here to upload", // Текст внутри зоны

        // События (Events)
        init: function() {
            this.on("sending", (file, xhr, formData) => {
                console.log("Sending file...");
            });
            this.on("success", (file, response) => {
                console.log("Successfully uploaded!", response);
            });
            this.on("error", (file, errorMessage) => {
                console.error(errorMessage);
            });
        }
    });
});
