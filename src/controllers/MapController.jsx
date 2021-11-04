import React, { useEffect } from 'react';
import mapScript from '../utils/mapScript';
import { MapContainer } from '../style/commonStyles';
import { useSelector } from 'react-redux';

export default function MapController() {
    const { list } = useSelector(state => state.info);

    useEffect(() => {
        mapScript(list);
    }, [list]);

    return <MapContainer id="map"></MapContainer>;
}
