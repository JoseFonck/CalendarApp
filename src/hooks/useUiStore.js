import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
    
    const dispatch = useDispatch();

    const {isDateModalOpen} = useSelector(state => state.ui);

    const toggleDateModal = () => {
        isDateModalOpen 
        ? dispatch(onCloseDateModal())
        : dispatch(onOpenDateModal())
    }
    const openNewEventModal = () => {
        
    }

    return {
        //*Properties
        isDateModalOpen,
        
        //*Methods
        toggleDateModal,
    }
}