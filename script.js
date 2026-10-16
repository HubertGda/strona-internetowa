document.querySelector('#copy').addEventListener('click', async () => {
  const status = document.querySelector('#status');
  if (location.protocol === 'file:') {
    status.textContent = 'Opublikuj stronę, aby udostępnić jej adres.';
    return;
  }
  try {
    await navigator.clipboard.writeText(location.href.split('#')[0]);
    status.textContent = 'Adres skopiowany.';
  } catch {
    status.textContent = 'Skopiuj adres z paska przeglądarki.';
  }
});
