export const images = () => {
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');
  const workSection = document.querySelector('.works');

  imgPopup.classList.add('popup_photo');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }
    if (target && target.matches('div.popup_photo')) {
      imgPopup.style.display = 'none';
    }
  });
}; 