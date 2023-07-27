# Library App developed with React and Spring Boot

---

## - Home Page

#### Create React + TypeScript project
* Create new React project: `$npx create-react-app react-library --template typescript`

#### Add Bootstrap and CSS
* Add project CSS and images
* Add [Bootstrap 5.0.2 and Javascript](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

#### Create navigation bar component
* Create `Navbar.tsx` component that is at the top of every page

#### Create explore top books component 
* Create `ExploreTopBooks.tsx` component that is displaed as the first component on the homepage

#### Create carrousel for books component
* Create `Carrousel.tsx` component that allows the user to see books on the homepage

#### Create a reusable component to return books
* Create `ReturnBook.txt` component and use it within `Carrousel.tsx`

#### Create heros component
* Create `Heros.tsx` component that provides some info to the user along with images

#### Create library services component
* Create `LibraryServices.tsx` component that redirects user to the library services

#### Create footer component
* Create `Footer.tsx` component that is at the bottom of every page

#### Create homepage component and change App.tsx
* Create `HomePage.tsx` component to use the main components
* Change `App.tsx` to import the homepage

---

## Spring Boot

#### Set up the database and tables in MySQL workbench
* `React-Springboot-Add-Tables-Script-1.sql` creates the database and tables
* `React-Springboot-Add-Tables-Script-2.sql` loads the data in the `book` table

#### Create a Spring Boot starter project and set up `application.properties` file
* `spring-boot-starter-data-jpa` 
* `spring-boot-starter-data-rest`
* `mysql-connector-java`
* `lombok`

#### Develop the entity: Book
* `BookRepository`

#### Create REST APIs with Spring Data JPA Repositories and Spring Data REST
* Disable `POST`, `PUT`, `PATCH` and `DELETE` HTTP methods on the API: `MyDataRestConfig` class, `@Configuration` annotation and `RepositoryRestConfigurer` interface

---

## Consume Carrousel Book API 

#### Create React `BookModel` class

#### Call Spring Boot API from React Application
* Javascript `await fetch` functionality to retrieve data asynchronously and `useEffect` React Hook

#### Loading and error renders
* `isLoading` and `httpError` return

#### Configure ReturnBook to use props and set Carrousel to render books

#### Loading Spinner on Carrousel refresh
* `SpinnerLoading` and use it in `Carrousel` component
---

## Search Books component with Pagination

#### Set up components and DOM
* `SearchBooksPage` and `SearchBook`

#### Pagination on the React frontend
* Create reusable `Pagination` component that gets the `currentPage`, `totalPage` and `paginate`
* Add pagination to `SearchBooksPage` component

#### Pagination on the Spring Boot backend
* [Spring Boot](https://docs.spring.io/spring-data/rest/docs/current/reference/html/#repository-resources.query-method-resource) pagination document
* `http://localhost:8080/api/books?page=[NUMBER]&size=[NUMBER]`

