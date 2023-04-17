const randomAngle = Math.floor(Math.random() * 360);

window.addEventListener('load', function() {
  var loading = document.getElementById('loading');
  loading.style.display = 'none';
});

const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});

document.body.appendChild(cursor);


