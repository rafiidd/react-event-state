import { use } from "react";

function Users({userDataPromise}){

    const users = use(userDataPromise)
    console.log(users);

    return(
        <div>
            <h2>Users:</h2>
        </div>
    )
}

export default Users;



// callback 

// fetch ('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {console.log(data)})

// // async await 

// async function loadData (){

//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data ;
// }


// const loadData2 = async () => {
//     const res = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     return data;
// }