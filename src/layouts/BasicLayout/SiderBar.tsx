import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { getpermissions } from '@/utils/getdata';
import { Link } from 'ice';
import intl from 'react-intl-universal';
import style from './index.module.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SiderBar = ({ MenuList, openKeys, pathname }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      id="siderbar"
      className={style.siderDiv}
    >
      <Menu mode="inline" defaultOpenKeys={openKeys} selectedKeys={pathname} theme="dark">
        {MenuList.map((item) => {
          if (getpermissions(item.permissions)) {
            return item.children ? (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    {item.icon}
                    <span>{intl.get(item.title)}</span>
                  </span>
                }
              >
                {item.children
                  .map((e) =>
                    getpermissions(e.permissions) ? (
                      <Menu.Item key={e.key} title={intl.get(e.title)}>
                        <Link to={e.link}>
                          {e.icon}
                          <span>{intl.get(e.title)}</span>
                        </Link>
                      </Menu.Item>
                    ) : null,
                  )
                  .filter((i) => i)}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} title={intl.get(item.title)}>
                <Link to={item.link}>
                  {item.icon}
                  <span>{intl.get(item.title)}</span>
                </Link>
              </Menu.Item>
            );
          } else {
            return null;
          }
        }).filter((i) => i)}
      </Menu>
    </Sider>
  );
};

export default SiderBar;
