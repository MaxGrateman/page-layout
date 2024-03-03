import "./Card.css"
import React, {ReactNode} from "react";

interface CardProps{
    height: number;
    width: number;
    padding: number;
    gap: number;
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent: 'space-between' | 'space-around';
    children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ height, width, padding, gap, flexDirection, justifyContent, children} : CardProps) => {
    return(
        <div style={{height, width, padding, gap, flexDirection, justifyContent}} className="card">
                {children}
        </div>
    )
}

export default Card