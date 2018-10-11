// onmouseover="image1.src='images/image1_2.jpg'" onmouseout="image1.src='images/image1.jpg'"

image1.addEventListener('mouseover', function(){
  image1.src='images/image1_2.jpg';
});

image1.addEventListener('mouseout', function(){
  image1.src='images/image1.jpg';
});
