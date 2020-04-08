module.exports = {
  youtube: (id) => {
    return `<figure class="video"><iframe width="784" height="441" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>`;
  },
  vimeo: (id) => {
    return `<figure class="video"><iframe width="784" height="441" src="https://player.vimeo.com/video/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>`;
  },
  giphy: (id) => {
    const cloudinaryPrefix = 'https://res.cloudinary.com/nho/image/fetch';
    const giphyImage = `https://media.giphy.com/media/${id}/giphy.gif`;
    webmSource = `<source src="${cloudinaryPrefix}/f_webm/${giphyImage}" type="video/webm">`;
    mp4Source = `<source src="${cloudinaryPrefix}/f_mp4/${giphyImage}" type="video/mp4">`;
    posterUrl = `${cloudinaryPrefix}/f_jpg/${giphyImage}`;
    fallback = `<p>Your browser doesn't support video. See <a href="${giphyImage}">the animated GIF</a>.</p>`;
    // videoTag = "<video controls loop muted playsinline preload=\"auto\" crossorigin=\"anonymous\" poster=\"#{posterUrl}\">#{webmSource}#{mp4Source}#{fallback}</video>"
    videoTag = `<video controls loop muted playsinline preload="auto" crossorigin="anonymous">${webmSource}${mp4Source}${fallback}</video>`;

    return `<div class="giphy">${videoTag}</div>`;
  },
};
