import React from 'react';
import { Button } from 'react-native';

const FetchLocation = props => {
    return (
        <Button title="Find Books Near You" onPress={props.onGetLocation} />
    );
};

export default FetchLocation;
