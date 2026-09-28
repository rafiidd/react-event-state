export default
function Cart(){

    let counter = 0 ;
    const handleAddToCart = () => {
        counter += 1;handleAddToCart
    }

    return(
        <div>
             <h3>Shopping Chart </h3>
             <p>Items in the cart : {counter}</p>
             <button onClick ={handleAddToCart}>Add </button>
        </div>
    )
}