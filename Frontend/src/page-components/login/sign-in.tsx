import React, { use, useEffect, useState } from "react";
import NavbarLoginComponent from "./navbar-login.part";
import styles from "./login.part.module.scss";
import { Button } from "@/src/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSsoUrl } from "@/src/repo/sso";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [login, setLogin] = useState<string>("login");

  const handleLoginPage = () => {
    setLogin("ssoLogin");
  };

  const loginReq = useMutation({
    mutationKey: ["getSsoUrl"],
    mutationFn: getSsoUrl,
  });

  const onSubmit = () => {
    loginReq.mutate({
      emailId: email,
    });
  };

  useEffect(() => {
    if(loginReq.data) {
      console.log(loginReq.data);
      window.location.href = loginReq.data;
    }
  }, [loginReq.data]);

  return (
    <main className="flex flex-col h-screen">
      <NavbarLoginComponent />
      <div className="w-full h-screen bg-[#303C54] ">
        {login === "login" ? (
          <div className={styles.loginContainer}>
            <div className={styles.loginText}>
              Sign in with your email and password
            </div>
            <form className={styles.loginFileds}>
              <label className="text-white pb-1 leading-5 font-medium text-[12px] ">
                Email
              </label>
              <input
                type="email"
                className="rounded-sm w-[300px] px-6 py-2 h-10 mb-2"
                placeholder="name@cloudeq.com"
                name="email"
                required
              />
              <label className="text-white pb-2 leading-5 font-medium text-[12px]">
                Password
              </label>
              <input
                type="password"
                className="rounded-sm px-6 py-2 h-10"
                placeholder="Password"
                name="password"
                required
              />
              <input type="submit" value="Sign in" className={styles.signIn} />
              <div className={styles.line}>Or</div>
            </form>
            <div className={styles.signinContainer}>
              <div className="font-semibold text-[16px] leading-5 text-[fff]">
                Sign in with your corporate ID
              </div>
              <Button className={styles.ssoSign} onClick={handleLoginPage}>
                SSO-Sign in
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.loginContainer}>
            <div className={styles.loginText}>
              Sign in to CloudEQ CMS with SSO
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              className={styles.loginFileds}
            >
              <label className="text-white pb-1 leading-5 font-medium text-[12px] ">
                Email
              </label>
              <input
                type="email"
                className="rounded-sm w-[300px] px-6 py-2 h-10 mb-2"
                placeholder="name@cloudeq.com"
                name="email"
                required
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
              <input type="submit" value="Sign in" className={styles.signIn} />
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default SignIn;
