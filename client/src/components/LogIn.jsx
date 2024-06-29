/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NxhgHP8FZ3H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export default function Login() {
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
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <Button type="submit" className="mt-6 w-full">
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
