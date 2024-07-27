VANTA.CLOUDS({
    el: ".content",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    speed: 0.70
})


document.addEventListener("DOMContentLoaded", function () {

    const data = [
        { title: "Registro Información", text: "Permite ingresar toda la información del cliente, se pueden ingresar todos sus datos de contacto para conocerlo y poder llevar la trazabilidad de los tratamientos.", image: "./img/LC-REGISTRO-INFO.jpg" },
        { title: "Entrevista personalizada y Segura Del cliente", text: "Permite ingresar información absolutamente confidencial que el cliente tenga y desee mantener protegida con contraseña.", image: "./img/LA-ENTREVISTA-PERSO.jpg" },
        { title: "Registros fotográficos específicos", text: "Permite registrar imágenes del cliente, su rostro y situaciones de salud visibles para llevar la trazabilidad del cliente.", image: "./img/LC-FOTO-REGISTRO.jpg" },
        { title: "Altísima Definición en Captura del Iris", text: "Captura de imágenes en altísima precisión del iris para análisis con mapas topográficos en cientos de billonésimas de precisión.", image: "./img/LC-ALTISIMA-DEFI.jpg" },
        { title: "Estudio Avanzado de Iridologia", text: "Identificación didáctica de los hallazgos en el iris con mapa topográfico e interpretación ilustrativa de la zona en análisis con relación a la afectación.", image: "./img/LC-ESTUDIO-AVANZADO.jpg" },
        { title: "Análisis focalizando hallazgos en el iris", text: "Permite zonificar algún hallazgo del iris separando la novedad.", image: "./img/LC-ANALISIS-FOCALIZANDO.jpg" },
        { title: "Análisis amplificado de Ambos iris Derecho e Izquierdo", text: "Visión amplificada para identificar debilidades metabólicas generalizadas del cliente.", image: "./img/LC-ANALISIS-AMPLI.jpg" },
        { title: "Resultados Por Tendencias Sistemas del Cuerpo", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/LC-RESULTADOS-TENDENCIA.jpg" },
        { title: "Resultados Por Tendencias de Sistemas con mayor Desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/LC-RESULTADOS-TENDENCIA.jpg" },
        { title: "Resultados Por Tendencias órganos, glándulas y tejidos con desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/lc-resultado-glandula.jpg" },
        { title: "Sugerencia de Productos Integrado con La Línea Healthity", text: "Productos Liposomales de absorción del 100% a la célula. Integrado con toda la gama de tratamientos de Healthity: desde aquí se pueden dar sugerencias de tratamientos, cuidado personal, masajes, estilo de vida, hábitos alimenticios, y orientación terapéutica personalizada por el profesional.", image: "./img/LC-SUGERENCIA.jpg" },
        { title: "Reporte completo del cliente para impresión Física o para exportarlo", text: "Genera un reporte detallado de todo el proceso que se hizo para imprimirlo o exportarlo. De esta manera, se puede hacer seguimiento a las sugerencias y tratamientos dados. Permite hacer Backap diario, quincenal o mensual.", image: "./img/lc-ultima.png" }
    ];


    function updateContent(title) {
        const item = data.find(item => item.title === title);
        if (item) {
            document.querySelector(".slider-text h1").textContent = item.title;
            document.querySelector(".slider-images img").setAttribute('src', item.image);
            document.querySelector(".slider-images a").setAttribute('href', item.image);
            document.querySelector(".slider-images img").classList.add('example-image-link');
            document.getElementById("text-related").textContent = item.text;
        }
    }

    const titleListColumn1 = document.getElementById("title-list-column1");
    const titleListColumn2 = document.getElementById("title-list-column2");
    
    data.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="far fa-hand-point-right icon-titles"></i> ${item.title}`;
  
      li.classList.add('li-items');
      li.addEventListener("click", function() {
        updateContent(item.title);
      });
      if (index % 2 === 0) {
        titleListColumn1.appendChild(li);
      } else {
        titleListColumn2.appendChild(li);
      }
    });
  
    if (data.length > 0) {
      updateContent(data[0].title);
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector('.slider-images');

    imageContainer.addEventListener('mouseover', function () {
        const notification = document.createElement('div');
        notification.textContent = 'Click para abrir la imagen';
        notification.classList.add('image-notification');
        imageContainer.appendChild(notification);
    });

    imageContainer.addEventListener('mouseout', function () {
        const notification = document.querySelector('.image-notification');
        if (notification) {
            notification.remove();
        }
    });
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
        if ($(".btn-menu i").attr("class") == "fa fa-bars") {
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else {
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        }

        $(".contenedor-menu-responsive").toggleClass("active");

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
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
        $(".contenedor-modal-responsive").removeClass("active");

        if ($(".btn-menu i").attr("class") == "fa fa-bars") {
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else {
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        }
    });

    $("#btn-cerrar-modal-responsive").click(function (e) {
        e.preventDefault();
        $(".contenedor-modal-responsive").removeClass("active");
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
    });

    /**************************************
        Botones para abrir los submenus
    **************************************/


    $("#btn-productos-responsive").click(function (e) {
        e.preventDefault();
        $(".menu-responsive").addClass("cerrar");
        $(".contenedor-submenu-productos-responsive").addClass("active");
    });

    /*****************************************
        Botones para cerrar los submenus
    *****************************************/


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

        <a href='./contacto.html' target="_blank"class='contactanos'>
        <img src="./img/chat.png">
        </a>
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
        <a href='https://evgroup.org' target="_blank">
        <img src="./img/evgroup.png" style="position: absolute; top: 10px; left: 10px; width: 80px; height: auto; z-index: 999;">
        <img src="./img/evgroup.png" style="position: absolute; top: 10px; right: 10px; width:80px; height: auto; z-index: 999;">
    </a>
    
        <p class='p-modal'>${textToShow}</p>
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

