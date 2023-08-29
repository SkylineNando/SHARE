
document.addEventListener('DOMContentLoaded', function() {
  const shareButton = document.querySelector('.share-button');
  const shareMenu = document.querySelector('.share-menu');
  
  shareButton.addEventListener('click', function(event) {
    event.stopPropagation();
    shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!shareButton.contains(event.target)) {
      shareMenu.style.display = 'none';
    }
  });

  const currentPageUrl = window.location.href;
  const shareLinks = document.querySelectorAll('.share-menu a');

  shareLinks.forEach(link => {
    link.href = getShareLink(link.className, currentPageUrl);
  });

  function getShareLink(socialMedia, url) {
    switch (socialMedia) {
      case 'share-facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      case 'share-twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
      case 'share-linkedin':
        return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
      default:
        return '#';
    }
  }
});
