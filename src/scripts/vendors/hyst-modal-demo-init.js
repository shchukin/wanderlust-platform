import { refreshExpandableTextareas } from '../components/input.js';

new HystModal({
    linkAttributeName: "data-hystmodal",
    beforeOpen: (modal) => {
        const root = modal?.openedWindow || modal?.modal || document;
        requestAnimationFrame(() => {
            refreshExpandableTextareas(root);
        });
    },
});
