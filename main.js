var allBlogs = [];

var blog1 = {
  name: "Blog 1",
  date: "",
  description: "This is where I need to wirte my blog for the day."
};

var blog2 = {
  name: "Blog 2",
  date: "",
  description: "This is where I need to wirte my blog for the day."
};

var blog3 = {
  name: "Blog 3",
  date: "",
  description: "This is where I need to wirte my blog for the day."
};

var blog4 = {
  name: "blog4",
  date: "",
  description: "This is where I need to wirte my blog for the day."
};

var blog5 = {
  name: "Blog 5",
  date: "",
  description: "This is where I need to wirte my blog for the day."
};

allBlogs.push(blog1);
allBlogs.push(blog2);
allBlogs.push(blog3);
allBlogs.push(blog4);
allBlogs.push(blog5);

console.log("All my Blogs: ", allBlogs);

var blogContainer = document.getElementById("blog-container");

for (var i = 0; i < allBlogs.length; i++){

	var currentBlog = allBlogs[i];

	var domString = "";

  domString +=    '<section class="blog">';
  domString +=        '<div class="title">';
  domString +=          '<h4>' + currentBlog.name + '</h4>';
  domString +=        '</div>';
  domString +=        '<div class="date">';
  domString +=          '<h6>' + currentBlog.date + '</h6>';
  domString +=        '</div>';
  domString +=        '<div class="description">';
  domString +=          '<p>' + currentBlog.description + '</p>';
  domString +=        '</div>';
  domString +=      '</section>';

    console.log("Dom String from for loop", domString)
    blogContainer.innerHTML += domString;
}



