# Berries-Wallet
Project Overview: Wallet Application

This project is a comprehensive full-stack web development initiative aimed at creating a basic wallet application. The main functionalities include loading money from a bank into the wallet and transferring money to peers using the same application.

Key Features:

    Load Money: Users can load money into their wallet directly from their bank account.
    Peer Transfers: Users can transfer money to other users within the application.

Screens:
  ![Screenshot (85)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/083b2c90-30f6-4168-84bc-ef3d8c06b19d)
  
  ![Screenshot (86)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/89716883-3945-47e7-a0d0-2b15ccc57e75)

  ![Screenshot (88)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/9aa61a30-0338-419e-bfbf-b80fcf1f1e34)

  ![Screenshot (90)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/df147622-cff9-46b1-b705-d9557ee7f56b)
  
  ![Screenshot (92)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/f719aaf6-755f-4770-a4e0-e5e3b1f66342)

  ![Screenshot (93)](https://github.com/nb-prog01/Berries-Wallet/assets/36541919/5a2c4460-8457-4034-a3cd-d6c31fb7ce80)

Setting up in local:
  - Clone the repository
  - add valid .env variables as mentioned in .env.examples
  - run 'npm install'
  - navigate to db folder and run 'npx prisma generate' to generate prisma client
  - run 'npm run dev' to start it locally

Technologies Used:

Frontend and Backend:

    Next.js: Utilized this React-based framework for both frontend and backend, leveraging server-side rendering (SSR) and static site generation (SSG) for optimal performance and user experience.
    React.js: Employed React.js for building dynamic and interactive user interfaces.
    JavaScript (ES6/ES7): Utilized modern JavaScript features to enhance code readability and maintainability.

Auxiliary Backend:

    Express with Node.js: Implemented an additional backend layer using Express.js, to handle specific backend functionalities and APIs such as Bank Webhook.

Database:

    PostgreSQL: Used this robust, open-source relational database system to store user data, transaction histories, and other relevant information.
    Prisma ORM: Managed database interactions efficiently with Prisma, an advanced ORM for Node.js and TypeScript, providing an abstraction layer for database operations.

Styling:

    Tailwind CSS: Applied Tailwind CSS for styling the application, enabling rapid UI development with a highly customizable and responsive design system.
    CSS-in-JS: Utilized CSS-in-JS principles for component-level styling, enhancing modularity and maintainability.

CI/CD Integration:

    Docker: Containerized the application using Docker to ensure consistency across different environments and to facilitate deployment.
    DockerHub: Used DockerHub to store and manage Docker images, enabling easy distribution and deployment of the application.
    CI/CD Pipelines: Implemented continuous integration and continuous deployment (CI/CD) pipelines to automate the building, testing, and deployment processes.
        GitHub Actions: Configured GitHub Actions to automate the CI/CD pipeline, ensuring that code changes are automatically build and deployed.
        Deployment: Deployed Docker images from DockerHub to cloud services for production and staging environments.

This project demonstrates the integration of modern web technologies to create a functional and user-friendly wallet application. It highlights skills in full-stack development, database management, API development, responsive design, and CI/CD pipeline integration with DockerHub.
