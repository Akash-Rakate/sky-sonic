import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} -  SKY-SONIC`;
        } else {
            document.title = 'SKY-SONIC | Feel the Sound';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
