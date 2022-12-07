Vue.component('prueba-componente',{
    data:function(){
        return{
            nombre:"Pepe"
        }
    },
    props:['nombre','profesion', 'fecha'],
    template:/*html*/`
    
    <table class="table table-dark">
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