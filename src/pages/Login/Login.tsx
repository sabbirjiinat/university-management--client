import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { decodeToken } from "../../utils/decodeToken";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [handleLogin] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const res = await handleLogin(data).unwrap();
    const user = decodeToken(res?.data?.accessToken);
    dispatch(
      setUser({
        user,
        token: res?.data?.accessToken,
      })
    );
  };

  return (
    <form
      className="h-screen w-full flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block" htmlFor="name">
          Id
        </label>
        <input
          className="border border-green-500"
          type="text"
          {...register("id")}
        />
        <label className="block" htmlFor="name">
          Password
        </label>
        <input
          className="border border-green-500"
          type="text"
          {...register("password")}
        />
        <button className="block" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
