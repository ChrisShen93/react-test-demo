import { Menu, Dropdown, Button, Table } from '@arco-design/web-react';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import ModalTest from './modal';

const dropList = (
  <Menu>
    <Menu.Item key='1'>Beijing</Menu.Item>
    <Menu.Item key='2'>Shanghai</Menu.Item>
    <Menu.Item key='3'>Guangzhou</Menu.Item>
    <Menu.Item key="modal">
      <ModalTest>
        this is a test
      </ModalTest>
    </Menu.Item>
  </Menu>
);

const DropdownTest = () => {
  const columns: ColumnProps<any>[] = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'test column',
      render: () => {
        return (
          <Dropdown
            droplist={dropList}
            unmountOnExit={false}
          >
            <Button>test</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        data={[{ name: 'chris' }]}
      />
      <Dropdown
        droplist={dropList}
        unmountOnExit={false}
      >
        <Button>test</Button>
      </Dropdown>
    </>
  );
};

export default DropdownTest;
