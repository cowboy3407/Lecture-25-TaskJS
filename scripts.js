//fetch
function fetchData() {
    console.log("Loading posts...");
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                console.log(`Title: ${post.title}`);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
}

//create a new post
function createPost() {
    const newPost = {
        title: "agia simon racaa",
        body: "masha masha agre icis jayoma",
        userId: 1
    };

    console.log("Creating post...");
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
        .then(response => {
            if (response.status === 201) return response.json();
            throw new Error(`Error: ${response.status}`);
        })
        .then(data => console.log("Post created:", data))
        .catch(error => console.error("Error creating post:", error));
}

//delete
function deletePost(postId) {
    console.log(`Deleting post ${postId}...`);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.status === 200) {
                console.log("Post deleted successfully.");
            } else if (response.status === 404) {
                console.error("Error: Post not found (404).");
            } else if (response.status === 500) {
                console.error("Error: Server issue (500).");
            } else {
                throw new Error(`Unexpected status: ${response.status}`);
            }
        })
        .catch(error => console.error("Error deleting post:", error));
}

fetchData();
createPost();
deletePost();