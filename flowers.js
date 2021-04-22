const flowers = [
{
    id: 1,
    color: "white",
    species: "rose",
    price: 0.90
},
{
    id: 2,
    color: "red",
    species: "tulip",
    price: 1.10
}
];

const newFlower = {
    color: "yellow",
    species: "dandelion",
    price: .50
}

const addFlower = (dandelion) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    dandelion.id = idForNewFlower
    flowers.push(dandelion)
}

addFlower(newFlower)

    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */




   /*
   Write a for..of loop that iterate the array
   of flowers, and if the price of a flower is
   greater than or equal to 1.00, it should be
   added to the `expensiveFlowers` array.
   */
  
  
  
  
  const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
   for (const flower of flowers) {
       if (flower.price >= 1.00) {
           expensiveFlowers.push(flower)
       }


    }
    return expensiveFlowers    // Do not change this code
}

  console.log(findExpensiveFlowers())




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}
