import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styled from 'styled-components';
import ModalAddOranization from '../ModalAddOranization';
import ModalAddStaff from '../ModalAddStaff';
import styles from './ModalOrganizationTree.module.sass';

const cx = classNames.bind(styles);

const data = {
    item: 'Trường đại học BKHN',
    subItem: [
        {
            item: 'Trường CNTT và TT',
            subItem: [
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                {
                    item: 'Khoa KHMT',
                    subItem: [
                        { item: 'Thầy Đỗ Bá Lâm' },
                        { item: 'Thầy B', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                    ],
                },
                { item: 'Văn thư' },
            ],
        },
        {
            item: 'Trường ABCABC',
            subItem: [
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                {
                    item: 'Khoa KHMT',
                    subItem: [
                        { item: 'Thầy Đỗ Bá Lâm' },
                        { item: 'Thầy B', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                    ],
                },
                { item: 'Văn thư' },
            ],
        },
        {
            item: 'Trường ABCABC',
            subItem: [
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                {
                    item: 'Khoa KHMT',
                    subItem: [
                        { item: 'Thầy Đỗ Bá Lâm' },
                        { item: 'Thầy B', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                    ],
                },
                {
                    item: 'Văn thư',
                    subItem: [
                        { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                        { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                        { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                        { item: 'Khoa KHMT', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                        {
                            item: 'Khoa KHMT',
                            subItem: [
                                { item: 'Thầy Đỗ Bá Lâm' },
                                { item: 'Thầy B', subItem: [{ item: 'Thầy Đỗ Bá Lâm' }, { item: 'Thầy B' }] },
                            ],
                        },
                        { item: 'Văn thư' },
                    ],
                },
            ],
        },
    ],
};

const StyledNode = styled.div`
    padding: 4px;
    border-radius: 8px;
    display: inline-block;
    background: #f0f2fa;
`;

const handleHide = (e) => {
    console.log(e.target.parentNode.nextSibling);
    const hideElement = e.target;
    console.log(hideElement);
    const target = e.target.parentNode.nextSibling;
    if (target) target.classList.toggle('hidden');
    if (target.classList.contains('hidden')) {
        console.log('Hiding');
        hideElement.innerText = 'open';
    } else {
        hideElement.innerText = 'hidden';
    }
};

const ChildNode = (props) => {
    let res;
    if (!props.data) {
        return null;
    } else {
        res = props.data.map((item, index) => {
            return (
                <Fragment>
                    <TreeNode
                        label={
                            <StyledNode>
                                <div
                                    className={cx('hide-btn')}
                                    onClick={(e) => {
                                        handleHide(e);
                                    }}
                                >
                                    hide
                                </div>
                                {item.item}
                            </StyledNode>
                        }
                    >
                        {item.subItem && <ChildNode data={item.subItem} />}
                    </TreeNode>
                </Fragment>
            );
        });
    }
    if (res) return res;
};

const StyledTreeExample = () => (
    <Tree lineWidth={'2px'} lineColor={'grey'} lineBorderRadius={'10px'} label={<StyledNode>{data.item}</StyledNode>}>
        {data.subItem.map((item, index) => {
            return (
                <Fragment>
                    <TreeNode
                        key={index}
                        label={
                            <StyledNode>
                                <div
                                    className={cx('hide-btn')}
                                    onClick={(e) => {
                                        handleHide(e);
                                    }}
                                >
                                    hide
                                </div>
                                {item.item}
                            </StyledNode>
                        }
                    >
                        <ChildNode {...(item.subItem ? { data: item.subItem } : {})}></ChildNode>
                    </TreeNode>
                </Fragment>
            );
        })}
    </Tree>
);

function ModalOranizationTree(props) {
    return (
        <div>
            <div className={cx('header-wrapper')}>
                <ModalAddOranization />
                <ModalAddStaff />
            </div>
            <div className={cx('divider')}></div>
            <div className={cx('wrapper')}>
                <TransformWrapper initialScale={1}>
                    <TransformComponent>
                        <StyledTreeExample />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
}

export default ModalOranizationTree;
