import style from './css/UserProfile.module.css';
function UserProfile() {
  return (
    <>
      
      <div className={style.card}>
        <img
          className={style.img}
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
        <div className={style.textwrap}>
          <h4>Anil Sidhu</h4>
          <p>Software developer</p>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
