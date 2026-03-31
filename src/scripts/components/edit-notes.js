import { refreshExpandableTextareas } from './input.js';

export const editNotes = () => {

    document.addEventListener('click', (event) => {
        if (event.target.closest('.edit-notes__handler .button')) {
            event.preventDefault();
            const $editNotes = event.target.closest('.edit-notes');
            $editNotes.classList.toggle('edit-notes--expanded');

            if ($editNotes.classList.contains('edit-notes--expanded')) {
                $editNotes.querySelector('.edit-notes__handler .icon').textContent = 'remove';
                refreshExpandableTextareas($editNotes);
            } else {
                $editNotes.querySelector('.edit-notes__handler .icon').textContent = 'add';
            }
        }
    });
};
