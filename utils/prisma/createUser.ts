"use server";

import { prisma } from '../../lib/prisma';
import { hash } from "bcryptjs";

type CreateUserArgs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    contact: string;
  };

export async function createUser({
    firstName,
    lastName,
    email,
    password,
    address,
    contact,
  }: CreateUserArgs) {
     // Hash the password using bcrypt
     const hashedPassword = await hash(password, 10); // 10 is the salt rounds

     // Save the user data to the database using Prisma
     const user = await prisma.user.create({
       data: {
         firstName: firstName,
         lastName: lastName,
         email: email,
         password: hashedPassword,
         address: address,
         contact: contact,
       },
     });

     // User registration successful
     console.log("User registered successfully");
    return user;

}

export default createUser;