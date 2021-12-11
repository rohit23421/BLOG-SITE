import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Cloud and</span>
        <span className="headerTitleLg">DevOps</span>
      </div>
      <img
        className="headerImg"
        src="https://images.immediate.co.uk/production/volatile/sites/25/2020/05/Mars-Saturn-Jupiter-3bd67e3-e1591182300998.jpg?quality=90&resize=768,574"
        alt=""
      />
    </div>
  );
}
