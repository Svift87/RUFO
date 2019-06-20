$(document).ready(function () {
	$('.items-popular').slick({
		slidesToShow: 4,
		speed: 500,
		//autoplay: true,
		//dots:false,
		//fade: true
		//autoplaySpeed: 8000, time between
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});


	// goods item list slider
	$('.goods-img-list').slick({
		slidesToShow: 3,
		speed: 500,
		arrows: false,

	});

	$('.unit-img-list').slick({
		slidesToShow: 4,
		speed: 500,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	// goods item list slider === end
	$('.buy-add-list').slick({
		slidesToShow: 7,
		speed: 500,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	// goods item list slider === end
	$('.partners-list').slick({
		slidesToShow: 5,
		speed: 500,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.slider-simple').slick({
		slidesToShow: 1,
		speed: 500,
		arrows: false,
	});
	//custom nav slider
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	//custom nav slider === end

	//beauty select
	$('.select-beauty').niceSelect();
	//beauty select === end

	//toggle profile

	//toggle profile === end
	$('.goods-profile__el-img').click(function(){
		$(this).closest('.goods-profile__el').find('.sytle-input').click();
	});
	//animate menu-end

	// toggle toolbar boxs
	$('.toolbar-box-head').click(function(){
		$(this).closest('.toolbar-box').toggleClass('toolbar-box--open');
		$(this).closest('.toolbar-box').find('.toolbar-box-cont').slideToggle();
	});
	// toggle toolbar boxs === end

	// srollbar template
	$('.scroll').perfectScrollbar({
		wheelSpeed: 0.2
	});
	// srollbar template === end

	//filter color control
		//lighten color
		var shadeColor = function (color, percent) {

			var R = parseInt(color.substring(1,3),16);
			var G = parseInt(color.substring(3,5),16);
			var B = parseInt(color.substring(5,7),16);

			R = parseInt(R * (100 + percent) / 100);
			G = parseInt(G * (100 + percent) / 100);
			B = parseInt(B * (100 + percent) / 100);

			R = (R<255)?R:255;
			G = (G<255)?G:255;
			B = (B<255)?B:255;

			var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
			var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
			var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

			return "#"+RR+GG+BB;
	};

		//convert rgb - hex
		var rgb2hex =function (rgb) {
				rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				function hex(x) {
						return ("0" + parseInt(x).toString(16)).slice(-2);
				}
				return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		};

		//hover box-shadow
		$('.filter__color-el').mouseover(function(){
			if(!$(this).hasClass('filter__color-el--white')) {
				var currentColor = $(this).css('backgroundColor');
				var lightenColor = shadeColor(rgb2hex(currentColor), -40);
				$(this).css('boxShadow', '0 9px 13px' + lightenColor);
			} else {
				$(this).css('boxShadow', '0 9px 13px #d4c8c8');
			}
		});
		$('.filter__color-el').mouseout(function () {
			$(this).css('boxShadow','none');
		});

		//active color
		$('.filter__color-el').click(function(){
			$(this).toggleClass('filter__color-el--active')
		});

		var removeColor = function(){
			$('.filter__color-el').removeClass('filter__color-el--active')
		}
	//filter color control end

		$(".range").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 10,
        to: 800,
        postfix: " руб"
    });

  //goods change img
  $('.goods-img-list__el, .goods-img-list__el').click(function(){
  	$('.goods-img-list__el').removeClass('goods-img-list__el--active');
  	$(this).addClass('goods-img-list__el--active');
  	var img = $(this).css('background-image');
        img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
    console.log(img);
    $(this).closest('.goods-el-view').find('.goods-el-img').css('background-image','url(' + img + ')');
  });
  //goods change img === end

	//unit change img
  $('.unit-img-list__el, .unit-img-list__el').click(function(){
  	$('.unit-img-list__el').removeClass('unit-img-list__el--active');
  	$(this).addClass('unit-img-list__el--active');
  	var img = $(this).css('background-image');
        img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
    console.log(img);
    $(this).closest('.unit-el-view').find('.unit-el-img').css('background-image','url(' + img + ')');
  });
	//goods change img === end

	// init fancybox
	$('.fancybox').fancybox({
		thumbs: {
			autoStart: true
		},
		buttons: [
			'zoom',
			'close'
		]
	});
	// init fancybox === end

	//unit tabs
	$('.unit-tab-head__el').click(function(){
		$('.unit-tab-head__el').removeClass('unit-tab-head__el--active');
		$(this).addClass('unit-tab-head__el--active');
		var currentTab = $(this).index() + 1;
		$(this).closest('.unit-tab').find('.unit-tab-cont').each(function () {
			if ($(this).index() === currentTab) {
				$(this).addClass('unit-tab-cont--active')
			} else {
				$(this).removeClass('unit-tab-cont--active')
			}
		})
	});
	//unit tabs === end

	// complete tab
	$('.complete-tab__el').click(function(){
		$('.complete-tab__el').removeClass('complete-tab__el--active');
		$(this).addClass('complete-tab__el--active');
		var currentTab = $(this).index() + 1;
		$(this).closest('.complete').find('.complete-tab-cont').each(function () {
			if ($(this).index() === currentTab) {
				$(this).addClass('complete-tab-cont--active')
			} else {
				$(this).removeClass('complete-tab-cont--active')
			}
		})
	});
	// complete tab === end

	//increment field

	$('.item__get').click(function(){
		$(this).closest('.add-btn').addClass('add-btn--active')
	});



	$('.incr__minus.incr--one').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		//count = count < 2 ? 1 : count;
		if(count<1){
			$(this).closest('.add-btn').removeClass('add-btn--active');
			count = 1
		}
		$input.html(count);
	});

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});
	//increment field end
	
	// toggle filter
	$('.list-toggle').click(function(){
		$('.toolbar').slideToggle();
		$(this).toggleClass('list-toggle--active');
	});
	$('.sort-toggle').click(function(){
		$('.sort').slideToggle();
		$(this).toggleClass('sort-toggle--active');
	});
	// toggle filter === end

	slider ('.reviews__slider', '.reviews__prev', '.reviews__next');
	slider ('.product_examples__slider_container', '.product_examples__prev', '.product_examples__next');
    
    function slider (a, b, c) {
        
        let slideIndex = 1,
            slides = document.querySelectorAll(a),
            prev = document.querySelector(b),
            next = document.querySelector(c);
        if (slides.length > 0) {    
            let showSlides = function  (n) {

                if (n > slides.length) {
                    slideIndex = 1;
                }

                if (n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach((item) => item.style.display = 'none');
                
                slides[slideIndex - 1].style.display = 'flex';
            }

            showSlides(slideIndex);

            let plusSlides = function (n) {
                showSlides(slideIndex += n);
            }

            prev.addEventListener('click', function() {
                plusSlides(-1);
            });

            
            next.addEventListener('click', function() {
                plusSlides(1);
            });
        }        
	} 
	
	function hiddenText () {
		let hiddenBtn = document.querySelector('.hidden__btn'),
			textHidden = document.querySelector('.text__hidden');
		if (hiddenBtn != null) {
			hiddenBtn.addEventListener('click', function () {
				textHidden.style.display = 'block';
				hiddenBtn.style.display = 'none';
			})
		}
		
	}

	hiddenText ()

	
	 // Примеры объекта

	function workExamples (a, b) {
        let workexamplesBigImage = document.querySelectorAll(a),
            workexamplesSmallImage = document.querySelectorAll(b),
            shadowBlock = document.querySelectorAll('.shadow__block');
        if (workexamplesBigImage != undefined) {            
            for (let i = 0; workexamplesSmallImage.length > i; i++) {
                for (let a = 0; workexamplesBigImage.length > a; a++) {
                    workexamplesBigImage[a].src = workexamplesSmallImage[0].src;
                    shadowBlock[0].style.display = 'none';
                    
                    workexamplesSmallImage[i].addEventListener('click', function(){
                        for (let c = 0; shadowBlock.length > c; c++) {
                            shadowBlock[c].style.display = 'block';
                        }
                        workexamplesBigImage[a].src = workexamplesSmallImage[i].src;
                        shadowBlock[i].style.display = 'none';
                    }) 
                }                  
            }
        }        
	}
	workExamples ('.product_examples__big_image', '.workexamples__small_image');
});