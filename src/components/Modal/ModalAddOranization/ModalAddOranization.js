import * as Dialog from '@radix-ui/react-dialog';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import AppButton from '~/components/AppButton';
import AppDisable from '~/components/AppDisable';
import AppFileInput from '~/components/AppFileInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import Modal from '../AppModal/AppModal';
import styles from './ModalAddOranization.module.sass';

const cx = classNames.bind(styles);

const coQuanTrucThuoc = {
    header: 'Chọn cơ quan trực thuộc',
    tabs: [{ text: 'Cơ quan trực thuộc', id: 1 }],
    content: [
        {
            header: ['Cơ quan', 'Chọn'],
            select: [
                {
                    wrapper: [
                        { type: 'header', text: 'Hội đồng trường' },
                        { type: 'radio', value: 'Hoi dong truong', name: 'isChosen' },
                    ],
                    selectItem: [
                        [
                            { type: 'header', text: 'Hội đồng A' },
                            { type: 'radio', value: 'Hoi dong A', name: 'isChosen' },
                        ],
                        [
                            { type: 'header', text: 'Hội đồng B' },
                            { type: 'radio', value: 'Hoi dong B', name: 'isChosen' },
                        ],
                    ],
                },
            ],
        },
    ],
};

function ModalAddOranization(props) {
    const [selectedValue, setSelectedValue] = useState(coQuanTrucThuoc.content[0].select[0].wrapper[0].text);
    const [submitData, setSubmitData] = useState();

    const onSelectSelection = (data, e) => {
        // console.log(data, e);
        setSelectedValue(data.isChosen);
    };

    const onSubmit = (data) => {
        console.log('submit clicked');
        setSubmitData({
            ...data,
            tructhuoc: selectedValue,
        });
    };
    console.log(submitData);

    const handleSubmitClick = () => {
        console.log('test');
    };

    return (
        <Modal
            width="700px"
            height="auto"
            style={{ overflow: 'scroll' }}
            triggerBtn={<AppButton>Thêm phòng ban mới</AppButton>}
        >
            <AppForm onSubmit={onSubmit}>
                <div className={cx('header')}>Thêm phòng ban mới</div>
                <div className={cx('main-input')}>
                    <Row gutter={50}>
                        <Col xs={12}>
                            <AppInput name="maphongban" label="Mã phòng ban" placeholder="Mã phòng ban" />
                            <AppSelectInput
                                label="Chức vụ"
                                name="chucvu"
                                options={['Đảng', 'Chính quyền', 'Đoàn thể', 'Khác']}
                            />
                            <AppDisable name="isDisable" />
                        </Col>
                        <Col xs={12}>
                            <AppInput name="tenphongban" label="Tên phòng ban" placeholder="Tên phòng ban" />
                            <AppFileInput name="anhdau" label="Ảnh dấu" />
                        </Col>
                    </Row>
                </div>
                <div className={cx('button-wrapper', 'flex-end')} style={{ gap: '20px', marginRight: '40px' }}>
                    <Dialog.Close style={{ backgroundColor: 'transparent' }}>
                        <AppButton type="button">Hủy</AppButton>
                    </Dialog.Close>

                    <div onClick={handleSubmitClick}>
                        <AppButton type="submit">Xác nhận</AppButton>
                    </div>
                </div>
            </AppForm>
        </Modal>
    );
}

export default ModalAddOranization;
