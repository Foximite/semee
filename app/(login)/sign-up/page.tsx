"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";
import { Button, Input, Link, Image } from "@nextui-org/react";
import { createUser } from "../../../utils/prisma/createUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contact: string;
  password: string;
}

export default function SignUp() {
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
          <div className="max-w-xl lg:max-w-3xl">
            <div
              className="flex flex-col items-center justify-center mt-10 sm:mt-0"
              style={{ width: "100%", height: "300px" }}
            >
              <Image radius="none" src="/EDM_Logo_2.png" className="" />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-900">
                Registro
              </h2>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  address: "",
                  contact: "",
                  password: "",
                }}
                onSubmit={async (
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  const user = await createUser(values)
                    .then(() => {
                      // Show success toast
                      toast.success("Registo efectuado com sucesso!");
                      setSubmitting(false);
                      // Redirect to the login page

                      // Add a delay before redirecting to the login page
                      setTimeout(() => {
                        router.push("/login");
                      }, 4000);
                    })
                    .catch((error) => {
                      // Handle any registration errors
                      console.error(error);
                      toast.error(
                        "Occoreu um erro! Por favor tente novamente."
                      );
                      setSubmitting(false);
                    });
                }}
              >
                {({ handleChange, handleBlur }) => (
                  <Form className="mt-8 grid grid-cols-12 gap-6">
                    <div className="col-span-6">
                      <Input
                        autoFocus
                        name="firstName"
                        label="Nome"
                        placeholder="Insira o seu nome"
                        variant="bordered"
                        size="lg"
                        isRequired
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="col-span-6">
                      <Input
                        name="lastName"
                        label="Apelido"
                        placeholder="Insira o seu apelido"
                        variant="bordered"
                        size="lg"
                        isRequired
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="col-span-12">
                      <Input
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
                    </div>
                    <div className="col-span-12">
                      <Input
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
                    </div>

                    <div className="col-span-6">
                      <Input
                        name="contact"
                        label="Contacto"
                        placeholder="Insira o seu contacto"
                        variant="bordered"
                        size="lg"
                        isRequired
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="col-span-6">
                      <Input
                        name="address"
                        label="Endereço"
                        placeholder="Insira o seu endereço"
                        variant="bordered"
                        size="lg"
                        isRequired
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-8">
                      <Button
                        color="warning"
                        className="text-white flex w-full justify-center"
                        type="submit"
                      >
                        Registar
                      </Button>
                      <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        Já possui uma conta?
                        <Link
                          href="/login"
                          className="text-orange-600 underline ml-1"
                        >
                          Acesse a sua conta!
                        </Link>
                        .
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </section>
  );
}
