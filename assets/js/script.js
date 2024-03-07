const getPosts = async() => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      datos.forEach(element => {
        if (element.id < 5) {
          let post = document.getElementById('post-data');
          let ul = document.createElement('ul');
          let li = document.createElement('li');
          let p = document.createElement('p');

          li.textContent = element.title;
          p.textContent = element.body;

          ul.appendChild(li);
          ul.appendChild(p);
          post.appendChild(ul);
        }
      });
  } catch (error){
      console.log('No fue posible mostrar los posts')
  }
};