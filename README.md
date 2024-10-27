Books Corner 📚

Welcome to Books Corner, a simple and clean web application to explore, manage, and catalog books. Built with React, Redux, and TypeScript, this app provides a user-friendly interface for book enthusiasts to search, filter, add, and review books in a centralized catalog.



Features

Landing Page
Displays the top 10 recently added books.
Header with open routes: All Books, Sign In, and Sign Up.
Clean layout with footer for easy navigation.

Authentication

Sign Up and Sign In: Users can register and log in with unique email and password.
Firebase or custom authentication can be used.
Logout functionality: After logging in, the navbar displays a Logout button for secure session management.

All Books Page

Displays a catalog of books fetched from an API using RTK Query.

Key details displayed for each book:
Title
Author
Genre
Publication Date

Search and Filter: Users can search for books based on criteria like title, author, or genre, and filter based on genre and publication year.

Add New Book: Authenticated users can navigate to the "Add New Book" page using a button or menu option.

Add New Book Page

Authenticated users can add books by filling out a form.

After form submission, the user is notified of success or failure with a toast notification.

Book Details Page

Detailed view of each book when clicked from the list.
Information displayed includes:
Title
Author
Genre
Publication Date
Reviews: Users can leave reviews on each book.
Edit and Delete options for books:
If Author Login can see edit and delete button on book details page and author can perform delete and delete operation

Edit Book Page
Pre-populated form for easy editing of a book’s details.
Notifications upon successful or failed edit operations.
Wishlist and Reading List.
Users can create a wishlist of books they wish to read.
Reading List feature allows users to track books they are currently reading, planning to read, or have finished reading.


Backend GitHub Repository: book-corner-backend
Technologies Used
Frontend: React, Redux, RTK Query, TypeScript, Tailwind CSS, React Router
Authentication: Firebase or Custom Authentication
Deployment: Netlify (Frontend)

Live Link : https://books-corner.netlify.app

Froentend github - https://github.com/MikatSyed/book-corner-frontend

Backend github - https://github.com/MikatSyed/book-corner-backend

Login Credentials -

 Email : mikat@gmail.com 

 Password : mikat123
