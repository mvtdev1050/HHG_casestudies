import React from 'react';
import { Button } from 'reactstrap';

interface Props {
    title: string,
    functionCounter: () => void,
    styleClass: string
}

const ButtonComponent: React.FC<Props> = ({title, functionCounter, styleClass}: Props) => {
    return (
        <div>
            <Button 
                color="primary" 
                onClick={functionCounter}
                className={styleClass}>
                {title}
            </Button>
        </div>
    );
}

export default ButtonComponent;