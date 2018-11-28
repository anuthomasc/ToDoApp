import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import styles from '../styles/homeStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticle: []
    };
  }
  componentDidMount() {
    this.props.actions.getNewsList().then(() => {
      console.log(this.props)
      this.setState({ newsArticle: this.props.news.newsResult.articles })
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Text style={styles.toolBarHeading}>NEWS</Text>
        </View>
        <View style={styles.contentContainer}>
        <FlatList
           data={this.state.newsArticle}
           renderItem={({ item }) => {
             return (
              <View style={styles.itemContainer}>
                    <TouchableOpacity
                     // onPress={this.onItemPress.bind(this, item)}
                      >
                      <View style={styles.itemContentContainer}>
                        
                        <View style={styles.itemData}>
                          <Text style={styles.newsHeading}>{item.title}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    
                  </View>
                   )}}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
