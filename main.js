boxes = document.querySelectorAll('input[type="checkbox"]');

for (i=0;i<boxes.length;i++) {
  boxes[i].addEventListener('change', function (e) {

    if (this.checked) {
      this.parentNode.className += " checked";
    } else {
      this.parentNode.className = this.parentNode.className.replace( /(?:^|\s)checked(?!\S)/g, '');
    }
  });
};
