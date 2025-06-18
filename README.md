# NodeJS-NestJS-GraphQL Demo

A GraphQL API utilising NestJS and Apollo Server. 

Exposes an endpoint for making queries and mutatations:

* **Queries**: Read-only operations which *Get* custom-structured data from the server.
* **Mutations**: Write operations which *Create*, *Update*, or *Delete* data based on structured requests to the server.

---

### 🛠️Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/draff1800/nodejs-nestjs-graphql-demo.git
    cd nodejs-nestjs-graphql-demo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application in Development mode (Restarts on code changes):

    ```bash
    npm run start-dev
    ```

---

### 🕹️Usage

#### Schema

```graphql
type Cat {
  id: ID!
  name: String!
  age: Float!
  breed: String!
}

input CreateCatInput {
  name: String!
  age: Float!
  breed: String!
}
```

#### Via Playground

Requests can be made from the GraphQL Playground Interface by opening http://localhost:3000/graphql in your browser.

* Example **Queries**:

  ```graphql
  query {
    cats {
      id
      name
      age
      breed
    }
  }
  ```

  ```graphql
  query {
    cats {
      name
      breed
    }
  }
  ```

* Example **Mutations**:

  ```graphql
  mutation {
    createCat(createCatInput: {name: "Tom", age: 3, breed: "Siamese"}) {
      id
      name
      age
      breed
    }
  }
  ```

  ```graphql
  mutation {
    createCat(createCatInput: {name: "Bailey", age: 11, breed: "Aegean"}) {
      name
      breed
    }
  }
  ```

#### Via Curl

Requests can be made using Curl from a terminal.

* Example **Queries**:

  ```cmd
  curl -X POST http://localhost:3000/graphql -H "Content-Type: application/json" -d "{\"query\":\"{ cats { id name age breed } }\"}"
  ```

  ```cmd
  curl -X POST http://localhost:3000/graphql -H "Content-Type: application/json" -d "{\"query\":\"{ cats { name breed } }\"}"
  ```

* Example **Mutations**:

  ```cmd
  curl -X POST http://localhost:3000/graphql -H "Content-Type: application/json" -d "{\"query\":\"mutation { createCat(createCatInput: {name: \\\"Tom\\\", age: 3, breed: \\\"Siamese\\\"}) { id name age breed } }\"}"
  ```

  ```cmd
  curl -X POST http://localhost:3000/graphql -H "Content-Type: application/json" -d "{\"query\":\"mutation { createCat(createCatInput: {name: \\\"Bailey\\\", age: 11, breed: \\\"Aegean\\\"}) { name breed } }\"}"
  ```
