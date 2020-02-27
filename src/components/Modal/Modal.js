import React from 'react';
import {Modal as ModalB} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseAddTweetModalAction } from '../../actions/modalsActions';

import './Modal.scss';

export default function Modal(props){
    const {children} = props;

    //Dispatch to execute our actions
    const dispatch = useDispatch();
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

    // useSelector to acces a value in the store
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);
    

    return (
        <ModalB 
        show={isOpenModal}
        onHide={() => closeModal(false)}
        size='lg'
        centered>
            {children}
        </ModalB>
    );
}