import { Controller } from 'stimulus'
import $ from 'jquery'
import Swal from 'sweetalert2'


export default class extends Controller {
  confirm(event) {
    event.preventDefault();
    let originLink = event.target.href
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        $.ajax({
          method: 'DELETE',
          url: originLink
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    })
  }
}