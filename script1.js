function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');
    line.style.left = `${Math.random() * 100}%`;
    line.style.backgroundColor = getRandomColor();
    line.style.height = `${Math.random() * 80 + 20}vh`; // Set random line height in viewport height units
    line.style.animationDuration = `${Math.random() * 7 + 1}s`; // Set random animation duration
    document.querySelector('.background-lines').appendChild(line);
  }

  function createLines() {
    for (let i = 0; i < 100; i++) {
      createLine();
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createLines();
