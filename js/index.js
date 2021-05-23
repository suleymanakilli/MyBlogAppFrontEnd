

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}
const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    
    let blogPostsContent="";
    for(blogPost of blogPosts){
        console.log(blogPost.title)
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postLink = `/post.html?id=${blogPost.id}`;

        const postImage = `${API_BASE_URL}${blogPost.post_image}`
        blogPostsContent+=`
        <a class="post-link" href="${postLink}">
            <div class="card">
                <div>
                    <img src="${postImage}" alt="" width="200px" height="200px" id="blog-image">
                </div>
                <div id="blog-content">
                    <span id="blog-date">${postDate}</span>
                    <h2 id="blog-title">${blogPost.title}</h2>
                    <p id="blog-writing">${blogPost.content}</p>
                </div>
            </div>
        </a>
        `
    }
    document.querySelector(".blog-posts").innerHTML=blogPostsContent
}