const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  console.log(input);

  const length = input.length;
  const blurValue = 40 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
