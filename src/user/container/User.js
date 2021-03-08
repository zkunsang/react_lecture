import React, { useEffect } from 'react'
import { PageHeader, Col, Row, Descriptions, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

// match에 파라미터가 있음
/**
 * 
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
export default function User({ match }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const name = match.params.name;
    useEffect(() => {
        dispatch(actions.fetchUser(name));
    }, [name])

    const isFetched = true;
    const isFetching = true;

    return (
        <Row>
            <Col xs={24} md={20} lg={14}>
                <PageHeader
                    onBack={history.goBack}
                    title="사용자 정보"
                >
                    {user && (
                        <Descriptions layout="vertical" bordered column={1}>
                            <Descriptions.Item label="이름">
                                <Typography.Text>{user.name}</Typography.Text>
                            </Descriptions.Item>
                            <Descriptions.Item label="소속">{user.department}</Descriptions.Item>
                            <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
                            <Descriptions.Item label="수정 내역">tnwjd sodur</Descriptions.Item>
                        </Descriptions>
                    )}
                    {!user && isFetched && (
                        <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
                    )}
                </PageHeader>
            </Col>
        </Row>
    )
}

// 새로 고침을 하면 문제가 발생
// user가 undefined
// optional chaning