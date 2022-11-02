    const precio = 200;
    let precio_final;

    let cantidad = document.getElementById("cantidad");

    cantidad.addEventListener("change",input)
    function input(){
        let valor = cantidad.value;
        if (valor == null) {
            valor = 1;
        }
        return valor;
    }


    categorias.addEventListener("change", descuentos);
    function descuentos(){
        
        let categorias = document.getElementById("categorias").value;
        switch (categorias) {
            case "Estudiante":precio_final = precio - (precio * 0.8);
            break;
            case "Trainee":precio_final = precio - (precio * 0.5);
            break;
            case"Junior":precio_final = precio - (precio * 0.15);
            break;
            case"Sin_categoria": precio_final = precio;
            break;
        }         
        boton2.addEventListener("click", resume);   
        function resume(){
            let boton2 = document.getElementById("boton2");
            total = precio_final * input();
            document.getElementById("total").innerText = `Total a pagar: $${total}`;
        }
        boton1.addEventListener("click", borrar);   
        function borrar(){
            let boton1 = document.getElementById("boton1");
 
            document.getElementById("total").innerText = `Total a pagar: $`;
        }
    }
