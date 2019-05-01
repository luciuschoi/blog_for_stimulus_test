import { Controller } from 'stimulus'
import Swal from 'sweetalert2'

export default class extends Controller {
    static targets = [ "postTitle", "count"]

    connect() {
        this.countChars()
        Swal.fire('SweetAlert2')
    }

    countChars() {
        let title = this.postTitleTarget
        let count = title.value.length
        if(count === 1){
            this.countTarget.textContent = '1 character'
        } else {
            this.countTarget.textContent = `${count} characters`
            if(count > 150){
                this.countTarget.classList.add('text-red')
            } else {
                this.countTarget.classList.remove('text-red')
            }
        }
    }
}