import React from "react";
import styles from "./login.part.module.scss";
import NavbarLoginComponent from "./navbar-login.part";

const ssoSignIn: React.FC = () => {
  return (
    <main className="flex flex-col">
      <NavbarLoginComponent />
      <div className="w-full h-[1024px] bg-[#303C54] ">
        <div className={styles.loginContainer}>
          <div className={styles.loginText}>
            Sign in to CloudEQ CMS with SSO
          </div>
          <form action="" className={styles.loginFileds}>
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
            <input type="submit" value="Sign in" className={styles.signIn} />            
          </form>
        </div>
      </div>
    </main>
  );
};

export default ssoSignIn;
