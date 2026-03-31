export const youtubePreview = () => {
    const $previews = document.querySelectorAll('.youtube-preview');
    if (!$previews.length) {
        return;
    }

    $previews.forEach((preview) => {
        const $handler = preview.querySelector('.youtube-preview__handler');

        $handler.addEventListener('click', (event) => {

            const url = preview.getAttribute('data-yt-url');

            let iframeUrl = url;

            try {
                const urlObject = new URL(url, window.location.href);
                urlObject.searchParams.set('autoplay', '1');
                urlObject.searchParams.set('mute', '1');
                urlObject.searchParams.set('playsinline', '1');
                iframeUrl = urlObject.toString();
            } catch (error) {
                return;
            }

            const iframe = document.createElement('iframe');
            iframe.className = 'youtube-preview__iframe';
            iframe.src = iframeUrl;
            iframe.title = 'YouTube video player';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;

            $handler.remove();
            preview.appendChild(iframe);
        });
    });
};
