import React, { Component } from "react";
import {
  View,
  DatePickerAndroid,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  TextInput,
  TimePickerAndroid
} from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import Carousel from "react-native-snap-carousel";
import StepIndicator from "react-native-step-indicator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import { responsiveWidth } from "../helpers/Responsive";
import styles from "../styles/homeStyle";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      activeSlide: 2,
      slider1Ref: false,
      activeLabel: 2,
      text: "",
      date: '',
      time: "",
      curTime:null,
      isPopUpVisible:false
    };
  }
  componentDidMount() {}

  _renderItem({ item, index }) {
    return (
      <View style={styles.carouselContentContainer}>
        <Text style={styles.carouselTodoHeading}>ToDo</Text>
        <View style={(style = styles.carouselFlatListContainer)}>
          <FlatList
            data={[1, 3, 4, 3, 5]}
            renderItem={({ item }) => {
              return (
                <View style={styles.carouselFlatListItemContainer}>
                  <Text>Morning Yoga Class</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
   onCalendarPress= async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
        if(action!==DatePickerAndroid.dismissedAction){
          var date = new Date(year, month, day);
          newState['Text'] = date.toLocaleDateString();
        this.setState({
          date: newState['Text']
        });
        }else{
          
        }
        
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };
  onClockPress= async () => {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
       console.log(hour)
       console.log(minute)

       this.setState({
         time:hour+":"+minute
       })
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  };
  onButtonPress=()=>{
    this.setState({isPopUpVisible:true})
  }
  render() {
    const labels = ["Last week", "Yesterday", "Today", "Tomorrow", "Later"];
    const customStyles = {
      labelColor: "#999999",
      labelSize: 11,
      currentStepLabelColor: "#0000ff",
      stepIndicatorSize: 10,
      currentStepIndicatorSize: 10,
      separatorStrokeWidth: 2,
      stepStrokeWidth: 2,
      currentStepStrokeWidth: 2,
      stepStrokeCurrentColor: "#0000ff",
      stepStrokeFinishedColor: "#f2f2f2",
      stepStrokeUnFinishedColor: "#f2f2f2",
      stepIndicatorCurrentColor: "#0000ff",
      separatorFinishedColor: "#f2f2f2",
      separatorUnFinishedColor: "#f2f2f2",
      stepIndicatorFinishedColor: "#f2f2f2",
      stepIndicatorUnFinishedColor: "#f2f2f2",
      stepIndicatorLabelFontSize: 0,
      currentStepIndicatorLabelFontSize: 0,
      //stepIndicatorLabelCurrentColor:'#000'
    };
    let currentDate=new Date().toLocaleDateString();
    let currentTime=new  Date().toLocaleTimeString()
    //console.log(currentDate);
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.helloBoldText}>Hello</Text>
            <Text style={styles.helloBoldText}>Jhony!</Text>
            <Text style={styles.smallHeadingText}>
              You have 3 new task today
            </Text>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={[1, 2, 3, 4, 5]}
              renderItem={this._renderItem}
              sliderWidth={responsiveWidth(100)}
              itemWidth={responsiveWidth(65)}
              firstItem={2}
              onSnapToItem={index => {
                this.setState({ activeLabel: index });
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onButtonPress}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>Add New Task</Text>
            </View></TouchableOpacity>
            
          </View>
        </View>

        <View style={styles.stepperContainer}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={this.state.activeLabel}
            labels={labels}
            onPress={index => {
              this.setState({
                activeLabel: index,
              });
              this._carousel.snapToItem(index);
            }}
          />
        </View>
        <Dialog
        visible={this.state.isPopUpVisible}
        onTouchOutside={() => {
          this.setState({ isPopUpVisiblee
            : false });
        }}
        dialogStyle={{
          width: responsiveWidth(80),
          //borderColor: "#DD0000",borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 0,
        }}
      >
        <DialogContent
          style={{
            // borderColor: "#DD0000",borderWidth: 2,
            paddingBottom: 0,
          }}
        >
          <View style={styles.popUpContentContainer}>
            <View style={styles.popUpButtonContainer}>
            
            <View style={styles.singleButtonContainer}>
            <TouchableOpacity 
            onPress={()=>{
              this.setState({
                isPopUpVisible:false
              })
            }}>
                <Text style={styles.popUpButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
           
            
              <View style={styles.singleButtonContainer}>
              <TouchableOpacity onPress={()=>{
              this.setState({
                isPopUpVisible:false
              })
            }}>
                <Text style={styles.popUpButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
             
            </View>
            <View style={styles.titleContainer}>
              <TextInput
                style={{
                  // height: 40,
                  borderColor: "gray",
                  borderWidth: 0,
                }}
                placeholder="Title"
                underlineColorAndroid={"#0000ff"}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
            <TouchableOpacity onPress={this.onCalendarPress}>
            <View style={styles.inputFieldContainer}>
                <Image
                  style={styles.icon}
                  source={require("../../assets/calendar.png")}
                />
              <Text style={styles.inputText}>{(this.state.date=='')?currentDate:this.state.date}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onClockPress}>
            <View style={styles.inputFieldContainer}>
              <Image
                style={styles.icon}
                source={require("../../assets/alarm-clock.png")}
              />
              <Text style={styles.inputText}>{(this.state.time=='')?currentTime:this.state.time}</Text>
            </View>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
