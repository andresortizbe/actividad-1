let http = require("http");
let fs = require("fs");


http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    
    
    console.log(request.url);
    switch (request.url) {
      
      case '/contacto':
        redireccionar("./rutas/contact.html",response);
        break;
        case '/':
          redireccionar("./rutas/index.html",response);
          break;
        case '/nosotros':
            redireccionar("./rutas/about.html", response);
            break;
        case '/proyectos':
              redireccionar("./rutas/projects.html", response);
              break;
        case '/favicon.ico':
              response.setHeader("Content-Type", "text/html; charset=utf-8");
              redireccionar("./rutas/favicon.html", response);
              break;
      default:
        
        redireccionar("./rutas/fail.html", response);
    }

}).listen(8080);

const redireccionar=(valor, response)=>
{ 
  
  
  fs.readFile(valor, (error, content) => {
      if(!error){
        console.log("entre a respuesta");
          response.write(content);
          response.end();
      }
    

      
    });
  } 
