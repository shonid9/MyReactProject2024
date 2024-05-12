import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import patterns from "../validation/patterns";
import "../routes/Register.scss";
import { DevTool } from "@hookform/devtools";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import auth from "../services/auth";
import { useNavigate } from "react-router-dom";
import dialogs  from "../ui/dialogs";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();
  const [showPassword, setShowPassword] = useState(false);


  const onRegister = (data: RegisterUser) => {
    // console.log(data);
    // return;
console.log(data)
    auth
      .register(data) // request
      .then((res) => { // 201 response
        
        localStorage.setItem("users_id", res.data._id);
        dialogs.success("Success", "Register").then (() => {
          navigate("/login");
      })
      .catch((e) => {
        dialogs.error("Error", e.response.data);
      });
  });
};

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form noValidate onSubmit={handleSubmit(onRegister)}>
        <section>
          <input
            placeholder="Firstname"
            type="text"
            {...register("name.first", {
              required: "First name is required",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.first && (
            <p className="text-red-500">{errors.name?.first.message}</p>
          )}
        </section>

        <section>
          <input
            placeholder="Middle Name"
            type="text"
            {...register("name.middle", {
              required: "Middle name is required",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.middle && (
            <p className="text-red-500">{errors.name?.middle.message}</p>
          )}
        </section>

        <section>
          <input
            placeholder="Lastname"
            type="text"
            {...register("name.last", {
              required: "Last name is required",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.last && (
            <p className="text-red-500">{errors.name?.last.message}</p>
          )}
        </section>

        <section>
          <input
            placeholder="Phone"
            type="tel"
            {...register("phone", {
              required: "This field is mandatory",
              minLength: { value: 9, message: "Too short" },
              maxLength: { value: 13, message: "Too long" },
            })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}
        </section>

        <section>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: patterns.email,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </section>

        <section>
          <div className="password-container">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "This field is mandatory",
              pattern: {
                value: patterns.password,
                message:
                  "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
              },
            })}
          />
          <button type= "button"
          onClick =  {()=> {
            setShowPassword((s) => !s);
          }}
          >
            {showPassword ? <BsEyeSlashFill /> : <BsEye />}
          </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </section>



        <section>
        <input
          placeholder="Image URL"
          type="url"
          {...register("image.url", {
            pattern: {
              value: patterns.url,
              message: "Invalid image URL",
            },
          })}
        />
        {errors.image?.url && (
          <p className="text-red-500">{errors.image?.url?.message}</p>
        )}
        </section>



        <section>
        <input
          placeholder="Image Description"
          type="text"
          {...register("image.alt", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.image?.alt && (
          <p className="text-red-500">{errors.image?.alt?.message}</p>
        )}
        </section>


        <section>
        <input
          placeholder="State"
          type="text"
          {...register("address.state", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.state && (
          <p className="text-red-500">{errors.address?.state?.message}</p>
        )}
        </section>

        <section>
        <input
          placeholder="City"
          type="text"
          {...register("address.city", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.city && (
          <p className="text-red-500">{errors.address?.city?.message}</p>
        )}
        </section>


        <section>
        <input
          placeholder="Street"
          type="text"
          {...register("address.street", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.street && (
          <p className="text-red-500">{errors.address?.street?.message}</p>
        )}
        </section>


        <section>
        <input
          placeholder="Zip"
          type= "number"
          {...register("address.zip", {
            required: "This field is mandatory",
            min: { value: 1000, message: "Invalid zip" },
            max: { value: 999999999, message: "Invalid zip" },
          })}
        />
        {errors.address?.zip && (
          <p className="text-red-500">{errors.address?.zip?.message}</p>
        )}
        </section>



        <section>
        <input
          placeholder="Country"
          type="text"
          {...register("address.country", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.country && (
          <p className="text-red-500">{errors.address?.country?.message}</p>
        )}
        </section>



        <section>
        <input
          placeholder="House Number"
          type="number"
          {...register("address.houseNumber", {
            required: "This field is mandatory",
            min: { value: 1, message: "Invalid house number" },
            max: { value: 9999, message: "Invalid house number" },
          })}
        />
        {errors.address?.houseNumber && (
          <p className="text-red-500">{errors.address?.houseNumber?.message}</p>
        )}
        </section>


        <section>
        <label htmlFor="isBuisness">Buisness</label>
        <input
          id="isBuisness"
          type="checkbox"
          {...register("isBusiness", {
            
          })}
        />
        {errors.isBusiness && (
          <p className="text-red-500">{errors.isBusiness?.message}</p>
        )}
        </section>

        <button type="submit">Submit</button>
      </form>
     <DevTool control={control} />
    
    </div>
  );
};

export default Register;
