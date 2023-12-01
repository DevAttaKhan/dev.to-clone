import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "@/utils/validationSchemas";
import axios from "axios";
import { ErrorMessage } from "@/Components";
import { z } from "zod";

export default function RegisterPage() {
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerUserSchema>>({
    resolver: zodResolver(registerUserSchema),
  });

  const onsubmit = async (values: z.infer<typeof registerUserSchema>) => {
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    const { data } = await axios.post("/api/auth/register", formData);
    if (data.ok) {
      const result = await signIn("credentials", {
        redirect: true,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
      console.log(result);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="max-w-[580px] px-8 py-[35px] mt-12 mx-auto shadow bg-white"
    >
      <h3 className=" font-bold text-lg mb-8">Create Your Account</h3>
      <div className="form-controll">
        <label>Profile Image</label>
        <div className="border rounded p-3">
          <input
            type="file"
            className="text-[#404040]"
            {...register("profileImage")}
          />
          <ErrorMessage error={errors.profileImage} />
        </div>
      </div>
      <div className="form-controll">
        <label>
          Name <span className="text-[#ff0000]">*</span>
        </label>
        <input type="text" {...register("name")} />
        <ErrorMessage error={errors.name} />
      </div>
      <div className="form-controll">
        <label>
          Username <span className="text-[#ff0000]">*</span>
        </label>
        <input type="text" {...register("username")} />
        <ErrorMessage error={errors.username} />
      </div>
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
      <div className="form-controll">
        <label>
          Password Confirmation <span className="text-[#ff3636]">*</span>
        </label>
        <input type="text" {...register("confirmation")} />
        <ErrorMessage error={errors.confirmation} />
      </div>

      <input
        type="submit"
        value="Sing up"
        className="px-3 py-1 rounded text-white bg-indigo-700 hover:bg-indigo-800 mt-3 cursor-pointer"
      />
    </form>
  );
}
