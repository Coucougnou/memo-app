import { Dialog, Loading } from 'quasar'

export function showErrorMessage(errorMessage) {
    Loading.hide()
   Dialog.create({
       title: 'Erreur',
       message: errorMessage
   }) 
}