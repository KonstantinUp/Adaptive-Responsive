
import React from 'react';
import {IconButton, Paper} from "material-ui";
import {
    EditorModeEdit,
    ActionDeleteForever,
    ContentAddBox,
    NavigationExpandMore,
    NavigationChevronRight,
    ContentReply
} from "material-ui/svg-icons/index";


import './CategoryItem.css'
import {connect} from "react-redux";
import {activateCategory} from "../../../core/categories";
import {selectCategory} from "../../../state";
import {categoryDelete, getTodoList, isCategorySelected} from "../../../core";

class CategoryItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            toDo:'Enter category title',
        };


        this.activateCategory = this.activateCategory.bind(this);
    }



    activateCategory(e){
        e.stopPropagation();
        this.props.activateCategory(this.props.categoryId);
        const payload = {categoryId:this.props.categoryId};
          this.props.selectCategory(payload);
    }






    render(){
        let {categoryTitle} = this.props;

        return (
            <div  className={"category-item" + (this.props.selectedCategory ? 'active' : "")} onClick={this.activateCategory} >
                <Paper className="paper" zDepth={2} children={
                    <div className="main">
                        <div className="expand">
                            <IconButton>

                                <NavigationChevronRight />

                            </IconButton>
                        </div>
                        <div className="title">
                            {categoryTitle}
                        </div>
                            <div className="actions">
                                <div className="edit">
                                    <IconButton>
                                        <EditorModeEdit />
                                    </IconButton>
                                </div>
                                <div className="remove">
                                    <IconButton>
                                        <ActionDeleteForever onClick={(event) => {

                                            this.props.categoryDelete(this.props.categoryId);
                                            event.stopPropagation();
                                        }}/>
                                    </IconButton>
                                </div>
                                <div className="add">
                                    <IconButton>
                                        <ContentAddBox />
                                    </IconButton>
                                </div>
                            </div>

                    </div>
                }/>
                <div className="children">
                    {this.props.children}
                </div>
            </div>

        )

    }
}

const mapDispatchToProps = ({
    activateCategory,
    selectCategory,
    categoryDelete
});

const mapStateToProps =(state,props)=> {

    return {selectedCategory: isCategorySelected(state,props.categoryId)
}};



export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);

