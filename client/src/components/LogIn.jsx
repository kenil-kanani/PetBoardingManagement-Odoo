import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export default function Login() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, loading, user } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  });

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formdata.email === "" || formdata.password === "") {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert("Login successful");
        const d = {
          token: data.token,
          role: data.role,
          user: data.user,
        };
        login(d);
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-8 shadow sm:rounded-lg">
        <h2 className="text-2xl font-bold tracking-tight text-primary-foreground">
          Login
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              value={formdata.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              name="password"
              value={formdata.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <Button type="submit" className="mt-6 w-full" onClick={submitHandler}>
          Login
        </Button>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm">
            <Link
              href="#"
              className="font-medium text-primary hover:underline"
              prefetch={false}
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
