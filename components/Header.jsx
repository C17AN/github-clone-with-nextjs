import css from "styled-jsx/css";
import { IoLogoGithub, IoLogoGitHub } from "react-icons/io";
import { useRouter } from "next/router";
import { useState } from "react";

const HeaderCss = css`
  body {
    margin: 0;
  }
  .header-wrapper {
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }
  .header-search-form input {
    margin: 0px 16px;
    background-color: hsla(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0px 12px;
    font-size: 14px;
    font-weight: bold;
  }

  .header-navigations a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/user/${userName}`);
    setUserName("");
  };

  return (
    <>
      <div className="header-wrapper">
        <a href="https://github.com">
          <IoLogoGithub color="white" size={36} />
        </a>
        <form className="header-search-form" onSubmit={onSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Search or jump to..."
          />
        </form>
        <nav className="header-navigations">
          <a href="https://github.com/pulls">Pull Requests</a>
          <a href="https://github.com/issues">Issues</a>
          <a href="https://github.com/marketplace">MarketPlace</a>
          <a href="https://github.com/explore">Explore</a>
        </nav>
        <style jsx>{HeaderCss}</style>
      </div>
    </>
  );
};

export default Header;
