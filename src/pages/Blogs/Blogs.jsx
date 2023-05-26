import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto my-16 p-4'>
            <div className='my-6'>
                <h3 className='font-semibold text-lg mb-3'>
                    1. What is an access token and refresh tokens? How do they work and where should we store them on the client-side?
                </h3>
                <p className='text-slate-600'>
                    An access token is a short-lived, limited-permission token that is used to access protected resources. A refresh token is a long-lived, high-permission token that can be used to obtain new access tokens. Access tokens are typically used to access resources that are only needed for a short period of time, such as a user's profile information or a list of recent tweets. Refresh tokens are typically used to access resources that are needed for a longer period of time, such as a user's email inbox or a list of saved documents. The authorization server validates the authorization grant and authenticates the authorized client. If valid, it issues an access token and a refresh token. The client needs to store this refresh token safely. The client can now request protected data to the resource server using the issued access token.
                </p>
            </div>
            <div className='my-6'>
                <h3 className='font-semibold text-lg mb-3'>
                    2. Compare SQL and NoSQL database?
                </h3>
                <p className='text-slate-600'>

                    SQL and NoSQL are two different types of database management systems (DBMS). SQL databases are relational databases, while NoSQL databases are non-relational databases. In a relational database, data is stored in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single piece of data about that record. SQL is a language that is used to interact with relational databases. It allows you to create, read, update, and delete data from tables. In a non-relational database, data is stored in a more flexible way. There is no need to define a schema before you start storing data, and you can store data in any format you want. NoSQL databases are often used for storing large amounts of data or for storing data that does not fit well into a relational model.
                </p>
            </div>
            <div className='my-6'>
                <h3 className='font-semibold text-lg mb-3'>
                    3. What is express js? What is Next JS?
                </h3>
                <p className='text-slate-600'>
                    Express.js is a popular back-end web application framework for Node.js. It is open-source and free to use. Express.js provides a set of tools and libraries that make it easy to develop web applications. It is used by many large companies, including Uber, Netflix, and Airbnb. Next.js is a React framework that can be used to build both static and dynamic web applications. It is also open-source and free to use. Next.js provides a number of features that make it a good choice for building web applications, including server-side rendering (SSR), code splitting, and routing.
                </p>
            </div>
            <div className='my-6'>
                <h3 className='font-semibold text-lg mb-3'>
                    4. What is MongoDB aggregate and how does it work?
                </h3>
                <p className='text-slate-600'>
                    MongoDB aggregate is a feature that allows you to perform complex operations on data stored in MongoDB collections. Aggregate operations are performed using a pipeline of stages, each of which performs a specific operation on the data. The stages are chained together in order, and the output of each stage is passed to the next stage. The following are some og the most common aggregate operations: $match, $group, $project, $sort, $limit etc
                </p>
            </div>
        </div>
    );
};

export default Blogs;