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
        //justifyContent: 'center',
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
    stepperContainer: {
        width: responsiveWidth(100),
        // borderColor:'#DD0000',borderWidth:2,
        height: responsiveHeight(10),
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    contentContainer: {
        flex: 1,
        // borderColor:'#DD0000',borderWidth:2,
        width: responsiveWidth(100),
        backgroundColor: '#f2f2f2'
    },
    helloBoldText: {
        fontSize: responsiveFontSize(6.5),
        color: '#1a1a1a',
        fontWeight: 'bold',
    },
    headingContainer: {
        marginTop: responsiveWidth(10),
        marginBottom: responsiveWidth(5),
        marginLeft: responsiveWidth(8),
    },
    smallHeadingText: {
        paddingTop: 5,
        fontSize: responsiveFontSize(2),
        color: '#555'
    },
    carouselContainer: {
        width: responsiveWidth(100),
        // borderColor:'#DD0000',borderWidth:2,
        alignItems: 'center',

    },
    carouselTodoHeading: {
        paddingTop: responsiveWidth(5),
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
        color: '#000'
    },
    carouselFlatListContainer: {
        width: responsiveWidth(56),
        // borderColor:'#DD0000',borderWidth:2,
        marginTop: responsiveWidth(4)
    },
    carouselFlatListItemContainer: {
        marginBottom: responsiveWidth(3)
    },
    carouselContentContainer: {
        width: responsiveWidth(65),
        height: responsiveHeight(40),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    buttonContainer:{
        width:responsiveWidth(100),
        alignItems:'center',
        marginTop:responsiveWidth(6)
        //borderColor:'#DD0000',borderWidth:2,
    },
    button:{
        backgroundColor:'#0000ff',
        borderRadius:10,
        paddingLeft: responsiveWidth(7),
        paddingRight: responsiveWidth(7),

    },
    buttonText:{
        padding:responsiveWidth(3.5),
        color:'#fff'
    },
    popUpContentContainer:{
        //borderColor:'#DD0000',borderWidth:2,
        width:responsiveWidth(80),
        alignItems:'center',
        justifyContent:'center' ,
        padding:responsiveWidth(2)
    },
    popUpButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    singleButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:responsiveWidth(5),
        paddingBottom:responsiveWidth(5),
        flex:1,
        //borderColor:'#DD0000',borderWidth:2,
    },
    titleContainer:{
        //alignItems:'center',
        width:responsiveWidth(80),
        //borderColor:'#DD0000',borderWidth:2,
        paddingLeft:responsiveWidth(5),
        paddingRight:responsiveWidth(5)
    },
    popUpButtonText:{
        color:'#0000ff'
    },
    inputFieldContainer:{
        padding:responsiveWidth(4),
        flexDirection:'row',
        width:responsiveWidth(80)
    },
    icon:{
        width:responsiveWidth(5),
        height:responsiveWidth(5)
    },
    inputText:{
        paddingLeft:responsiveWidth(5)
    }

})

export default styles;