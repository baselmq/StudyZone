const style = {
  color: "#fff",
  fontSize: "15px",
  marginRight: "4px",
};
const iconPost = {
  color: "#49bbbd",
  fontSize: "20px",
};
const iconSocial = {
  color: "#f7f7f8",
  fontSize: "25px",
};
const menuNav = {
  color: "#49bbbd",
  fontSize: "20px",
  backgroundColor: "#f7f7f8",
  display: "flex",
  alignItems: "center",
  padding: "5px",
  borderRadius: "50%",
};
export class PathIcons {
  static search = (
    <i className="fa-solid fa-magnifying-glass" style={iconPost}></i>
  );
  static messenger = (
    <i className="fa-brands fa-facebook-messenger" style={style}></i>
  );
  static menuDots = (<i className="fi fi-br-menu-dots"></i>);
  static unlike = (<i className="fa-regular fa-heart" style={iconPost}></i>);
  static like = (<i className="fa-solid fa-heart" style={iconPost}></i>);
  static comment = (
    <i className="fa-regular fa-comment-dots" style={iconPost}></i>
  );
  static send = (
    <i className="fa-regular fa-paper-plane" style={iconPost}></i>
  );

  static image = (<i className="fi fi-rr-images" style={iconPost}></i>);
  static feeling = (<i className="fi fi-rr-grin-alt" style={iconPost}></i>);
  static upload = (
    <i className="fa-solid fa-cloud-arrow-up" style={iconPost}></i>
  );
  static camera = (<i className="fa-solid fa-camera" style={iconPost}></i>);

  static settings = (<i className="fa-solid fa-gear" style={menuNav}></i>);
  static language = (<i className="fi fi-rr-language" style={menuNav}></i>);
  static darkMode = (<i className="fa-solid fa-moon" style={menuNav}></i>);
  static signOut = (<i className="fi fi-br-sign-out-alt" style={menuNav}></i>);
  static searchIcon = (<i className="fi fi-rr-search" style={iconPost}></i>);
  static user = (<i className="fi fi-sr-circle-user"></i>);
  static close = (
    <i
      className="fa-solid fa-circle-xmark"
      style={{ color: "red", fontSize: "35px" }}
    ></i>
  );

  static facebook = (
    <i class="fa-brands fa-square-facebook" style={iconSocial}></i>
  );
  static instagram = (
    <i class="fa-brands fa-square-instagram" style={iconSocial}></i>
  );
  static twitter = (
    <i class="fa-brands fa-square-x-twitter" style={iconSocial}></i>
  );
  static linkedin = (<i class="fa-brands fa-linkedin" style={iconSocial}></i>);

  // static user = (<i className={`fa-solid fa-user`} style={iconPost}></i>);
  // static birthrate = (
  //   <i className={`fa-solid fa-cake-candles`} style={iconPost}></i>
  // );
  // static location = (
  //   <i className={`fa-solid fa-location-dot`} style={iconPost}></i>
  // );
  // static email = (<i className={`fa-solid fa-envelope`} style={iconPost}></i>);
  // static phone = (<i className={`fa-solid fa-phone`} style={iconPost}></i>);
}
