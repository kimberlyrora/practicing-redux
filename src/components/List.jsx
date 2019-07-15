import React from "react";
import { connect } from "react-redux";
import { List } from 'antd';

const mapStateToProps = state => {
    return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
<List
header={<span>Header</span>}
bordered
dataSource={articles}
renderItem={item =>(
    <List.Item>
        {item.title}
    </List.Item>
)
}
/>
    // <ul className='list-group list-group-glush'>
    //     {articles.map(el => (
    //         <li className='list-group-item' key={el.id}>
    //             {el.title}
    //         </li>
    //     ))}
    // </ul>
);
const Lista = connect(mapStateToProps)(ConnectedList);
export default Lista;
