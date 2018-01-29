
import React from 'react';
import CategoryInput from '../../common/AddInputString/AddInputString';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Categorylist.css';
import {addCategory, getCategoryList} from "../../../core";
import {connect} from "react-redux";
import {categoriesList} from "../../../state/common";

  class Categories extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            category:'Enter category title',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            task: e.target.value,
        })
    }


    render(){


        const categoryItems = this.props.categoriesList.map((category)=>{
            return <CategoryItem  key ={category.id} categoryId ={category.id} categoryTitle={category.title}/>
        });

        return (
            <div className="categories">
                    <CategoryInput hint={'Enter category title'} add={this.props.addCategory} />
                <div className="category-list">
                    {/*<CategoryItem>*/}
                        {/*<CategoryItem>*/}
                        {/*</CategoryItem>*/}
                        {/*<CategoryItem>*/}
                            {/*<CategoryItem>*/}
                            {/*</CategoryItem>*/}
                            {/*<CategoryItem>*/}
                            {/*</CategoryItem>*/}
                        {/*</CategoryItem>*/}
                    {/*</CategoryItem>*/}
                    {categoryItems}
                </div>
            </div>

        )

    }
}

const mapDispatchToProps = ({
    addCategory
});

const mapStateToProps = (state)=> ({
    categoriesList :  getCategoryList(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);