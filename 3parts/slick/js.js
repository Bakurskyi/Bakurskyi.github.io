$('.sl').slick({
	speed: 1000,
	slidesToShow: 2,
	arrows: true,
	
	responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: false,
        
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    
  ]
});