document.addEventListener('DOMContentLoaded', function () {
  const folders = document.querySelectorAll('.folder-box');

  folders.forEach(folder => {
      folder.addEventListener('click', function () {
          // Close all folders except the clicked one
          folders.forEach(f => {
              if (f !== folder) {
                  f.classList.remove('open');
              }
          });
          folder.classList.toggle('open');
      });
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', function () {
      const query = searchInput.value.toLowerCase();
      const files = document.querySelectorAll('.file a');
      files.forEach(file => {
          if (file.textContent.toLowerCase().includes(query)) {
              file.style.display = 'block';
          } else {
              file.style.display = 'none';
          }
      });
  });

  // Download All Materials
  const downloadBtn = document.querySelector('.download-all-btn');
  downloadBtn.addEventListener('click', function () {
      alert('Downloading all materials...');
      // Here you would implement the download logic for all files
  });
});
