import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Row, Select, Col } from 'antd';
import VideoBox from './videoBox';
import Stree from './Stree';
import './style.css';

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const Sex = [{
    id: 1,
    sex: '男',
}, {
    id: 2,
    sex: '女',
}, {
    id: 3,
    sex: '人妖',
}];

const name = [[{
    id: 100,
    name: '张玄林',
}, {
    id: 101,
    name: '张丹',
}, {
    id: 102,
    name: '钱家',
}, {
    id: 103,
    name: '程哥',
}], [{
    id: 200,
    name: '王红静',
}, {
    id: 201,
    name: '杨丽燕',
}, {
    id: 202,
    name: '郑悦',
}, {
    id: 203,
    name: '蔡莹',
}], [{
    id: 300,
    name: 'jim',
}, {
    id: 301,
    name: 'tony',
}, {
    id: 302,
    name: 'jimes',
}, {
    id: 303,
    name: 'roles',
}]];
const HomeForm = Form.create()(
    (props) => {
        const { getFieldDecorator } = props.form;
        const { handleCurrencyChange, personList, secondCity } = props;
        console.log(personList, secondCity);
        return (
            <Form>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="用户名"
                        >
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input placeholder="用户名" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="年龄"
                        >
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input placeholder="用户名" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="性别"
                        >
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Select
                                    onChange={handleCurrencyChange}
                                    placeholder="全部"
                                >
                                    <Option value="">全部</Option>
                                    {
                                        Sex.map((v) => (
                                            <Option key={v.id} title={v.sex} value={v.id}>{v.sex}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="人员"
                        >
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Select
                                    placeholder="全部"
                                >
                                    <Option value="">全部</Option>
                                    {
                                        personList.map((v) => (
                                            <Option key={String(v.id)} title={v.name}>{v.name}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="人员"
                        >
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Select
                                    placeholder="全部"
                                >
                                    <Option value="">全部</Option>
                                    {
                                        personList.map((v) => (
                                            <Option key={String(v.id)} title={v.name}>{v.name}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </FormItem>
                </Row>
            </Form>
        );
    }
);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: [],
            secondCity: '',
            queryFormRef: '',
        };
    }
    QueryFormRef = (form) => {
        this.form = form;
        this.setState({
            queryFormRef: form,
        });
    }
    handleCurrencyChange = (v) => {
        console.log(v);
        if (v === 1) {
            this.setState({
                personList: name[0],
                secondCity: name[0][0],
            });
        } else if (v === 2) {
            this.setState({
                personList: name[1],
                secondCity: name[1][0],
            });
        } else if (v === 3) {
            this.setState({
                personList: name[2],
                secondCity: name[2][0],
            });
        }
        this.state.queryFormRef.setFieldsValue({
            note: '全部',
        });
    }
    render() {
        const { personList, secondCity } = this.state;
        return (
            <div>
                <HomeForm
                    ref={this.QueryFormRef}
                    personList={personList}
                    secondCity={secondCity}
                    handleCurrencyChange={this.handleCurrencyChange}
                />
                <Row>
                    <Stree />
                </Row>
                <Row>
                    <div className="videoBigBox">
                        <VideoBox />
                    </div>
                </Row>
            </div>
        );
    }
}
export default Home;

HomeForm.propTypes = {
    form: PropTypes.object,
    handleCurrencyChange: PropTypes.func,
};
