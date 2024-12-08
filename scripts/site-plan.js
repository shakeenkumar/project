// JavaScript for toggling the tips section
document.getElementById('toggleBtn').addEventListener('click', function () {
    const tipsSection = document.getElementById('tipsSection');
    if (tipsSection.style.display === 'none') {
      tipsSection.style.display = 'block';
      this.textContent = 'Show Less Tips';
    } else {
      tipsSection.style.display = 'none';
      this.textContent = 'Show More Tips';
    }
  });
  