import { useState, useEffect } from 'react';
import SiderBar from './SiderBar';
import { Layout, ConfigProvider, theme } from 'antd';
import MenuList from './MenuList';
import chinese from '../locales/chinese.json';
import english from '../locales/english.json';
import { store } from '@ice/stark-data';
import intl from 'react-intl-universal';
import zhCN from 'antd/locale/zh_CN';
import { getBasename } from '@ice/stark-app';
import Bread from './Bread';

const { Content } = Layout;

export default (props) => {
  const openKeys = {
    detail: 'MenuName2',
  };

  const [antdLang, setantdLang] = useState(undefined);

  useEffect(() => {
    store.on(
      'language',
      (lang) => {
        loadLocales(lang);
      },
      true,
    );
  }, []);

  const loadLocales = (lang = 'chinese') => {
    let currentLocale = lang;
    let type;
    let antd;
    switch (currentLocale) {
      case 'chinese':
        type = chinese;
        antd = zhCN;
        break;
      case 'english':
        type = english;
        antd = undefined;
        break;
      default:
        type = chinese;
        antd = zhCN;
        break;
    }
    intl.init({
      currentLocale,
      locales: {
        [currentLocale]: type,
      },
    });
    setantdLang(antd);
  };

  let pathname = location.pathname.replace(`${getBasename()}/`, '');

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
      locale={antdLang}
    >
      <Layout style={{ minHeight: 'calc(100vh - 52px)' }}>
        <SiderBar MenuList={MenuList} openKeys={openKeys[pathname]} pathname={[pathname]} />
        <Layout style={{ background: 'rgb(0,12,23)' }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <Bread location={location.pathname} />
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
