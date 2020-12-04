import React from 'react';
import { StringLiteral } from 'typescript';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;        // ? indicates optional field
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
}


export const TextField: React.FC<Props> = () => {
    return(
        <div></div>
    );
}