import {Menu, Icon} from 'antd';
import Link from 'umi/link';

function Header({location}) {
    return (
        <Menu
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item key="/">
                <Link to="/"><Icon type="home"/>Home</Link>
            </Menu.Item>
            <Menu.Item key="/users">
                <Link to="/users"><Icon type="bars"/>Users</Link>
            </Menu.Item>
            <Menu.Item key="/product">
                <Link to="/product"><Icon type="bars"/>Product</Link>
            </Menu.Item>
            <Menu.Item key="/umi">
                <a rel="noopener noreferrer" href="https://github.com/umijs/umi" target="_blank">umi</a>
            </Menu.Item>
            <Menu.Item key="/dva">
                <a rel="noopener noreferrer" href="https://github.com/dvajs/dva" target="_blank">dva</a>
            </Menu.Item>
            <Menu.Item key="/notfound">
                <Link to="/notfound"><Icon type="frown-circle"/>404</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Header;
