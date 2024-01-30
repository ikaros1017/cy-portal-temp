import { Breadcrumb } from 'antd';
import intl from 'react-intl-universal';
import { HomeOutlined } from '@ant-design/icons';

const Bread = ({ location }) => {
  const nameMap = {
    '/test': '测试模板',
    '/test/list': intl.get('MenuName1'),
    '/test/detail': intl.get('MenuName2-1'),
  };
  const pathArray = location ? location.split('/').filter((i) => i) : [];
  const extraBreadcrumbItems = pathArray.map((_, index) => {
    let url = `/${pathArray.slice(0, index + 1).join('/')}`;
    return { title: nameMap[url] };
  });
  const breadcrumbItems = [{ title: <HomeOutlined /> }, ...extraBreadcrumbItems];
  return <Breadcrumb items={breadcrumbItems}></Breadcrumb>;
};

export default Bread;
