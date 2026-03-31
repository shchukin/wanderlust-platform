export const youtubePreview = () => {
    const previews = document.querySelectorAll('.youtube-preview');
    if (!previews.length) return;

    previews.forEach((preview) => {
        const handler = preview.querySelector('.youtube-preview__handler');
        if (!handler) return;

        handler.addEventListener('click', (event) => {
            event.preventDefault();

            if (preview.querySelector('iframe')) return;

            const url = preview.getAttribute('data-yt-url');
            if (!url) return;

            const iframe = document.createElement('iframe');
            iframe.className = 'youtube-preview__iframe';
            iframe.src = url;
            iframe.title = 'YouTube video player';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;

            handler.remove();
            preview.appendChild(iframe);
        });
    });
};
