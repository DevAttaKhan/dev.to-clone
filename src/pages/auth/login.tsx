import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/Components";
import { loginSchema } from "@/utils/validationSchemas";
import { useRouter } from "next/navigation";

type ValidationSchemaType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (values) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (!result?.ok) setError("Email or Password is incorrect");
    console.log(result);
    router.replace("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[580px] px-8 py-[35px] mt-12 mx-auto shadow bg-white"
    >
      <h3 className=" font-bold text-lg mb-8">Login here</h3>
      <div className="form-controll">
        <label>
          Email <span className="text-[#ff0000]">*</span>
        </label>
        <input type="text" {...register("email")} />
        <ErrorMessage error={errors.email} />
      </div>

      <div className="form-controll">
        <label>
          Password <span className="text-[#ff3636]">*</span>
        </label>
        <input type="text" {...register("password")} />
        <ErrorMessage error={errors.password} />
      </div>

      <input
        type="submit"
        value="Login"
        className="px-3 py-1 rounded text-white bg-indigo-700 hover:bg-indigo-800 mt-3 cursor-pointer"
      />
      {error && <p className="text-red-700 mt-3">{error}</p>}
    </form>
  );
};

export default LoginPage;
