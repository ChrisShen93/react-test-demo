import { FC, useState } from 'react';
import { Modal, Input } from '@arco-design/web-react';

interface IProps {
}
const ModalTest: FC<IProps> = (props) => {
  const { children } = props;

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <div onClick={handleClick}>
        {children}
      </div>

      <Modal
        title="test modal"
        visible={visible}
        // focusLock
        onCancel={() => setVisible(false)}
      >
        {/* <Input.TextArea
          rows={3}
        /> */}
        <Input />
      </Modal>
    </div>
  );
};

export default ModalTest;
