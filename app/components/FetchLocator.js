import React from 'react';
import { Button } from 'react-native';

const FetchLocator = props => {
    return (
        <Button title="Find Your Book" onPress={props.onGetLocation} />
    );
};

export default FetchLocator;
