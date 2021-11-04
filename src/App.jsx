import { useEffect } from 'react';
import MapController from './controllers/MapController';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from './module/infoSlice';
import Loading from './components/Loading';
import Failed from './components/Failed';

export default function App() {
    const { status } = useSelector(state => state.info);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    if (status === 'loading') <Loading />;
    if (status === 'failed') <Failed />;

    return <MapController />;
}
