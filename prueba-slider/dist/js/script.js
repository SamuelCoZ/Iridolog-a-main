$(document).ready(function () {
  $('.scroll-up').click(function () {
    $('html, body').animate({
      scrollTop: $('.container-in').offset().top
    }, 1000);
  });
  $('.scroll-down').click(function () {
    $('html, body').animate({
      scrollTop: $('.slider-shown').offset().top
    }, 1000);
  });
});

$(document).ready(function () {
  function getSliderTopPosition() {
    if (window.innerWidth <= 550) {
      return $('.container').offset().top;
    } else {
      return $('.slider-shown').offset().top;
    }
  }

  $(window).on('resize', function () {
    sliderTop = getSliderTopPosition();
  });


  function toggleSliderButtons() {
    let scrollPosition = $(window).scrollTop();
    let sliderTop = getSliderTopPosition();

    if (scrollPosition >= sliderTop) {
      $('.slideshow .slick-dots li button').css('display', 'block').fadeIn();
    } else {
      $('.slideshow .slick-dots li button').css('display', 'none').fadeOut();
    }
  }

  
  toggleSliderButtons();


  $(window).on('scroll', function () {
    toggleSliderButtons();
  });
});







let $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
}).on("mousewheel", function (event) {
  event.preventDefault();
  if (event.deltaX > 0 || event.deltaY < 0) {
    $(this).slick('slickNext');
  } else if (event.deltaX < 0 || event.deltaY > 0) {
    $(this).slick('slickPrev');
  };
}).on('mousedown touchstart', function () {
  dragging = true;
  tracking = $('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[5]);
  rightTracking = $('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function () {
  if (dragging) {
    newTracking = $('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
  }
}).on('mouseleave touchend mouseup', function () {
  dragging = false;
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

const openModal = document.querySelector('.container-in');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-icon');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});

$(window).on('mousemove', function (e) {
  $('.cursor').css({
    top: e.pageY + 'px',
    left: e.pageX + 'px',
  })
});


$(function () {

  let SliderModule = (function () {
    let pb = {};
    pb.el = $('#slider');
    pb.items = {
      panels: pb.el.find('.slider-wrapper > li'),
    }


    let SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length;


    pb.init = function (settings) {
      this.settings = settings || { duration: 8000 };
      let items = this.items,
        lengthPanels = items.panels.length,
        output = '';


      for (let i = 0; i < lengthPanels; i++) {
        if (i == 0) {
          output += '<li class="active"></li>';
        } else {
          output += '<li></li>';
        }
      }

      $('#control-buttons').html(output);


      activateSlider();

      $('#control-buttons').on('click', 'li', function (e) {
        let $this = $(this);
        if (!(currentSlider === $this.index())) {
          changePanel($this.index());
        }
      });

    }


    let activateSlider = function () {
      SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
    }


    pb.startSlider = function () {
      let items = pb.items,
        controls = $('#control-buttons li');

      if (nextSlider >= lengthSlider) {
        nextSlider = 0;
        currentSlider = lengthSlider - 1;
      }

      controls.removeClass('active').eq(nextSlider).addClass('active');
      items.panels.eq(currentSlider).fadeOut('slow');
      items.panels.eq(nextSlider).fadeIn('slow');

      
      currentSlider = nextSlider;
      nextSlider += 1;
    }


    let changePanel = function (id) {
      clearInterval(SliderInterval);
      let items = pb.items,
        controls = $('#control-buttons li');

      if (id >= lengthSlider) {
        id = 0;
      } else if (id < 0) {
        id = lengthSlider - 1;
      }

      controls.removeClass('active').eq(id).addClass('active');
      items.panels.eq(currentSlider).fadeOut('slow');
      items.panels.eq(id).fadeIn('slow');


      currentSlider = id;
      nextSlider = id + 1;

      activateSlider();
    }

    return pb;
  }());

  SliderModule.init({ duration: 4000 });

});




$(document).ready(function () {

  /****************************** 
      Efecto Submenu Productos 
  ******************************/
  $("#btn-productos").click(function (e) {
      e.preventDefault();
      $(".contenedor-submenu-productos").toggleClass("active");
      $(".btn-productos").toggleClass("active");
      $(".contenedor-submenu-quienes-somos").removeClass("active");
      $(".btn-quienes-somos").removeClass("active");

      if ($(".contenedor-submenu-productos").hasClass("active")) {
          $(".contenedor-modal").addClass("active");
      } else {
          $(".contenedor-modal").removeClass("active");
      }

      $(".contenedor-modal").click(function () {
          $(".contenedor-submenu-productos").removeClass("active");
          $(".contenedor-modal").removeClass("active");
          $(".btn-productos").removeClass("active");
      });
  });

  /***************************
      Btn Cerrar Modal
  ***************************/
  $("#btn-cerrar-modal").click(function (e) {
      e.preventDefault();
      $(".contenedor-modal").removeClass("active");
  });

  /*********************
      Menu Responsive
  *********************/
  $("#btn-menu").click(function (e) {
      e.preventDefault();
      // Toggle de la clase para abrir/cerrar el menú
      $(".contenedor-menu-responsive").toggleClass("active");

      // Cambiar el ícono del botón de menú
      $(".btn-menu i").toggleClass("fa-bars fa-close");

      // Agregar o remover clase para mostrar u ocultar el modal
      if ($(".contenedor-menu-responsive").hasClass("active")) {
          $(".contenedor-modal-responsive").addClass("active");
      } else {
          $(".contenedor-modal-responsive").removeClass("active");
      }
  });

  /********************
      Cerrar Modal
  ********************/
  $(".contenedor-modal-responsive").click(function () {
      // Cerrar el menú responsive
      $(".contenedor-menu-responsive").removeClass("active");

      // Restaurar el ícono del botón de menú
      $(".btn-menu i").removeClass("fa-close").addClass("fa-bars");

      // Ocultar el modal
      $(".contenedor-modal-responsive").removeClass("active");
  });

  // Cerrar el menú responsive al hacer clic en el botón de cerrar modal
  $("#btn-cerrar-modal-responsive").click(function (e) {
      e.preventDefault();
      $(".contenedor-modal-responsive").removeClass("active");
      $(".contenedor-menu-responsive").removeClass("active");
      $(".btn-menu").removeClass("active");
  });

  /**************************************
      Botones para abrir los submenus
  **************************************/

  // Botón para abrir el submenu de productos en la versión responsive
  $("#btn-productos-responsive").click(function (e) {
      e.preventDefault();
      $(".menu-responsive").addClass("cerrar");
      $(".contenedor-submenu-productos-responsive").addClass("active");
  });

  /*****************************************
      Botones para cerrar los submenus
  *****************************************/

  // Botón para cerrar el submenu de productos en la versión responsive
  $("#btn-cerrar-submenu-productos-responsive").click(function (e) {
      e.preventDefault();
      $(".contenedor-submenu-productos-responsive").removeClass("active");
      $(".menu-responsive").removeClass("cerrar");
      $(".menu-responsive").addClass("active");
  });

});




const contacto = document.querySelector('.contacto');
contacto.addEventListener('click', (e) => {
    Swal.fire({
        title: "<h2 class='h2-modal' style='margin-bottom: 0;'>Contactos Internacionales</h2>",
        html: `
        <div class='swal2-html-container'>
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-phone-alt"></i>
                    <h3>Teléfono Colombia</h3><br>
                </div>
                <p class='modal-p'>+57 313 3997518</p>
            </div>
  
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-phone-alt"></i>
                    <h3>Teléfono California</h3><br>
                </div>
                <p class='modal-p'>+1 (951) 571-5934</p>
            </div>
  
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Dirección Colombia</h3><br>
                </div>
                <a class='modal-p' href='https://www.google.com/maps?q=Carrera+10+%23+20-30,+Bogotá,+Colombia' target='_blank'>
                    Carrera 10 # 20-30, Bogotá, Colombia
                </a>
            </div>
  
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Dirección California</h3><br>
                </div>
                <a class='modal-p' href='https://www.google.com/maps?q=4150+Chicago+Ave+%23+51778+Riverside,+CA+92507' target='_blank'>
                    4150 Chicago Ave # 51778 Riverside, CA 92507
                </a>
            </div>
  
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-envelope"></i>
                    <h3>Email Latinoamerica</h3><br>
                </div>
                <a class='modal-p' href='mailto:healthitylatinoamerica@gmail.com'>
                    healthitylatinoamerica@gmail.com
                </a>
            </div>
  
            <div class='modal-items'>
                <div class='modal-div'>
                    <i class="fas fa-envelope"></i>
                    <h3>Email EE.UU</h3><br>
                </div>
                <a class='modal-p' href='mailto:info@healthity.us'>
                    info@healthity.us
                </a>
            </div>
        </div>
        </div>
        `,
        width: window.innerWidth >= 1000 ? '70vw' : '60vw',
        customClass: {
            confirmButton: 'custom-confirm-button',
            popup: 'notification-popup'
        },
        showClass: {
            popup: `
                animate__animated
                animate__fadeInRight
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutRight
                animate__faster
            `,
            background: "#000"
        }
    });
});








const info = document.querySelector('.info');

info.addEventListener('click', (e) => {
    let textToShow;

    if (window.innerWidth <= 500) {
        textToShow = "Proveemos software de integración de aplicaciones terapéuticas para profesionales de la salud y diversas disciplinas. No es necesario realizar iridología ni microscopía biológica. Permite personalizar tratamientos y hacer backup periódicamente.";
    } else {
        textToShow = `Somos parte de las 5 Divisiones del grupo de compañías <a href='https://evgroup.org' target="_blank">EVGROUP</a> <br>  
    D'ALMA Solutions  desarrollamos y proveemos para todo el planeta Software de Integración de aplicaciones terapéuticas para profesionales de la salud, médicos alternativos, Neurópatas, y las diferentes disciplinas terapéuticas, Software de consolidación de información de terapias, tratamientos, y análisis del antes y después, avances en tratamientos de las diferentes disciplinas de sanación, Al operar el Software No estás obligado hacer iridologia ni microscopia Biológica, este es un software de apoyo terapéutico de apoyo para múltiples terapias, cada modulo trabaja independiente, Las bases de datos de productos estas predeterminados para la compañía Healthity pero se pueden personalizar con los productos que rote el ejecutor del programa de salud, permiten controlar bases de datos, tiempos de servicios, facturación, recibos, control de terapias, sugerencias nutricionales, alimentarias, permite personalizar los tratamientos que ofrezca el profesional de la salud y hacer backup periódicamente`;
    }

    Swal.fire({
        title: "<h2 class='h2-modal' style='margin-bottom: 0;'>D'ALMA Solutions</h2>",
        html: `

        <a href='https://evgroup.org' target="_blank" style="position: absolute; top: 30px; left: 30px;"><img src="./img/evgroup.png" style=" width: 80px; height: auto; z-index: 999;"></a>
        <a href='https://evgroup.org' target="_blank" style="position: absolute; top: 30px; right: 30px;"><img src="./img/evgroup.png" style=" width:80px; height: auto; z-index: 999;"></a>

        <p class='p-modal'>${textToShow} </p>
    `,
        width: window.innerWidth >= 1000 ? '70vw' : '60vw',
        customClass: {
            confirmButton: 'custom-confirm-button',
            popup: 'notification-text'
        },
        showClass: {
            popup: `
        animate__animated
        animate__fadeInRight
        animate__faster
      `
        },
        hideClass: {
            popup: `
        animate__animated
        animate__fadeOutRight
        animate__faster
      `,
            background: "#000"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.querySelector('.video-container');
  if (videoContainer) {
    videoContainer.style.display = 'block';
  }
});

