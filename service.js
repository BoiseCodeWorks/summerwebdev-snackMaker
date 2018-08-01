function SnackService(){

  //private parts
  let snacks = []

  function Snack(t, d, p, q){
    this.title = t
    this.description = d
    this.price = p
    this.quantity = q 
  }


  //public parts

  this.makeSnack = function (newSnack){
    snacks.push(new Snack(newSnack.title, newSnack.description, newSnack.price, newSnack.quantity))
    console.log(snacks)
  }



}