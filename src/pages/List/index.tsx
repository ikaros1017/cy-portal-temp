import { Link } from 'ice';
import { Card } from 'antd';

import styles from './index.module.css';

export default function List() {
  return (
    <div className={styles.container}>
      <h2>列表页面</h2>
      <Card title="卡片头">测试</Card>
      <Link to="/">返回微应用首页</Link>
    </div>
  );
}
