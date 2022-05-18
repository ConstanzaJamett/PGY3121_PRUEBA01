// $(document).ready(function(){
//     var filtrador = $('.filtro-container .list-group .categorias'),
//         filtroColor = $('.filtro-colores .form-check-input'),
//         listaAFiltrar = $('.productos');

//     filtrador.click(function(){
//         $('.categorias').removeClass('active');
//         $(this).addClass('active');
//         var categoria = $(this).data('categoria');

//         listaAFiltrar.find('.producto').hide().removeClass('producto-activo');

//         $('.productos').find(`[data-categoria='${categoria}']`).show().addClass('producto-activo');
//         console.log(categoria)

//     });

//     $('.ver-todo').click(function(){
//         filtrador.removeClass('active')
//         listaAFiltrar.find('.producto').show()
//     });

//     filtroColor.each(function(){
//         $(this).change(function(){
//             if($(this).hasClass('color-activo')){
//                 $(this).removeClass('color-activo');
//             }else{
//                 $(this).addClass('color-activo');
//                 var colorActivo = $(this).data('color'),
//                     productosActivos = listaAFiltrar.find('.producto.activo'),
//                     productosConColorActivo = listaAFiltrar.find(`[data-color='${colorActivo}']`);
//                 productosActivos.find(`[data-color='${colorActivo}']`).show()
//             }
//         })
//     });

//     filtroColor.change(function(){
        
//     })

//     $('#slide-home').owlCarousel({
//         loop:true,
//         margin:0,
//         nav:false,
//         items:1
//     });

    // function clima(){
    //     var metaWeather = "https://www.metaweather.com";

    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(function(position){
    //             var lat = `${position.coords.latitude}`,
    //                 long = `${position.coords.longitude}`;
    //             $.getJSON(`${metaWeather}/api/location/search/?lattlong=${lat},${long}`, function(json){
    //                 var ciudad = json[0].title,
    //                     woeid = json[0].woeid;
    //                 console.log(`${ciudad} codigo ${woeid}`);
    //             })
    //         });
    //     }
    // }
    // // API PARA GEOLOCALIZACION

    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else { 
    //         console.log("Geolocation is not supported by this browser.");
    //     }
    // }

    // getLocation();

    // function showPosition(position) {
    //     // console.log(`Latitud: ${position.coords.latitude} y longitud ${position.coords.longitude}`);
    //     // console.log(lat + long)
    // }




















    
//     var temperature = [0,""];
// $('#temperature').css('cursor','pointer');

// $("#temperature").click(function(){
//   if(temperature[1] == "C"){
//     //C to F
//     temperature[0] = Math.floor(temperature[0] * 9/5 + 32);
//     temperature[1] = "F";
//     $("#temperature").html(temperature[0] + " " + temperature[1]);
    
//   }else if(temperature[1] == "F"){
//     // F to C
//     temperature[0] = Math.floor((temperature[0] - 32) / (9/5));
//     temperature[1] = "C";
//     $("#temperature").html(temperature[0] + " " + temperature[1]);
    
//   }else{
//     // no temperature assigned yet
//     $("#temperature").html("so impatient!");
//   }
  
  
// });

// $(document).ready(function() {
//  updateWeather();
// });

// function updateWeather() {
//   var metaWeather = "https://www.metaweather.com/api/location/search/?lattlong=";

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       // got location
//       var latitude = position.coords.latitude, // latitude
//         longitude = position.coords.longitude; // longitude

//       $.getJSON(metaWeather + "/api/location/search/?lattlong=" + latitude + "," + longitude, function(json) {
//         // got city
//         var city = json[0].title, //city
//           woeid = json[0].woeid; // city ID

//         $.getJSON(metaWeather + "/api/location/" + woeid, function(json) {
//           // got weather
//           temperature = [Math.floor(json.consolidated_weather[0].the_temp),"C"]; //celsius

//           var weather = json.consolidated_weather[0].weather_state_name,
//             windspeed = Math.floor(json.consolidated_weather[0].wind_speed),
//             weatherAbbreviation = json.consolidated_weather[0].weather_state_abbr; //mph

//           // update page
//           $("#city").html(city);
//           $("#weather").html(weather);
//           $("#temperature").html(temperature[0] + " " + temperature[1]);
//           $("#wind").html(windspeed + " mph");
//           $("#image").attr("src", "https://www.metaweather.com/static/img/weather/" + weatherAbbreviation + ".svg");

//         });

//       });
//     });
//   }
// }
    // FIN API GEOLOCALIZACION

});