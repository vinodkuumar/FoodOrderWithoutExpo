import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';


const ProductDetailScreen = props => {
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId))
    const dispatch = useDispatch()
    return(
        <View>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
                <Button 
                    style= {styles.actions}
                    color={Colors.primary}  
                    title="Add to Cart" 
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct))
                    }}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
    )
}

export const screenOptions  = navData => {
    return{
        headerTitle: navData.route.params.productTitle
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: { 
        fontFamily: 'OpenSans-Bold',   
        fontSize: 20,
        color: '#888',
        alignSelf: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    
})

export default ProductDetailScreen;