import { GoLink, GoLocation, GoMail, GoOrganization } from "react-icons/go";
import css from "styled-jsx/css";

const style = css`
  h2 {
    margin-left: 20px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left: 6px;
  }

  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 28px;
  }
  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    font-size: 20px;
    margin: 0;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-info-container {
    margin-top: 16px;
  }

  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`;

const Profile = ({ user }) => {
  return (
    <>
      {user ? (
        <div className="profile-box">
          <div className="profile-image-wrapper">
            <img
              className="profile-image"
              src={user.avatar_url}
              alt="프로필 이미지"
            ></img>
          </div>
          <h2 className="profile-username">{user.name}</h2>
          <div className="profile-user-login">{user.login}</div>
          <div className="profile-user-info-container">
            <p className="profile-user-info">
              <GoLocation size={16} color="#6a737d" />
              <span className="profile-user-info-text">{user.location}</span>
            </p>
            <p className="profile-user-info">
              <GoOrganization size={16} color="#6a737d" />
              <span className="profile-user-info-text">{user.company}</span>
            </p>
            <p className="profile-user-info">
              <GoLink size={16} color="#6a737d" />
              <span className="profile-user-info-text">{user.blog}</span>
            </p>
          </div>
        </div>
      ) : (
        <div>유저 정보가 없습니다.</div>
      )}
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;
