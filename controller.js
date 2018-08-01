function SnackController() {

  //private parts
  let snackService = new SnackService()





  //public parts

  this.makeSnack = function (event) {
    event.preventDefault();
    let formData = event.target
    formData.classList.add("red")

    let newSnack = {
      title: formData.title.value,
      description: formData.description.value,
      price: formData.price.value,
      quantity: formData.quantity.value
    }

    snackService.makeSnack(newSnack)
    formData.title.value = ""

  }



}