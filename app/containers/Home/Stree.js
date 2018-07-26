import React from 'react';
import './style.css';

class Stree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            menuId: 0,
        };
    }
    componentDidMount() {
    }
    /*
     * 点击获取树信息
     */
    getStree = (obj, e) => {
        e.stopPropagation();
        this.setState((prevState) => ({
            menuId: obj.menuId,
            isShow: !prevState.isShow,
        }));
        console.log(obj, e.target);
        if (e) {
            const DomShow = e.target.nextSibling.style;
            DomShow.display = DomShow.display === 'none' ? 'block' : 'none';
            DomShow.borderLeft = '1px dotted #666';
        }
    }
    componentWillReveiceProps(newProps) {
        console.log(newProps, 1);
    }
    /*
     * 生成树
     */
    generateMenu(menuObj) {
        const { isShow, menuId } = this.state;
        const vdom = [];
        if (menuObj instanceof Array) {
            const list = [];
            menuObj.forEach((v) => list.push(this.generateMenu(v)));
            vdom.push(
                <ul key="single" className="childUl">
                    {list}
                </ul>
            );
        } else {
            let icon = '';
            if (menuObj.children.length > 0) {
                icon = isShow ? '▼' : '▶';
                icon = menuObj.menuId === menuId && isShow ? '▼' : '▶';
            }
            vdom.push(
                <li key={menuObj.menuId}>
                    <span>{icon}</span>
                    <span onClick={(e) => { this.getStree(menuObj, e); }} role="presentation">{menuObj.name}</span>
                    {this.generateMenu(menuObj.children)}
                </li>
            );
        }
        return vdom;
    }
    render() {
        const data = [
            {
                menuId: 1,
                name: '员工管理',
                children: [
                    {
                        menuId: 3,
                        name: '添加员工',
                        children: [],
                    },
                    {
                        menuId: 4,
                        name: '删除员工',
                        children: [
                            {
                                menuId: 6,
                                name: '按姓名删除',
                                children: [],
                            },
                            {
                                menuId: 7,
                                name: '按工号删除',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                menuId: 2,
                name: '工资管理',
                children: [
                    {
                        menuId: 5,
                        name: '修改工资',
                        children: [],
                    },
                ],
            },
        ];
        return (
            <div>
                {this.generateMenu(data)}
            </div>
        );
    }
}
export default Stree;
