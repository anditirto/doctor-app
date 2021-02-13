import {showMessage} from 'react-native-flash-message'
import {Colors} from '../colors'

export const showError = (message) => {
            showMessage({
                message:message,
                type:'default',
                backgroundColor:Colors.error,
                color:Colors.white,
            })
}

export const showSuccess = (message) => {
            showMessage({
                message:message,
                type:'default',
                backgroundColor:Colors.primary,
                color:Colors.white,
            })
}