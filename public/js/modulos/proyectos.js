import Swal from 'sweetalert2';
import axios from 'axios';

const btnEliminar = document.querySelector('#btnEliminar');

if(btnEliminar){

    btnEliminar.onclick = (e) => {

        const id = e.target.dataset.proyectoId;
        console.log(id);

        Swal.fire({
            title: '¿Estás seguro de eliminar el proyecto?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/proyectos/${id}/delete`)
                    .then((res) => {
                        console.log(res)
                        Swal.fire(
                          'Eliminado!',
                          'El proyecto ha sido eliminado.',
                          'success'
                        )
                        setTimeout(() => {
                          window.location.href = '/';
                        },2000);
                    })
                    .catch(err => console.log(err))
            }
          })
    }
}