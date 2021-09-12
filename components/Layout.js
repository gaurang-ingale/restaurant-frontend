import Navigator from "./Navigator";

const Layout = (props) => {
  return (
    <div>
      <Navigator />
      {props.children}
    </div>
  );
};

export default Layout;
