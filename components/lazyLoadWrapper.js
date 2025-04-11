import Image from 'next/image';
import Stack from '@mui/material/Stack';

const LazyLoadWrapper = (props) => {
    return (
        <Stack>
            {props.images.map((image, key) => (
                <Image
                    key={key}
                    quality={100}
                    alt={props.title}
                    src={image.imageSrc}
                    width={1140}
                    height={image.height}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy" // Explicitly enable lazy loading
                />
            ))}
        </Stack>
    );
};

export default LazyLoadWrapper;