import { Link, useLoaderData } from "react-router-dom";


const Contact = () => {

    const users =useLoaderData(); 

     const handleAddUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;

        const user = {name,email}
        console.log(user)
fetch('http://localhost:3000/users' ,{method:'POST',
    headers:{
      'contest-type':'application/json'
    },
    body:JSON.stringify(user),
   })
     }
    return (
        <div>
            <h2>All user here: {users.length}</h2>
            {
                users.map(user => <li  key={user.id}><Link to={`/user/${user.name}`}>
               {user.id}, {user.name} ,{user.email}</Link></li>) 
            }
<form onSubmit={handleAddUser}>
    <input type="text" name="name" id=""></input>
    <br/>

    <input type="email" name="email" id=""></input>
    <br/>
    <input type="submit" name="" value='add user'></input>
  
</form>
        </div>
    );
};

export default Contact;