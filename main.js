const domString = (blog) =>{
	let blogString = "";
for (let i = 0; i < blog.length; i++){
  let currentBlog = blog[i];
  blogString +=    '<section class="blog">';
  blogString +=        '<div class="title">';
  blogString +=          '<h4>' + currentBlog.name + '</h4>';
  blogString +=        '</div>';
  blogString +=        '<div class="date">';
  blogString +=          '<h6>' + currentBlog.date + '</h6>';
  blogString +=        '</div>';
  blogString +=        '<div class="description">';
  blogString +=          '<p>' + currentBlog.description + '</p>';
  blogString +=        '</div>';
  blogString +=      '</section>';
  }
  writeToDom(blogString);

}
let blogHolder = document.getElementById('blog-container');

const writeToDom = (strang) => {
  blogHolder.innerHTML = strang;
}

function executeThisCodeAfterFileLoads(){
  console.log("this", this.responseText);
  const data = JSON.parse(this.responseText);
  domString(data.blog);
}

const executeThisCodeAfterFileErrors = () => {
  console.log("Shit Broke");
}

let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
myRequest.addEventListener('error', executeThisCodeAfterFileErrors);
myRequest.open('GET', 'blog.json');
myRequest.send();


