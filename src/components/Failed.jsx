import { Container, FailText } from '../style/commonStyles';

export default function Failed() {
    return (
        <Container>
            <FailText>잠시후 다시 시도해주세요.</FailText>
        </Container>
    );
}
