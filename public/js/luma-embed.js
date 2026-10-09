// Loading state for the Luma calendar embed on /events.
// External file (not inline) so it runs under script-src 'self' without a CSP hash.
// Loaded synchronously right after the iframe, so the load listener is attached first.
(function () {
  var wrap = document.getElementById('luma-embed');
  var frame = document.getElementById('luma-embed-iframe');
  if (!wrap || !frame) return;
  wrap.classList.add('is-loading');
  var done = function () {
    wrap.classList.remove('is-loading');
  };
  frame.addEventListener('load', done);
  // Never leave the calendar hidden if the load event is missed or blocked.
  setTimeout(done, 10000);
})();
