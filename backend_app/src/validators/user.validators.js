import {z} from "zod";

// Creating a object schema 
const signupSchema = z.object({
    username: z
    .string({required_error: "username is required."})
    .trim()
    .min(3, {message: "username must be at least of 3 chars."})
    .max(255, {message: "username must not be more than 255 characters."}),

    email: z
    .string({required_error: "email is required."})
    .trim()
    .email({ message: "invalid email address."})
    .min(3, {message: "email must be at least of 3 characters."})
    .max(255, {message: "email must not be more than 255 characters."}),

    phone: z
    .string({ required_error: "phone is required."})
    .trim()
    .min(10, {message: "phone number must be at least of 10 characters."})
    .max(20, {message: "phone number must not be more than 20 characters."}),

    password: z
    .string({ required_error: "password is required."})
    .trim()
    .min(7, {message: "password must be at least of 7 characters."})
    .max(255, {message: "password can't be greater than 255 characters."}),
});


// Creating a object schema 
const loginSchema = z.object({
    email: z
    .string({required_error: "email is required."})
    .trim()
    .email({ message: "invalid email address."})
    .min(3, {message: "email must be at least of 3 characters."})
    .max(255, {message: "email must not be more than 255 characters."}),

    password: z
    .string({ required_error: "password is required."})
    .trim()
    .min(7, {message: "password must be at least of 7 characters."})
    .max(255, {message: "password can't be greater than 255 characters."}),
})

export { signupSchema, loginSchema };