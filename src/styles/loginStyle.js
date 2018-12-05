import {
    StyleSheet,
} from 'react-native';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
} from '../helpers/Responsive';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolBar: {
        alignItems: 'center',
        width: responsiveWidth(100),
        paddingTop: responsiveWidth(5),
        paddingBottom: responsiveWidth(5),
        marginBottom: responsiveWidth(5),
        //justifyContent:'center'
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#ddd',
        //borderBottomWidth: 0,
        shadowColor: '#ddd',
        // shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 1,
        backgroundColor: '#b30059',
        color: 'white'

    },

})

export default styles;