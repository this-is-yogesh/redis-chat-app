1.src/db/dummy.ts- exporting interface of message, user, users array and message array which is typeassertion as Message[] like every message obj should be of type message

2.a.src/lib/db.ts - This code snippet is setting up a connection to a Redis database, we create a new instance of the redis client which will interact with redis database hosted on upstash
b.src/lib/pusher.ts - This code exports the pushServer which is a new instance of PushServer and exports PushClient which is a new instance of PushClient
c.src/lib/utils - This code merges all the tailwind css class , like one class and then another only happens based on condition like that


3.a.src/store/usePrefeneces - creates a zustand store of soundenabled and setsoundenabled
b.src/stores/useSelectedUser - creates a zustand store of selectedUser where selectedUser is of interface User from db and setSelectedUser

4.src/app/api - API routes are serverless functions, meaning you don't need to manage a separate server. They can be deployed on platforms like Vercel, which support serverless functions , each route in api becomes an endpoint 

a. src/app/api/auth/[kindeAuth]/route.ts - this code is invoked when a GET request which basically invokes handleAuth() function from kinde , the request is made to /auth/[kindeAuth] , kindeAuth can be anything it is dynamic , like users/[userId]
b. src/app/api/sign-cloudinary-params/route.ts - this makes a POST request to cloudinary.api.app_sign_request with the paramssignin body and cloudinaryapisecret and it returns the signature as POST response

5.src/app - Each folder in app directory is an independent route, just like pages in older Next js


5.src/app/page.tsx - root or home page, corresponds to root directory - (/)

