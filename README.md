
# 🌐 Blog Website API Using Hapi Framework & MongoDB
The Blog Website API is a comprehensive back-end application designed to manage a blogging platform. This API allows users to perform a variety of operations related to blog management, including adding new posts, retrieving post details, updating existing post information, and deleting posts from the collection. It also supports operations on categories and comments, providing a full-featured API for a blog website.

## Features
### 📤 A. Post
##### 1. The API can save new posts (addNewPost)
- Body Request (JSON):
```bash
  {
    "title": "string",
    "description": "string",
    "numOfLike": "number",
    "imgUrl": "string",
    "isFeatured": "boolean",
    "category": {
        "_id": "string"
    }
}
```
The post object stored on the server has a structure like the example below,
```bash
    {
    "_id": "60c72b1f9b1d8b001f8e4c39",
    "title": "Post Title",
    "description": "Post description",
    "numOfLike": 10,
    "imgUrl": "http://example.com/image.jpg",
    "isFeatured": true,
    "category": {
        "_id": "60c72b1f9b1d8b001f8e4c38",
        "name": "Category Name"
    },
    "createdAt": "2021-06-13T12:00:00Z",
    "updatedAt": "2021-06-13T12:00:00Z"
}
```
##### 2. The API can display all posts (getPost)
##### 3. The API can display a detailed post (getPostById)
##### 4. The API can update post data (updatePost)
##### 5. The API can delete a post (deletePost)


### 📚 B. Category
##### 1. The API can save new categories (addNewCategory)
- Body Request (JSON):
```bash
  {
    "name": "string"
}
```
The category object stored on the server has a structure like the example below,
```bash
  {
    "_id": "60c72b1f9b1d8b001f8e4c38",
    "name": "Category Name",
    "createdAt": "2021-06-13T12:00:00Z",
    "updatedAt": "2021-06-13T12:00:00Z"
}
```
##### 2. The API can display all categories (getCategories)
##### 3. The API can get the count of categories (getCategoryCount)
##### 4. The API can delete a category (deleteCategory)
##### 5. The API can update a category (updateCategory)

### 
### 💬 C. Comment
##### 1. The API can save new comments (addNewComment)
- Body Request (JSON):
```bash
 {
    "body": "string",
    "post": {
        "id": "string"
    }
}

```
The category object stored on the server has a structure like the example below,
```bash
  {
    "_id": "60c72b1f9b1d8b001f8e4c40",
    "body": "Comment body",
    "post": {
        "_id": "60c72b1f9b1d8b001f8e4c39",
        "title": "Post Title"
    },
    "createdAt": "2021-06-13T12:00:00Z",
    "updatedAt": "2021-06-13T12:00:00Z"
}

```
##### 2. The API can display all comments (getComments)
##### 3. The API can display comments for a specific post (getCommentsByPost)
##### 4. The API can get the count of comments (getCommentsCount)
##### 5. The API can get the count of comments (getCommentsCount)


## Authors

- [@WinfreyNainggolan01](https://github.com/WinfreyNainggolan01)


