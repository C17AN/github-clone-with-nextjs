import Profile from "../../components/Profile";
import formatDistance from "date-fns/formatDistance";
import css from "styled-jsx/css";
import axios from "axios";
import Repository from "../../components/Repositories";
import { useRouter } from "next/router";

const user = ({ userData, repoData }) => {
  if (!userData) {
    return null;
  }
  return (
    <>
      <div className="user-contents-wrapper">
        <Profile user={userData} />
        <Repository user={userData} repo={repoData}></Repository>
      </div>{" "}
      <style jsx>
        {`
          .user-contents-wrapper {
            display: flex;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { user, page = "1" } = query;
  let userData, repoData;
  try {
    const userRes = await axios.get(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: "token 74130c971c078e567d4263c1e931097539bd8e72",
      },
    });
    if (userRes.status === 200) {
      userData = userRes.data;
    }

    const repoRes = await axios.get(
      `https://api.github.com/users/${user}/repos?sort=updated&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: "token 74130c971c078e567d4263c1e931097539bd8e72",
        },
      }
    );
    if (repoRes.status === 200) {
      repoData = repoRes.data;
    }
    return { props: { userData, repoData } };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default user;
