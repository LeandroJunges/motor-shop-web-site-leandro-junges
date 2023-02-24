import { Main } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "password" | "email" | string;
  placeholder?: string;
  textarea?: boolean;
  register?: any;
}

const Input = ({
  label,
  type,
  placeholder,
  textarea,
  register,
}: IInputProps) => {
  return (
    <Main textarea={textarea}>
      <h3 className="input-label">{label}</h3>

      {textarea ? (
        <textarea className="input-placeholder" placeholder={placeholder} />
      ) : (
        <input
          {...register}
          className="input-placeholder"
          type={type}
          placeholder={placeholder}
        />
      )}
    </Main>
  );
};

export default Input;
