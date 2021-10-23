import React from 'react';
import {connect} from 'react-redux';
import NavBar from "../components/NavBar/NavBar";
import {openModal} from "../store/state/menu/actions";

const mapStateToProps = (state) => (
  {
    menuItems: state.MenuList.menuItems
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    openModal: (id) => dispatch(openModal(id)),
  }
)

const MenuList = ({menuItems, openModal, isOpen}) => {
  return (
    <div>
         <NavBar menuItems={menuItems}
                     openModal={openModal}
                     isOpen={isOpen}
         />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);