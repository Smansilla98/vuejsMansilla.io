Vue.component('prueba-componente',{
    data:function(){
        return{
            nombre:"Pepe"
        }
    },
    props:{
        nombre:String,
        profesion:String,
        fecha:String,
    },
    template:/*html*/`    
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Profesion</th>
        <th scope="col">Fecha</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{{nombre}}</td>   
        <td>{{profesion}}</td>
        <td>{{fecha}}</td>
        </tr>        
    </tbody>
    </table>
    `
})