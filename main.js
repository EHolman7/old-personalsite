var allBlogs = [];

var blog1 = {
  name: "Blog 1",
  date: "July 24th -29th, 2017",
  description: "This past week we start JavaScript in class. This was definitely a little bit of an eye opener. Functions, loops, arrays, variables, and objects were thrown at us in a java crash course just in a couple days. At first it was a little overwhelming. After trying to keep my head above water, things started to connect. It is now becoming easier seeing the functions and loops in my head. I am still trying to hone in on the coding, but I can now see how they work. The current project I am trying to finish is the coin counter. This practice is what has really helped me understand the function. This is a group effort. We first started figuring a formula which would give us the solution we were looking for then broke it down to put into code. I have also added JavaScript to this blog page. Java is going to be very useful on this page as I update it and add in more blogs. No more need to write anything else in html, it can all be easily updated in the JavaScript file. I am really looking forward to what is next. As difficult it is to take all this in, I still am excited for what is to come next. Each topic gives me more challenges to overcome. It is like drinking from a fire hose, but it is easier when you are thirsty."
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



