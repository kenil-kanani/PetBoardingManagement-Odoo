import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
    phone: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    if (cnfpassword !== password) {
      alert("Passwords do not match");
      return;
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      cnfpassword: "",
      phone: "",
    });
  };

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Welcome to our App
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Register or login to get started.
          </p>
        </div>
        <div className="bg-card p-8 shadow sm:rounded-lg">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                tooltip="Please enter your full name"
                value={formdata.name}
                onChange={changeHandler}
                name="name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                tooltip="Please enter a valid email address"
                value={formdata.email}
                onChange={changeHandler}
                name="email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                tooltip="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
                value={formdata.password}
                onChange={changeHandler}
                name="password"
              />
            </div>
            <div>
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                id="cnfpassword"
                type="password"
                placeholder="Enter your confirm password"
                required
                tooltip="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
                value={formdata.cnfpassword}
                onChange={changeHandler}
                name="cnfpassword"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                tooltip="Please enter a valid phone number"
                value={formdata.phone}
                onChange={changeHandler}
                name="phone"
              />
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full" onClick={submitHandler}>
            Register
          </Button>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
