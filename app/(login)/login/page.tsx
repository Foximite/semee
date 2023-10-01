"use client";

import { title } from "@/components/primitives";
import { Button, Input, Link, Image } from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { LockIcon } from "./LockIcon.jsx";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"

interface Values {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            radius="none"
            isZoomed
            src="/EDM_Background4.jpg"
            className="h-screen w-screen bg-cover bg-no-repeat"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div
            className="flex flex-col items-center justify-center mt-10 sm:mt-0"
            style={{ width: "100%", height: "300px" }}
          >
            <Image radius="none" src="/EDM_Logo_2.png" className="" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-900">
              Sign-in
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  // Use the signIn function to authenticate the user
                  await signIn("credentials", {
                    redirect: false,
                    email: values.email,
                    password: values.password,
                  }).then((error) => {
                    if (error?.error) {
                      setSubmitting(false);
                      toast.error(
                        "Username/Password incorrecto! Por favor tente novamente."
                      );
                      return;
                    }
                    // Show success toast
                    toast.success("Login com sucesso!");

                    // Redirect to the login page

                    // Add a delay before redirecting to the login page
                    setTimeout(() => {
                      router.push("/dashboard");
                    }, 2000);
                  });
                }}
              >
                {({ handleChange, handleBlur }) => (
                  <Form className="space-y-6">
                    <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Insira o seu e-mail"
                      variant="bordered"
                      size="lg"
                      isRequired
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Input
                      endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      name="password"
                      label="Password"
                      placeholder="Insira a sua password"
                      type="password"
                      variant="bordered"
                      size="lg"
                      isRequired
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Button
                      color="warning"
                      className="text-white flex w-full justify-center"
                      type="submit"
                    >
                      Aceder
                    </Button>
                  </Form>
                )}
              </Formik>

              <p className="mt-10 text-center text-sm text-gray-500">
                Não possui uma conta?
                <Link
                  href="/sign-up"
                  className="font-semibold leading-6 text-orange-600 hover:text-orange-500 ml-1"
                >
                  Registe-se aqui!
                </Link>
              </p>

              <p className="mt-4 text-center text-sm text-gray-500">
                Deseja voltar ao inicio?
                <Link
                  href="/"
                  className="font-semibold leading-6 text-orange-600 hover:text-orange-500 ml-1"
                >
                  Clique aqui!
                </Link>
              </p>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </section>
  );
}
